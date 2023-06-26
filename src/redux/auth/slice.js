import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
  },
});

export default authSlice.reducer;
