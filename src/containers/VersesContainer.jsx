import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

export default function VersesContainer() {
  const verses = useSelector(get('verses'));

  return (
    <>
      <h3>좋은 구절</h3>
      <ul>
        {verses.map((verse) => (
          <li key={verse.id}>
            {verse.name}
          </li>
        ))}
      </ul>
    </>
  );
}
