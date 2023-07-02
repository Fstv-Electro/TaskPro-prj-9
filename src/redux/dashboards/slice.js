import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchBoards,
  setFilter,
  addBoard,
  deleteCard,
  addTask,
  fetchColumns,
  editBoard,
  deleteBoard,
  fetchTasks,
} from './operations';
import { needHelp } from './operations';
import { backgroundUrl } from './operations';
// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  boards: [],
  currentBoard: '',
  lists: [],
  cards: [],
  currentBcg: null,
  isLoading: false,
  error: null,
  replyEmail: '',
  comment: '',
  bgUrl: [],
  filter: 'Without priority',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changeBg(state, action) {
      state.currentBcg = action.payload;
    },
    changeCurrentBoard(state, action) {
      state.currentBoard = action.payload;
    },
  },
  extraReducers: {
    [fetchBoards.pending](state) {
      state.error = false;
      state.isLoading = true;
    },
    [fetchBoards.rejected](state, action) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
    [fetchBoards.fulfilled](state, action) {
      state.error = false;
      state.isLoading = false;
      state.boards = action.payload;
    },
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
    [backgroundUrl.pending](state) {
      state.error = false;
      state.isLoading = true;
    },
    [backgroundUrl.rejected](state, action) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
    [backgroundUrl.fulfilled](state, action) {
      state.error = false;
      state.isLoading = false;
      state.bgUrl = action.payload;
    },
    [addColumn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [addColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.lists.push(action.payload);
    },
    [addColumn.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [editColumn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [editColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.lists.findIndex(
        column => column._id === action.payload._id
      );
      state.lists[index] = action.payload;
    },
    [editColumn.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [deleteColumn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [deleteColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.lists.findIndex(
        column => column._id === action.payload.id
      );
      state.lists.splice(index, 1);
    },
    [deleteColumn.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [setFilter.fulfilled](state, action) {
      state.filter = action.payload;
    },
    [addTask.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cards.push(action.payload);
    },
    [addBoard.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [addBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.boards.push(action.payload);
    },
    [addBoard.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [deleteCard.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [deleteCard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.cards.findIndex(
        card => card.id === action.payload.id
      );
      state.cards.splice(index, 1);
    },
    [deleteCard.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [fetchColumns.pending](state) {
      state.error = false;
      state.isLoading = true;
    },
    [fetchColumns.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [fetchColumns.fulfilled](state, action) {
      state.error = false;
      state.isLoading = false;
      state.lists = action.payload;
    },
    [editBoard.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [editBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.boards.findIndex(
        board => board.id === action.payload.id
      );
      state.boards[index] = action.payload;
    },
    [editBoard.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [deleteBoard.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [deleteBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.boards.findIndex(
        board => board.id === action.payload.id
      );
      state.boards.splice(index, 1);
    },
    [deleteBoard.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [fetchTasks.pending](state) {
      state.error = false;
      state.isLoading = true;
    },
    [fetchTasks.rejected](state, action) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
    [fetchTasks.fulfilled](state, action) {
      state.error = false;
      state.isLoading = false;
      state.cards = action.payload;
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { changeBg, changeCurrentBoard } = taskSlice.actions;
