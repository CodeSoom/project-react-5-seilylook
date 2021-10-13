import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryInputPage from './DiaryInputPage';

jest.mock('react-redux');

describe('DiaryInputPage', () => {
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

  it('renders /diaryinput', () => {
    const { container } = render((
      <DiaryInputPage />
    ));

    expect(container).toHaveTextContent('기도 노트');
  });
});
