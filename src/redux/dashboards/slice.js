import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  boards: [],
  lists: [],
  cards: [],
  currentBcg: null,
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => builder,
});

export const taskReducer = taskSlice.reducer;
