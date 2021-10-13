import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import reducer, {
  requestLogin,
  changeLoginField,
  setAccessToken,
} from './slice';

const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: { email: '', password: '' },
      });
    });

    it('dispatchs setAccessToken', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken({}));
    });
  });
});

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: '',
      newId: 103,
      inputTitles: [
        {
          name: 'title',
          placeholder: '제목',
          text: '',
        },
        {
          name: 'description',
          placeholder: '내용',
          text: '',
        },
      ],
      contents: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes only email field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'email', value: 'test' }),
        );

        expect(state.loginFields.email).toBe('test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('when password is changed', () => {
      it('changes only password field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'password', value: 'test' }),
        );

        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('test');
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes access token', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });
});
