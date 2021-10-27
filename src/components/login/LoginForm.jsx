import { memo } from 'react';

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
    backgroundColor: `${colors.blue_text}`,
    fontWeight: '600',
  },
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const {
    email,
    password,
  } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <FormBox>
        <label htmlFor="login-email">
          이메일
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleChange}
        />
      </FormBox>
      <FormBox>
        <label htmlFor="login-password">
          비밀번호
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={handleChange}
        />
      </FormBox>
      <Button
        type="button"
        onClick={onSubmit}
      >
        로그인
      </Button>
    </Container>
  );
});

export default LoginForm;
