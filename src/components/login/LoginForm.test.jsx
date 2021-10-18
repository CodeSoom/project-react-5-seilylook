import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm({
    email,
    password,
    phoneNumber,
    affiliation,
  } = {}) {
    return render((
      <LoginForm
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

    const { getByLabelText } = renderLoginForm({
      email,
      password,
      phoneNumber,
      affiliation,
    });

    const controls = [
      { label: 'E-mail', value: email },
      { label: 'Password', value: password },
      { label: 'Phone-Number', value: phoneNumber },
      { label: 'Affiliation', value: affiliation },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);
      expect(input.value).toBe(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@test.com' },
      { label: 'Password', name: 'password', value: 'test' },
      { label: 'Phone-Number', name: 'phoneNumber', value: '010-1234-5678' },
      { label: 'Affiliation', name: 'affiliation', value: '1' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);
      fireEvent.change(input, { target: { value } });
      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders “Log In” button', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('로그인'));

    expect(handleSubmit).toBeCalled();
  });
});
