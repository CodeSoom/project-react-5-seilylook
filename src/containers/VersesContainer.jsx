import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

export default function VersesContainer() {
  const verses = useSelector(get('verses'));

  return (
    <ul>
      {verses.map((verse) => (
        <li key={verse.id}>
          {verse.phrase}
        </li>
      ))}
    </ul>
  );
}
