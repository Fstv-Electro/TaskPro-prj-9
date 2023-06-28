import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectToken } from '../auth/selectores';

axios.defaults.baseURL = 'https://task-pro-backend.onrender.com';

export const fetchBoards = createAsyncThunk(
  'user/boards',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/boards');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
