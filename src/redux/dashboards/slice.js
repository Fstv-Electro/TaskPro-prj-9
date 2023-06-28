import { createSlice } from '@reduxjs/toolkit';
import { needHelp } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  boards: [],
  lists: [],
  cards: [],
  currentBcg: null,
  isLoading: false,
  error: null,
  replyEmail: "",
  comment: "",
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: {
    [needHelp.pending](state) {
      state.error = false;
    },
    [needHelp.fulfilled](state, action) {
      state.replyEmail = action.payload.replyEmail;
      state.comment = action.payload.comment;
    },
    [needHelp.rejected](state) {
      state.error = true;
    },
  },
});

export const taskReducer = taskSlice.reducer;
