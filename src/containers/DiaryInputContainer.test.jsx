import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryInputContainer from './DiaryInputContainer';

jest.mock('react-redux');

describe('DiaryInputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      diary: {
        title: '오늘의 일기',
        description: '동해물과 백두산이',
      },
      accessToken: given.accessToken,
    }));
  });

  context('without logged-in', () => {
    it('renders no diary input fields', () => {
      const { queryByLabelText } = render((
        <DiaryInputContainer />
      ));

      expect(queryByLabelText('제목')).toBeNull();
    });
  });

  context('with logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders diary input fields', () => {
      const { getByText, getByPlaceholderText } = render((
        <DiaryInputContainer />
      ));

      expect(getByPlaceholderText('제목')).not.toBeNull();
      expect(getByText('등록')).not.toBeNull();

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({
        type: 'addDiary',
      });
    });
  });
});
