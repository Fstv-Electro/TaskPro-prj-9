import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

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

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ parentColumn, title }, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', { parentColumn, title });
      Notiflix.Notify.success('Task added!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async ({ title, currentBg, icon }, thunkAPI) => {
    try {
      const response = await axios.post('/api/boards', {
        title,
        currentBg,
        icon,
      });
      Notiflix.Notify.success('Boards created!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ parentColumn, title }, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', { parentColumn, title });
      Notiflix.Notify.success('Task corrected!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
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

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async ({ title, currentBg, icon, id }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/boards/${id}`, {
        title,
        currentBg,
        icon,
      });
      Notiflix.Notify.success('Board edit!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/boards/${id}`);
      Notiflix.Notify.success('Board deleted successfully!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const shiftCard = createAsyncThunk(
  'tasks/shiftTask',
  async (prevCardId, card, newColumnId, thunkAPI) => {
    try {
      await axios.delete(`/api/tasks/${prevCardId}`);

      const { title, description, priority, deadline } = card;
      const resPost = await axios.post(`/api/tasks`, {
        title,
        parentColumn: newColumnId,
        description,
        priority,
        deadline,
      });

      Notiflix.Notify.success('Task shifted successfully!');
      return resPost.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
