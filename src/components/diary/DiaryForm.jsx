import React from 'react';

import styled from '@emotion/styled';
import colors from '../../styles/colors';

const Container = styled.div({
  margin: '0 auto',
  padding: 0,
  textAlign: 'center',
});

const FormBox = styled.div({
  padding: '0 0.5em 0.5em',
  '& label': {
    width: '14em',
    padding: '1.5em 0.5em',
    color: `${colors.black}`,
    fontSize: '0.7em',
    textAlign: 'center',
  },
  '& input': {
    width: '16em',
    heigth: '3em',
    margin: '0 auto',
    padding: '0.5em',
    border: '1px solid #eee',
    color: `${colors.gray_input}`,
    backgroundColor: 'transparent',
    fontsize: '0.6em',
    outlineStyle: 'none',
  },
});

const Button = styled.div({
  width: '16em',
  height: '1em',
  margin: '1em auto 0.5em',
  borderRadius: '0.2em',
  backgroundColor: `${colors.button}`,
  fontsize: '0.7em',
  cursor: 'pointer',
  lineHeight: 1,
  '&:hover': {
    color: `${colors.white}`,
    backgroundColor: `${colors.green_text}`,
    fontWeight: '600',
  },
});

export default function DiaryForm({ diary, onClick, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <Container>
      <FormBox>
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={diary.title}
          onChange={handleChange}
        />
      </FormBox>
      <FormBox>
        <input
          type="text"
          name="description"
          placeholder="설명"
          value={diary.description}
          onChange={handleChange}
        />
      </FormBox>
      <Button
        type="button"
        onClick={onClick}
      >
        등록
      </Button>
    </Container>
  );
}
