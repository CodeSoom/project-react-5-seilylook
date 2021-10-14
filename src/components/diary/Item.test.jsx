import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('shows contents', () => {
    const newContent = {
      id: '100',
      title: '새 제목',
      description: '새 설명',
    };

    const { container } = render((
      <Item restaurant={newContent} />
    ));

    expect(container).toHaveTextContent('새 제목');
    expect(container).toHaveTextContent('새 설명');
  });
});
