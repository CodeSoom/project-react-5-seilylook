import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import colors from '../styles/colors';
import mediaquery from '../styles/mediaquery';

import TestamentsContainer from '../containers/TestamentsContainer';
import ContentsContainer from '../containers/ContentsContainer';
import VersesContainer from '../containers/VersesContainer';

import {
  loadInitialData,
} from '../modules/actions';

const Container = styled.div(mediaquery({
  width: ['17em', '17em', '21em', '31em', '33em', '38em'],
  height: ['16em', '15em', '15em', '20em', '25em', '28em'],
  margin: [
    '4em auto 0',
    '4em auto 0',
    '5em auto 0',
    '8em auto 0',
    '12em auto 0',
    '15em auto 0',
  ],
  padding: 0,
  borderRadius: '0.5em',
  textAlign: 'center',
  background: `${colors.white}`,
}));

const Title = styled.h2(mediaquery({
  display: 'inline-block',
  width: ['14em', '14em', '18em', '18.6em', '16.6em', '17.5em'],
  height: ['1em', '1em', '1em', '1em', '1.2em', '1.3em'],
  margin: '1em auto',
  fontSize: ['1em', '1em', '1em', '1.5em', '1.8em', '2em'],
  textAlign: 'center',
  letterSpacing: '0.2em',
}));

export default function VersesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <Container>
      <Title>성경 목차</Title>
      <TestamentsContainer />
      <ContentsContainer />
      <VersesContainer />
    </Container>
  );
}
