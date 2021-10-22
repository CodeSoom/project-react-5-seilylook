import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function HomePage() {
  return (
    <div>
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
    </div>
  );
}
