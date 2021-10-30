import React from 'react';

import styled from '@emotion/styled';
import mediaquery from '../../styles/mediaquery';
import colors from '../../styles/colors';

const Container = styled.div(mediaquery({
  margin: '0 auto',
  padding: 0,
  textAlign: 'center',
}));

const FormBox = styled.div(mediaquery({
  width: ['11em', '11em', '14em', '22em', '26em', '29em'],
  height: ['9em', '8em', '8em', '9em', '10em', '10.5em'],
  margin: '0 auto',
  padding: [
    '0.5em',
    '0 0.5em 0.5em',
    '0 0.5em 0.5em',
    '0 0.5em 0.5em',
    '0 0.5em 0.5em',
    '0 0.5em 0.5em',
  ],
  textAlign: 'center',
  '& label': {
    width: ['14em', '13em', '17em', '6em', '6em', '6em'],
    padding: [
      '1em 0 0.5em',
      '1em 0 0.5em',
      '1em 0 0.5em',
      '1.5em 0.5em',
      '1.6em 0.5em',
      '1.5em 0.5em',
    ],
    color: `${colors.black}`,
    fontSize: ['0.7em', '0.7em', '0.7em', '1em', '1.1em', '1.2em'],
    textAlign: 'center',
  },
  '& input': {
    width: ['16em', '16em', '20em', '17em', '20em', '70%'],
    height: ['3em', '3em', '3em', '3em', '3.3em', '3.5em'],
    margin: '0 auto',
    padding: '0.5em',
    border: '1px solid #eee',
    color: `${colors.gray_input}`,
    backgroundColor: 'transparent',
    fontSize: ['0.6em', '0.6em', '0.6em', '0.8em', '0.9em', '1em'],
    outlineStyle: 'none',
  },
}));

const Button = styled.div(mediaquery({
  width: ['16em', '15.5em', '20em', '22em', '22em', '21em'],
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

export default function TextField({
  label,
  type = 'text',
  name,
  onChange,
  onSubmit,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <FormBox>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={handleChange}
        />
      </FormBox>
      <Button
        type="button"
        onClick={onSubmit}
      >
        댓글 남기기
      </Button>
    </Container>
  );
}
