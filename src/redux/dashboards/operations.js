import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
    position: 'right-bottom',
  });

axios.defaults.baseURL = 'https://task-pro-backend.onrender.com';

export const needHelp = createAsyncThunk(
    'help',
    async (user, thunkAPI) => {
        // const state = thunkAPI.getState();
        // const persistedToken = state.auth.token;
        // if (persistedToken === null) {
        //     return thunkAPI.rejectWithValue('Unable to fetch user');
        //   }
      try {
        const response = await axios.post('/api/help/email', {replyEmail: user.email, comment: user.text});
        Notiflix.Notify.success('Your Email Send, we will contact you!');
        return response.data;
      } catch (e) {
        Notiflix.Notify.failure('Something going wrong!');
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );