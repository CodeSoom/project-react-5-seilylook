import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('shows contents', () => {
    const content = {
      id: 100,
      title: '제목1',
      desciption: '설명1',
    };

    const { container } = render((
      <Item content={content} />
    ));

    expect(container).toHaveTextContent('제목1');
  });
});
