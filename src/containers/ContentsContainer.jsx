import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import colors from '../styles/colors';
import mediaquery from '../styles/mediaquery';

import {
  selectContent,
  loadVerses,
} from '../modules/actions';

import { get } from '../modules/utils';

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
  '& a': {
    color: `${colors.black}`,
    '&:hover': {
      color: `${colors.gray_text02}`,
      fontWeight: '700',
    },
  },
}));

const Title = styled.h4(mediaquery({
  display: 'inline-block',
  width: ['14em', '14em', '18em', '18.6em', '16.6em', '17.5em'],
  height: ['1em', '1em', '1em', '1em', '1.2em', '1.3em'],
  margin: '1em auto',
  fontSize: ['1em', '1em', '1em', '1.5em', '1.8em', '2em'],
  textAlign: 'center',
  letterSpacing: '0.2em',
}));

const Button = styled.div(mediaquery({
  width: ['21em', '20.5em', '25em', '27em', '27em', '26em'],
  height: ['1em', '1.2em', '1.2em', '1.5em', '1.5em', '1.8em'],
  margin: '1em auto 0.5em',
  borderRadius: '0.2em',
  backgroundColor: `${colors.button}`,
  fontSize: ['0.7em', '0.7em', '0.7em', '1em', '1.2em', '1.4em'],
  cursor: 'pointer',
  lineHeight: 1,
  '&:hover': {
    color: `${colors.white}`,
    backgroundColor: `${colors.blue_text}`,
    fontWeight: '600',
    textAlign: 'center',
  },
}));

export default function ContentsContainer() {
  const dispatch = useDispatch();

  const contents = useSelector(get('contents'));
  const selectedContent = useSelector(get('selectedContent'));

  function handleClick(contentId) {
    dispatch(selectContent(contentId));
    dispatch(loadVerses());
  }

  return (
    <Layout>
      <Title>목차</Title>
      {contents.map((content) => (
        <Item key={content.id}>
          <Button
            type="button"
            onClick={() => handleClick(content.id)}
          >
            {content.name}
            {selectedContent ? (
              <>
                {content.id === selectedContent.id ? '(V)' : null}
              </>
            ) : null }
          </Button>
        </Item>
      ))}
    </Layout>
  );
}
