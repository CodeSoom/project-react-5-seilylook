const initialState = {
  accessToken: '',
  loginFields: {
    email: '',
    password: '',
  },
  newId: 103,
  inputTitles: [
    {
      name: 'title',
      placeholder: '제목',
      text: '',
    },
    {
      name: 'description',
      placeholder: '설명',
      text: '',
    },
  ],
  contents: [],
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

  changeContent(state, { payload: { name, value } }) {
    const newContext = state.inputTitles.map((inputTitle) => ({
      ...inputTitle,
      value: inputTitle.name === name
        ? value : inputTitle.value,
    }));

    return {
      ...state,
      inputTitles: newContext,
    };
  },

  addContent(state) {
    const { newId, inputTitles, contents } = state;
    const [title, description] = inputTitles;

    const newContext = inputTitles.map((inputTitle) => ({
      ...inputTitle,
      value: '',
    }));

    const emptyContent = inputTitles.filter((inputTitle) => inputTitle.value === '').length;

    if (emptyContent) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      inputTitles: newContext,
      contents: [...contents, {
        id: newId,
        title: title.value,
        description: description.value,
      }],
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
