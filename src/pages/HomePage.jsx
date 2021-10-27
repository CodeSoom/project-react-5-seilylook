import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: '2em',
  listStyle: 'none',
  justifyContent: 'center',
});

const Item = styled.li({
  marginRight: '2.5em',
  '& a': {
    color: '#333',
    fontSize: '1.6em',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function HomePage() {
  return (
    <>
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
          <Link to="/diaries">게시판</Link>
        </Item>
      </List>
    </>
  );
}
