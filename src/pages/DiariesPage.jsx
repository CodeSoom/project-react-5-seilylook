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
  background: `${colors.login_background}`,
}));

export default function DiariesPage() {
  const history = useHistory();

  function handleClickDiary(diary) {
    const url = `/diaries/${diary.id}`;
    history.push(url);
  }

  return (
    <Container>
      <DiariesContainer onClickDiary={handleClickDiary} />
    </Container>
  );
}
