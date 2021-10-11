import { createSlice } from '@reduxjs/toolkit';

import { equal } from './utils';

const { action, reducer } = createSlice({
  initialState: {
    loginFields: {
      email: '',
      password: '',
    },
  },
});
