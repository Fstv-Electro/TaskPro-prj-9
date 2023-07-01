import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://task-pro-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

Notiflix.Notify.init({
  position: 'right-bottom',
});

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      console.log(newUser);
      const response = await axios.post('/users/register', newUser);
      token.set(response.data.token);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  try {
    console.log(user);
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logOut');
    token.set('');
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const update = createAsyncThunk('auth/update',
  async (updateUser, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', updateUser);
      Notiflix.Notify.success('Data updated successfully!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Error updating data!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeTheme = createAsyncThunk( 'auth/theme',
  async (changeTheme, thunkAPI) => {
    try {
      const response = await axios.patch('/users/theme', changeTheme);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
