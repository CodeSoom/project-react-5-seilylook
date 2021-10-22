import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import TestamentsContainer from '../containers/TestamentsContainer';
import ContentsContainer from '../containers/ContentsContainer';

import TESTAMENTS from '../../fixtures/testaments';
import CONTENTS from '../../fixtures/contents';

import {
  setTestaments,
  setContents,
} from '../modules/actions';

export default function VersesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTestaments(TESTAMENTS));
    dispatch(setContents(CONTENTS));
  });

  return (
    <div>
      <h2>성경 구절</h2>
      <TestamentsContainer />
      <ContentsContainer />
    </div>
  );
}
