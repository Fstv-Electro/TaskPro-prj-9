import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, update, changeTheme } from './operations';

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
      console.log(action.payload.user);
    },
    [logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLogin = false;
    },
    [update.fulfilled](state, action) {
      state.user = action.payload.user;
    },
    [changeTheme.fulfilled](state, action) {
      state.user.theme = action.payload.user.theme;
    },
  },
});

export default authSlice.reducer;
