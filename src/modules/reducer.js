import { equal } from './utils';

const initialDiary = {
  title: '',
  description: '',
};

const initialComment = {
  text: '',
};

const initialState = {
  accessToken: '',
  newId: 100,
  registerFields: {
    email: '',
    password: '',
    phoneNumber: '',
    affiliation: '',
  },
  loginFields: {
    email: '',
    password: '',
  },
  testaments: [],
  selectedTestament: null,
  contents: [],
  selectedContent: null,
  verses: [],
  verse: null,
  diaries: [],
  diary: initialDiary,
  comments: [],
  comment: initialComment,
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

  changeRegisterField(state, { payload: { name, value } }) {
    return {
      ...state,
      registerFields: {
        ...state.registerFields,
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

  setTestaments(state, { payload: { testaments } }) {
    return {
      ...state,
      testaments,
    };
  },

  selectTestament(state, { payload: { testamentId } }) {
    const { testaments } = state;
    return {
      ...state,
      selectedTestament: testaments.find(equal('id', testamentId)),
    };
  },

  setContents(state, { payload: { contents } }) {
    return {
      ...state,
      contents,
    };
  },

  selectContent(state, { payload: { contentId } }) {
    const { contents } = state;
    return {
      ...state,
      selectedContent: contents.find(equal('id', contentId)),
    };
  },

  setVerses(state, { payload: { verses } }) {
    return {
      ...state,
      verses,
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

  changeCommentField(state, { payload: { name, value } }) {
    return {
      ...state,
      comment: {
        ...state.comment,
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

  addComment(state) {
    const { comments, comment } = state;

    return {
      ...state,
      comments: [...comments, { ...comment }],
      comment: initialComment,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
