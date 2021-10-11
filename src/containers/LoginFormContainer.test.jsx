import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  it('shows login fields', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail').value).toBe('test@test');
    expect(getByLabelText('Password').value).toBe('1234');
  });
});
