import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchBoards,
  addBoard,
  deleteCard,
  addTask,
  fetchColumns,
  editBoard,
  deleteBoard,
  needHelp,
  backgroundUrl,
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
      console.log(action.payload); // видалити
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
    // [deleteColumn.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   console.log('Before filter:', JSON.stringify(Array.from(state.lists)));

    //   // const index = state.lists.findIndex(
    //   //   column => column._id === action.payload._id
    //   // );
    //   // state.lists.splice(index, 1);

    //   const updatedLists = state.lists.filter(
    //     column => column._id !== action.payload._id
    //   );
    //   state.lists = updatedLists;
    //   console.log('After filter:', JSON.stringify(Array.from(state.lists)));
    // },
    [deleteColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log('action.payload._id:', action.payload);
      state.lists.forEach(column => {
        console.log('column._id:', column._id);
      });
      console.log('Before filter:', JSON.stringify(Array.from(state.lists)));

      const updatedLists = state.lists.filter(
        column => String(column._id) !== String(action.payload)
      );
      state.lists = updatedLists;

      console.log('After filter:', JSON.stringify(Array.from(state.lists)));
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
        card => card._id === action.payload._id
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
      state.cards = [];
      const data = action.payload;
      data.forEach(item => {
        state.cards.push(...item.tasks);
      });
    },
    [editBoard.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [editBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.boards.findIndex(
        board => board._id === action.payload._id
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
        board => board._id === action.payload._id
      );
      state.boards.splice(index, 1);
    },
    [deleteBoard.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    // [fetchTasks.pending](state) {
    //   state.error = false;
    //   state.isLoading = true;
    // },
    // [fetchTasks.rejected](state, action) {
    //   state.error = action.payload.error;
    //   state.isLoading = false;
    // },
    // [fetchTasks.fulfilled](state, action) {
    //   state.error = false;
    //   state.isLoading = false;
    //   state.cards = action.payload;
    // },
  },
});

export const taskReducer = taskSlice.reducer;
export const { changeBg, changeCurrentBoard, setFilterCards, getCards } =
  taskSlice.actions;
