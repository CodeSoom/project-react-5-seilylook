/* eslint-disable react/jsx-no-bind */
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';
import colors from '../styles/colors';
import mediaquery from '../styles/mediaquery';

import DiariesContainer from '../containers/DiariesContainer';

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

export default function DiariesPage() {
  const history = useHistory();

  function handleClickDiary(diary) {
    const url = `/diaries/${diary.id}`;
    history.push(url);
  }

  return (
    <Container>
      <Title>게시판</Title>
      <DiariesContainer onClickDiary={handleClickDiary} />
    </Container>
  );
}
