import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegisterPage from './RegisterPage';

jest.mock('react-redux');

describe('RegisterPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      registerFields: {
        email: 'test@test.com',
        password: '1234',
        phoneNumber: '010-1234-5678',
        affiliation: '1',
      },
    }));
  });

  it('renders RegisterPage', () => {
    const { container } = render((
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('회원가입');
  });
});
