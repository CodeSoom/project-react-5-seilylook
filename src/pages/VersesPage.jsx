import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import TestamentsContainer from '../containers/TestamentsContainer';
import ContentsContainer from '../containers/ContentsContainer';
import VersesContainer from '../containers/VersesContainer';

import {
  loadInitialData,
} from '../modules/actions';

export default function VersesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <h2>성경 목차</h2>
      <TestamentsContainer />
      <ContentsContainer />
      <VersesContainer />
    </div>
  );
}
