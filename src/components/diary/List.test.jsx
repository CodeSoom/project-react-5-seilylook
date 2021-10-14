import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
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

  it('shows contests list', () => {
    const { container } = render((
      <List contents={contents} />
    ));

    expect(container).toHaveTextContent('제목1');
    expect(container).toHaveTextContent('설명1');
  });
});
