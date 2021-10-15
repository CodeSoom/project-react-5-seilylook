import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DiaryListPage from './DiaryListPage';

jest.mock('react-redux');

describe('DiaryListPage', () => {
  it('rneders diary list page', () => {
    const contents = [
      {
        id: 100,
        name: 'title',
        placeholder: '제목',
        value: '',
      },
      {
        id: 101,
        name: 'description',
        placeholder: '설명',
        value: '',
      },
    ];

    useSelector.mockImplementation((selector) => selector({
      contents,
    }));

    const { container } = render((
      <DiaryListPage />
    ));

    expect(container).toHaveTextContent('기도 노트 목록');
  });
});
