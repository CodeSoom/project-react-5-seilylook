import { memo } from 'react';

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
    <>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        회원가입
      </button>
    </>
  );
});

export default RegisterForm;
