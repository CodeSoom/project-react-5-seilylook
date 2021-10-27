import React from 'react';

import styled from '@emotion/styled';
import colors from '../styles/colors';
import mediaquery from '../styles/mediaquery';

import RegisterFormContainer from '../containers/RegisterFormContainer';

const Container = styled.div(mediaquery({
  width: ['14em', '14em', '18em', '28em', '30em', '40em'],
  height: ['35.5em', '36em', '40em', '40.5em', '43em', '47em'],
  margin: [
    '3em auto',
    '3em auto',
    '2em auto',
    '6em auto',
    '10em auto',
    '15em auto 0',
  ],
  borderRadius: '0.5em',
  textAlign: 'center',
  background: `${colors.login_background}`,
}));

const Title = styled.h2(mediaquery({
  display: 'inline-block',
  width: ['14em', '14em', '16.4em', '18.6em', '16.6em', '20em'],
  height: ['1.2em', '1.3em', '1.3m', '1.3em', '1.2em', '1.3em'],
  margin: '1em auto',
  fontSize: ['1em', '1em', '1.1em', '1.5em', '1.8em', '2em'],
  textAlign: 'center',
  letterSpacing: '0.2em',
}));

export default function RegisterPage() {
  return (
    <Container>
      <Title>회원가입</Title>
      <RegisterFormContainer />
    </Container>
  );
}
