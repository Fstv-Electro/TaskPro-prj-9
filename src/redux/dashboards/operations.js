import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'right-bottom',
});

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
    try {
      const response = await axios.delete(`/api/boards/${id}`);

      if (response.status === 204) {
        Notiflix.Notify.success('Board deleted successfully!');
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const fetchColumns = createAsyncThunk(
  'tasks/fetchColumns',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/columns/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ parentBoard, title }, thunkAPI) => {
    try {
      const response = await axios.post('/api/columns', { parentBoard, title });
      Notiflix.Notify.success('Column created!');
      console.log(response.data);
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
    try {
      const response = await axios.delete(`/api/columns/${id}`);
      if (response.status === 204) {
        Notiflix.Notify.success(`Column deleted successfully!`);
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(`/api/tasks`, values);
      Notiflix.Notify.success('Task added!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/tasks/${id}`, values);
      Notiflix.Notify.success('Task corrected!');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Something going wrong!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${id}`);
      if (response.status === 204) {
        Notiflix.Notify.success('Task deleted successfully!');
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const shiftTask = createAsyncThunk(
  'tasks/shiftTask',
  async (values, thunkAPI) => {
    const { prevCardId, card, newColumnId } = values;
    try {
      const { title, description, priority, deadline } = card;
      const resPost = await axios.put(`/api/tasks/${prevCardId}`, {
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

export const changeBackground = createAsyncThunk(
  'boards/changeBackground',
  async ({ id, currentBg }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/boards/${id}/currentBg`, {
        currentBg,
      });
      Notiflix.Notify.success('Background edit!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumnOrder = createAsyncThunk(
  'boards/updateColumnOrder',
  async ({ boardId, newColumnOrder }, thunkAPI) => {
    try {
      await axios.patch(`/api/boards/columnorder/${boardId}`, {
        columnOrder: newColumnOrder,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskOrder = createAsyncThunk(
  'columns/updateTaskOrder',
  async ({ columnId, newTaskOrder }, thunkAPI) => {
    try {
      await axios.patch(`/api/columns/taskorder/${columnId}`, {
        taskOrder: newTaskOrder,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveTaskToColumn = createAsyncThunk(
  'tasks/moveTaskToColumn',
  async ({ taskId, columnSourceOrder, columnDestinationOrder }, thunkAPI) => {
    try {
      await axios.patch(`/api/tasks/movetask/${taskId}`, {
        columnSourceOrder,
        columnDestinationOrder,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
