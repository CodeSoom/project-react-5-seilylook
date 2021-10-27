import React from 'react';

import { useDispatch } from 'react-redux';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import styled from '@emotion/styled';
import colors from './styles/colors';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import VersesPage from './pages/VersesPage';
import DiaryInputPage from './pages/DiaryInputPage';
import DiariesPage from './pages/DiariesPage';
import DiaryPage from './pages/DiaryPage';

import { setAccessToken } from './modules/actions';

import { loadItem } from './services/storage';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
  justifyContent: 'center',
});

const Header = styled.header({
  backgroundColor: `${colors.home_background}`,
  fontSize: '3.5em',
  textAlign: 'center',
  '& h1': {
    fontSize: '2.3em',
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: `${colors.white}`,
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

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
