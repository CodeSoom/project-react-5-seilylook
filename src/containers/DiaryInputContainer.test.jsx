import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryInputContainer from './DiaryInputContainer';

describe('DiaryInputContainer', () => {
  const dispatch = jest.fn();

  const inputTitles = [
    {
      name: 'title',
      placeholder: '제목',
      value: '',
    },
    {
      name: 'description',
      placeholder: '내용',
      value: '',
    },
  ];

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      inputTitles,
      accessToken: given.accessToken,
    }));
  });

  context('without logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders placeholders', () => {
      const { getByPlaceholderText } = render((
        <DiaryInputContainer />
      ));

      expect(getByPlaceholderText('제목')).not.toBeNull();
      expect(getByPlaceholderText('내용')).not.toBeNull();
    });

    it('listens change event', () => {
      const { getByText, getByPlaceholderText } = render((
        <DiaryInputContainer />
      ));
      fireEvent.change(getByPlaceholderText('제목'), {
        target: { value: 'new title' },
      });
      expect(dispatch).toBeCalledWith({
        type: 'changeContent',
        payload: {
          name: 'title',
          value: 'new title',
        },
      });
      fireEvent.click(getByText('등록'));
      expect(dispatch).toBeCalledWith({
        type: 'addContent',
      });
    });
  });
});
