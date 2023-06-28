import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, updata, changeTheme } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isError: false,
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

    [logIn.pending](state, action) {
      state.isError = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLogin = false;
    },
    [updata.fulfilled](state, action) {
      state.user = action.payload.user;
    },
    [changeTheme.fulfilled](state, action) {
      state.user = action.payload.user;
    },
  },
});

export default authSlice.reducer;
