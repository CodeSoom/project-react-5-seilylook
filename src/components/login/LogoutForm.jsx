import styled from '@emotion/styled';
import colors from '../../styles/colors';
import mediaquery from '../../styles/mediaquery';

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

export default function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
      >
        로그아웃
      </Button>
    </>
  );
}
