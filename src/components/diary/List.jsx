import React from 'react';

import Item from './Item';

export default function List({ contents }) {
  return (
    <ol>
      {contents.map((content) => (
        <Item
          key={content.id}
          content={content}
        />
      ))}
    </ol>
  );
}
