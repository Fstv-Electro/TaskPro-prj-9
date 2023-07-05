import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  register,
  registerGoogle,
  logOut,
  update,
  changeTheme,
  refreshUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isError: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
      state.isError = false;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [register.rejected](state, action) {
      state.isError = true;
    },
    [registerGoogle.fulfilled](state, action) {
      state.token = action.payload;
      state.isLogin = true;
    },
    [logIn.pending](state, action) {
      state.isError = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logIn.rejected](state, action) {
      state.isError = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLogin = false;
    },
    [update.pending](state) {
      state.isError = false;
      state.isLoading = true;
    },
    [update.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoading = false;
    },
    [update.rejected](state) {
      state.isError = true;
      state.isLoading = false;
    },
    [changeTheme.fulfilled](state, action) {
      state.user.theme = action.payload.user.theme;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogin = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
