const initialDiary = {
  title: '',
  description: '',
};

const initialState = {
  accessToken: '',
  loginFields: {
    email: '',
    password: '',
    phoneNumber: '',
    affiliation: '',
  },
  newId: 100,
  diaries: [],
  diary: initialDiary,
};

const reducers = {
  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
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

  setDiaries(state, { payload: { diaries } }) {
    return {
      ...state,
      diaries,
    };
  },

  changeDiaryField(state, { payload: { name, value } }) {
    return {
      ...state,
      diary: {
        ...state.diary,
        [name]: value,
      },
    };
  },

  addDiary(state) {
    const { newId, diaries, diary } = state;

    return {
      ...state,
      newId: newId + 1,
      diaries: [...diaries, { ...diary, id: newId }],
      diary: initialDiary,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
