import { createSlice } from '@reduxjs/toolkit';

import {
  postLogin,
} from '../services/api';

import { saveItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'application',

  initialState: {
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
  },

  reducers: {
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    changeContent(state, { payload: { name, value } }) {
      return {
        ...state,
        inputTitles: {
          ...state.inputTitles,
          [name]: value,
        },
      };
    },

    addContent(state) {
      const { newId, inputTitles, contents } = state;
      const [title, description] = inputTitles;

      const newContent = inputTitles.map((inpuTitle) => ({
        ...inpuTitle,
        value: '',
      }));

      const emptyContent = inputTitles.filter((inputTitle) => inputTitle.value === '').length;

      if (emptyContent) {
        return state;
      }

      return {
        ...state,
        newId: newId + 1,
        inputTitles: newContent,
        contents: [...contents, {
          id: newId,
          title,
          description,
        }],
      };
    },

    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    logout(state) {
      return {
        ...state,
        accessToken: '',
      };
    },
  },
});

export const {
  changeLoginField,
  setAccessToken,
  logout,
  changeContent,
  addContent,
} = actions;

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export default reducer;
