import { memo } from 'react';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
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
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-phoneNumber">
          Phone-Number
        </label>
        <input
          type="phoneNumber"
          id="login-phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-affiliation">
          Affiliation
        </label>
        <input
          type="affiliation"
          id="login-affiliation"
          name="affiliation"
          value={affiliation}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        로그인
      </button>
    </>
  );
});

export default LoginForm;
