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

const RegisterForm = memo(({ fields, onChange, onSubmit }) => {
  const {
    email,
    password,
    phoneNumber,
    affiliation,
  } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <FormBox>
        <label htmlFor="register-email">
          이메일
        </label>
        <input
          type="email"
          id="register-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormBox>
      <FormBox>
        <label htmlFor="register-password">
          비밀번호
        </label>
        <input
          type="password"
          id="register-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormBox>
      <FormBox>
        <label htmlFor="register-phoneNumber">
          전화번호
        </label>
        <input
          type="phoneNumber"
          id="register-phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </FormBox>
      <FormBox>
        <label htmlFor="register-affiliation">
          소속
        </label>
        <input
          type="affiliation"
          id="register-affiliation"
          name="affiliation"
          value={affiliation}
          onChange={handleChange}
        />
      </FormBox>
      <Button
        type="button"
        onClick={onSubmit}
      >
        회원가입
      </Button>
    </Container>
  );
});

export default RegisterForm;
