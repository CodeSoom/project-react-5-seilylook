import {
  postLogin,
} from '../services/api';

import { saveItem } from '../services/storage';

export function changeContent(name, value) {
  return {
    type: 'changeContent',
    payload: {
      name,
      value,
    },
  };
}

export function addContent() {
  return {
    type: 'addContent',
  };
}

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export function logout() {
  return {
    type: 'logout',
  };
}
