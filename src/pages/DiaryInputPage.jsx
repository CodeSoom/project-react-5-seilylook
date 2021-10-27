import React from 'react';

import styled from '@emotion/styled';
import colors from '../styles/colors';

import DiaryInputContainer from '../containers/DiaryInputContainer';

const Container = styled.div({
  width: '22em',
  height: '24em',
  margin: '4em auto 0',
  padding: 0,
  borderRadius: '0.5em',
  textAlign: 'center',
  background: `${colors.diaryInput_background}`,
});

const Title = styled.h2({
  display: 'inline-block',
  width: '14em',
  height: '1em',
  margin: '1em auto',
  fontsize: '1.8em',
  textAlign: 'center',
  letterSpacing: '0.2em',
});

export default function DiaryInputPage() {
  return (
    <Container>
      <Title>기도 노트</Title>
      <DiaryInputContainer />
    </Container>
  );
}
