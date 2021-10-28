import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';
import mediaquery from '../styles/mediaquery';

import { get } from '../modules/utils';

const Layout = styled.ul(mediaquery({
  width: '100%',
  margin: 0,
  padding: 0,
}));

const Title = styled.h2(mediaquery({
  display: 'inline-block',
  width: ['14em', '14em', '18em', '18.6em', '16.6em', '17.5em'],
  height: ['1em', '1em', '1em', '1em', '1.2em', '1.3em'],
  margin: '1em auto',
  fontSize: ['1em', '1em', '1em', '1.5em', '1.8em', '2em'],
  textAlign: 'center',
  letterSpacing: '0.2em',
}));

const Item = styled.li(mediaquery({
  padding: '1em',
  listStyle: 'none',
  textAlign: 'center',
}));

const Verse = styled.div(mediaquery({
  fontSize: ['1.7em', '1.7em', '1.7em', '2em', '2.2em', '2.4em'],
  listStyle: 'none',
  display: 'flex',
}));

export default function VersesContainer() {
  const verses = useSelector(get('verses'));

  return (
    <>
      <Layout>
        <Title>구절</Title>
        {verses.map((verse) => (
          <Item key={verse.id}>
            <Verse>
              {verse.name}
            </Verse>
          </Item>
        ))}
      </Layout>
    </>
  );
}
