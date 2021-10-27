import { memo } from 'react';

import styled from '@emotion/styled';
import colors from '../../styles/colors';
import mediaquery from '../../styles/mediaquery';

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
          placeholder="이메일을 입력하세요"
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
          placeholder="비밀번호를 입력하세요"
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
          placeholder="전화번호를 입력하세요"
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
          placeholder="소속 교구를 입력하세요"
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
