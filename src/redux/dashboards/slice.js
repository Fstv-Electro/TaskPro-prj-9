import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchBoards,
  addBoard,
  deleteTask,
  addTask,
  fetchColumns,
  editBoard,
  deleteBoard,
  needHelp,
  backgroundUrl,
  shiftTask,
  changeBackground
} from './operations';
import { statusFilters } from './constants';

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
  filteredCards: statusFilters.all,
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
    setFilterCards(state, action) {
      state.filteredCards = action.payload;
    },
    getCards(state, action) {
      action.payload.map(task => {
        return state.cards.push(task);
      });
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
    [editBoard.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [editBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const updatedBoards = state.boards.filter(
        board => String(board._id) !== String(action.payload)
      );
      state.boards = updatedBoards;
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
        board => board._id === action.payload
      );
      state.boards.splice(index, 1);
    },
    [deleteBoard.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
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
      state.cards = [];
      const data = action.payload;
      data.forEach(item => {
        state.cards.push(...item.tasks);
      });
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
    [addColumn.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [editColumn.pending](state) {
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
      const updatedLists = state.lists.filter(
        column => String(column._id) !== String(action.payload)
      );
      state.lists = updatedLists;
    },
    [deleteColumn.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
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
    [deleteTask.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const updatedCards = state.cards.filter(
        card => String(card._id) !== String(action.payload)
      );
      state.cards = updatedCards;
    },
    [deleteTask.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [shiftTask.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [shiftTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.cards.findIndex(
        card => card._id === action.payload._id
      );
      state.cards.splice(index, 1, action.payload);
    },
    [shiftTask.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [changeBackground.pending](state) {
      state.error = false;
      state.isLoading = true;
    },
    [changeBackground.rejected](state, action) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
    [changeBackground.fulfilled](state, action) {
      state.error = false;
      state.isLoading = false;
      state.boards = state.boards.map(board => {
        if (board._id === action.payload._id) {
          return {
            ...board,
            currentBg: action.payload.currentBg,
          };
        }
        return board;
      });
      state.currentBcg = action.payload.currentBg;
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { changeBg, changeCurrentBoard, setFilterCards, getCards } =
  taskSlice.actions;
