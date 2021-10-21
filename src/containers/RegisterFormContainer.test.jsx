import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegisterFormContainer from './RegisterFormContainer';

jest.mock('react-redux');

describe('RegisterFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      registerFields: {
        email: 'test@test.com',
        password: '1234',
        phoneNumber: '010-1234-5678',
        affiliation: '1',
      },
    }));
  });

  context('without registered', () => {
    it('renders input controls', () => {
      const { getByLabelText } = render((
        <RegisterFormContainer />
      ));

      expect(getByLabelText('이메일').value).toBe('test@test.com');
      expect(getByLabelText('비밀번호').value).toBe('1234');
      expect(getByLabelText('전화번호').value).toBe('010-1234-5678');
      expect(getByLabelText('소속').value).toBe('1');
    });
  });
});
