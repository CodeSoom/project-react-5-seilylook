import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import mediaquery from '../styles/mediaquery';

const Container = styled.div(
  mediaquery({
    margin: '0 auto',
    width: '90%',
    justifyContent: 'center',
  }),
);

const List = styled.ul(
  mediaquery({
    width: '100%',
    marginTop: '2em',
    padding: 0,
    display: 'flex',
  }),
);

const Item = styled.li(
  mediaquery({
    width: ['5em', '5em', '5em', '5em', '5em', '5em'],
    height: ['2em', '2em', '2em', '2.4em', '2.5em'],
    margin: '0 2em 0 auto',
    padding: '0.5em',
    borderRadius: '0.4em',
    listStyle: 'none',
    '& a': {
      color: '#333',
      fontSize: ['0.6em', '0.7em', '0.8em', '0.9em', '1.1em', '1.4em'],
      textDecoration: 'none',
      '&:hover': {
        fontWeight: 'bold',
        color: '#000',
      },
    },
  }),
);

export default function HomePage() {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/register">회원가입</Link>
        </Item>
        <Item>
          <Link to="/login">로그인</Link>
        </Item>
        <Item>
          <Link to="/verses">성경 구절</Link>
        </Item>
        <Item>
          <Link to="/diaryInput">기도 노트</Link>
        </Item>
        <Item>
          <Link to="/diaries">댓글</Link>
        </Item>
      </List>
    </Container>
  );
}
