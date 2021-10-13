import React from 'react';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import styled from '@emotion/styled';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PamphletPage from './pages/PamphletPage';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
  justifyContent: 'center',
});

const Header = styled.header({
  backgroundColor: '#EEE',
  '& h1': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function App() {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/pamphlet" component={PamphletPage} />
      </Switch>
    </Container>
  );
}
