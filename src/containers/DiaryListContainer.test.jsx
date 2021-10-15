import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DiaryListContainer from './DiaryListContainer';

jest.mock('react-redux');

describe('DiaryListContainer', () => {
  const contents = [
    {
      id: 100,
      title: '제목1',
      description: '설명1',
    },
    {
      id: 101,
      title: '제목2',
      description: '설명2',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    contents,
    accessToken: given.accessToken,
  }));

  it('shows contents list', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    const { container } = render((
      <DiaryListContainer />
    ));

    expect(container).toHaveTextContent('제목1');
    expect(container).toHaveTextContent('설명1');
  });
});
