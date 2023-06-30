import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { AddCurrentBoard } from './slice';

Notiflix.Notify.init({
  position: 'right-bottom',
});

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

axios.defaults.baseURL = 'https://task-pro-backend.onrender.com';

export const backgroundUrl = createAsyncThunk(
  'backgrounds',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/backgrounds');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const needHelp = createAsyncThunk('help', async (user, thunkAPI) => {
  // const state = thunkAPI.getState();
  // const persistedToken = state.auth.token;
  // if (persistedToken === null) {
  //     return thunkAPI.rejectWithValue('Unable to fetch user');
  //   }
  try {
    const response = await axios.post('/api/help/email', {
      replyEmail: user.email,
      comment: user.text,
    });
    Notiflix.Notify.success('Your Email Send, we will contact you!');
    return response.data;
  } catch (e) {
    Notiflix.Notify.failure('Something going wrong!');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ parentBoard, title }, thunkAPI) => {
    try {
      const response = await axios.post('/api/columns', { parentBoard, title });
      Notiflix.Notify.success('Column created!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async ({ id, title }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/columns/${id}`, { title });
      Notiflix.Notify.success('Column renamed!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/columns/${id}`);
      Notiflix.Notify.success('Column deleted successfully!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/tasks/${id}`);
      Notiflix.Notify.success('Task deleted successfully!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const AddCrntBoard = board => {
  const dispatch = useDispatch();
  try {
    dispatch(AddCurrentBoard(board));
  } catch {
    return Notiflix.failure('Something get wrong');
  }
};
