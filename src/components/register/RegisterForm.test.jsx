import { render, fireEvent } from '@testing-library/react';

import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderRegisterForm({
    email,
    password,
    phoneNumber,
    affiliation,
  } = {}) {
    return render((
      <RegisterForm
        fields={{
          email,
          password,
          phoneNumber,
          affiliation,
        }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controls', () => {
    const email = 'test@test.com';
    const password = '1234';
    const phoneNumber = '010-1234-5678';
    const affiliation = '1';

    const { getByLabelText } = renderRegisterForm({
      email,
      password,
      phoneNumber,
      affiliation,
    });

    const controls = [
      { label: '이메일', value: email },
      { label: '비밀번호', value: password },
      { label: '전화번호', value: phoneNumber },
      { label: '소속', value: affiliation },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);
      expect(input.value).toBe(value);
    });
  });

  it('listens change evnets', () => {
    const { getByLabelText } = renderRegisterForm();

    const controls = [
      { label: '이메일', name: 'email', value: 'tester@test.com' },
      { label: '비밀번호', name: 'password', value: 'test' },
      { label: '전화번호', name: 'phoneNumber', value: '010-1234-5678' },
      { label: '소속', name: 'affiliation', value: '1' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);
      fireEvent.change(input, { target: { value } });
      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders sign-up button', () => {
    const { getByText } = renderRegisterForm();

    fireEvent.click(getByText('회원가입'));

    expect(handleSubmit).toBeCalled();
  });
});
