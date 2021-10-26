import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import mediaquery from '../styles/mediaquery';

const List = styled.ul(mediaquery({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  width: '100%',
}));

const Item = styled.li(mediaquery({
  width: ['5em', '5em', '5em', '5em', '5em', '5em'],
  height: ['2em', '2em', '2em', '2.4em', '2.5em'],
  margin: '0 2em 0 auto',
  padding: '0.5em',
  borderRadius: '0.4em',
  backgroundColor: 'rgb(180, 251, 255)',
  fontSize: ['0.7em', '0.8em', '0.9em', '1em', '1.2em', '1.5em'],
  fontWeight: '500',
  lineHeight: [1, 1, 1, 1.2, 1.5, 1.5],
  textAlign: 'center',
  '& a': {
    color: 'black',
    '&:hover': {
      color: 'black',
      fontWeight: '700',
    },
  },
}));

export default function HomePage() {
  return (
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
        <Link to="/diaries">노트 목록</Link>
      </Item>
    </List>
  );
}
