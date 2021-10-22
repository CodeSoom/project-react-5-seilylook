import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import TestamentsContainer from '../containers/TestamentsContainer';

import {
  setTestaments,
} from '../modules/actions';

export default function VersesPage() {
  const dispatch = useDispatch();

  const testaments = [
    { id: 1, name: '구약' },
    { id: 2, name: '신약' },
  ];

  useEffect(() => {
    dispatch(setTestaments(testaments));
  });

  return (
    <div>
      <h2>성경 구절</h2>
      <TestamentsContainer />
    </div>
  );
}
