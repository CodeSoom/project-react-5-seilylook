import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  requestLogin,
  loadInitialData,
  setTestaments,
  setContents,
  loadVerses,
  setVerses,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadInitialData', () => {
    beforeEach(() => {
      store = mockStore();
    });

    it('runs setTestaments and setContents', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setTestaments([]));
      expect(actions[1]).toEqual(setContents([]));
    });
  });

  describe('loadVerses', () => {
    context('with selectedTestament and selectedContent', () => {
      beforeEach(() => {
        store = mockStore({
          selectedTestament: { id: 1, name: '구약' },
          selectedContent: { id: 1, name: '창세기' },
        });
      });

      it('runs setVerses', async () => {
        await store.dispatch(loadVerses());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setVerses([]));
      });
    });

    context('without selectedTestament', () => {
      beforeEach(() => {
        store = mockStore({
          selectedContent: { id: 1, name: '창세기' },
        });
      });

      it('does not run any actions', async () => {
        await store.dispatch(loadVerses());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedContent', () => {
      beforeEach(() => {
        store = mockStore({
          selectedTestament: { id: 1, name: '구약' },
        });
      });

      it('does not run any actions', async () => {
        await store.dispatch(loadVerses());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

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
