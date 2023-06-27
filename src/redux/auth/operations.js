import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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


export const updata = createAsyncThunk('auth/updata',
  async (updataUser, thunkAPI) => {
    try {
      console.log(updataUser);
      const response = await axios.post('/users/updata', updataUser);
      
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);