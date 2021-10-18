import React from 'react';

import Item from './Item';

export default function List({ diaries }) {
  return (
    <ol>
      {diaries.map((diary) => (
        <Item
          key={diary.id}
          diary={diary}
        />
      ))}
    </ol>
  );
}
