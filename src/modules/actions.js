import {
  postLogin,
} from '../services/api';

import { saveItem } from '../services/storage';

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function changeRegisterField({ name, value }) {
  return {
    type: 'changeRegisterField',
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

export function setRegister() {
  return {
    type: 'setRegister',
  };
}

export function setTestaments(testaments) {
  return {
    type: 'setTestaments',
    payload: { testaments },
  };
}

export function selectTestament(testamentId) {
  return {
    type: 'selectTestament',
    payload: { testamentId },
  };
}

export function setDiaries(diaries) {
  return {
    type: 'setDiaries',
    payload: {
      diaries,
    },
  };
}

export function setDiary(diary) {
  return {
    type: 'setDiary',
    payload: { diary },
  };
}

export function changeCommentField({ name, value }) {
  return {
    type: 'changeCommentField',
    payload: { name, value },
  };
}

export function addDiary() {
  return {
    type: 'addDiary',
  };
}

export function changeDiaryField({ name, value }) {
  return {
    type: 'changeDiaryField',
    payload: {
      name,
      value,
    },
  };
}

export function addComment() {
  return {
    type: 'addComment',
  };
}
