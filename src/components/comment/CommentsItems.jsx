import React from 'react';

import styled from '@emotion/styled';
import mediaquery from '../../styles/mediaquery';

const Layout = styled.ul(mediaquery({
  width: '100%',
  margin: 0,
  padding: 0,
}));

const Item = styled.li(mediaquery({
  width: ['5em', '5em', '5em', '5em', '5em', '5em'],
  height: ['2em', '2em', '2em', '2.4em', '2.5em'],
  padding: '1em',
  listStyle: 'none',
  textAlign: 'center',
  '& p': {
    width: ['21em', '20.5em', '25em', '27em', '27em', '26em'],
    height: ['1em', '1.2em', '1.2em', '1.5em', '1.5em', '1.8em'],
    margin: '1em auto 0.5em',
    borderRadius: '0.2em',
    fontSize: ['0.7em', '0.7em', '0.7em', '1em', '1.2em', '1.4em'],
  },
}));

export default function CommentsItems({ comments }) {
  return (
    <Layout>
      {comments.map((comment) => (
        <Item key={comment.id}>
          <p>{comment.text}</p>
        </Item>
      ))}
    </Layout>
  );
}
