import styled from '@emotion/styled';
import colors from '../../styles/colors';

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
