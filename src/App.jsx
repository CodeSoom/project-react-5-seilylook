import React from 'react';

import { useDispatch } from 'react-redux';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import styled from '@emotion/styled';
import mediaquery from './styles/mediaquery';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import VersesPage from './pages/VersesPage';
import DiaryInputPage from './pages/DiaryInputPage';
import DiariesPage from './pages/DiariesPage';
import DiaryPage from './pages/DiaryPage';

import { setAccessToken } from './modules/actions';

import { loadItem } from './services/storage';

const Container = styled.header(mediaquery({
  margin: '0 auto',
  lineHeight: ['4em', '5em', '6em', '9em', '11em', '12em'],
}));

const Header = styled.h1(mediaquery({
  margin: '0 auto',
  color: 'black',
  fontSize: ['1.8em', '1.9em', '2.3em', '2.8em', '3.5em', '3.8em'],
  textAlign: 'center',
  '& a': {
    color: 'black',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    },
  },
}));

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');

  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <>
      <Container>
        <Header>
          <Link to="/">구름이노트</Link>
        </Header>
      </Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/verses" component={VersesPage} />
        <Route path="/diaryinput" component={DiaryInputPage} />
        <Route exact path="/diaries" component={DiariesPage} />
        <Route path="/diaries/:id" component={DiaryPage} />
      </Switch>
    </>
  );
}
