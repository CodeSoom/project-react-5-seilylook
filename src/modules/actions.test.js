import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  requestLogin,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: {
          email: 'test@test',
          password: 'test',
        },
      });
    });

    it('gets accessToken for login', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'setAccessToken',
        payload: { accessToken: '' },
      });
    });
  });
});
