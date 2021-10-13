import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryInputContainer from './DiaryInputContainer';

jest.mock('react-redux');

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

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    inputTitles,
  }));

  it('shows placeholders', () => {
    const { getByPlaceholderText } = render((
      <DiaryInputContainer />
    ));

    expect(getByPlaceholderText('제목')).toBeInTheDocument();
    expect(getByPlaceholderText('내용')).toBeInTheDocument();
  });

  context('when content is changed', () => {
    it('updates contents', () => {
      const { getByPlaceholderText } = render((
        <DiaryInputContainer />
      ));

      fireEvent.change(getByPlaceholderText('제목'), {
        target: { value: 'new title' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeContent',
        payload: { name: 'title', value: 'new title' },
      });
    });
  });
});
