import styled from '@emotion/styled';
import mediaquery from '../../styles/mediaquery';

const LoginBox = styled.div(mediaquery({
  width: ['12em', '12em', '15em', '23em', '27em', '30em'],
  margin: '0 auto',
  padding: '0.5em',
  textAlign: 'center',
  '& div': {
    height: ['3em', '3em', '3em', '4em', '5em', '5em'],
    margin: [
      '3em auto',
      '2.5em auto',
      '2.2em auto',
      '2.8em auto',
      '3.5em auto',
      '4em auto',
    ],
    '& p': {
      margin: '0.3em auto',
      fontSize: ['0.8em', '0.8em', '0.9em', '1.2em', '1.4em', '1.5em'],
    },
  },
}));

const Button = styled.button(mediaquery({
  display: 'block',
  width: ['15.5em', '15em', '17.5em', '18.5em', '21.5em', '21em'],
  height: ['1.5em', '1.5em', '1.6em', '1.5em', '1.7em', '1.8em'],
  margin: '1em auto 0.5em',
  padding: '0.5em 0',
  borderRadius: '0.2em',
  backgroundColor: 'white',
  fontSize: ['0.7em', '0.7em', '0.8em', '1.2em', '1.2em', '1.4em'],
  fontWeight: '500',
  cursor: 'pointer',
  lineHeight: 1,
  '&:hover': {
    color: 'white',
    backgroundColor: 'blue',
    fontWeight: '600',
  },
}));

export default function LogoutForm({ onClick }) {
  return (
    <LoginBox>
      <Button
        type="button"
        onClick={onClick}
      >
        로그아웃
      </Button>
    </LoginBox>
  );
}
