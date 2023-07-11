import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchBoards,
  addBoard,
  deleteTask,
  addTask,
  editTask,
  fetchColumns,
  editBoard,
  deleteBoard,
  needHelp,
  backgroundUrl,
  shiftTask,
  changeBackground,
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
    updateColumnOrderState(state, action) {
      const { boardId, newColumnOrder } = action.payload;
      const updatedBoard = state.boards.find(board => board._id === boardId);
      updatedBoard.columnOrder = newColumnOrder;
      const newBoards = state.boards.map(board =>
        board._id === boardId ? updatedBoard : board
      );
      state.boards = newBoards;
    },
    updateTaskOrderState(state, action) {
      const { columnId, newTaskOrder } = action.payload;
      const updatedLists = state.lists.find(list => list._id === columnId);
      updatedLists.taskOrder = newTaskOrder;
      const newLists = state.lists.map(list =>
        list._id === columnId ? updatedLists : list
      );
      state.lists = newLists;
    },
    moveTaskToColumnState(state, action) {
      const {
        movedTask,
        startTaskOrder,
        finishTaskOrder,
        columnSource,
        columnDestination,
      } = action.payload;

      const destinitionColumn = state.lists.find(
        column => column._id === columnDestination
      );
      const finishTasks = [...destinitionColumn.tasks, movedTask];
      const finishColumn = {
        ...destinitionColumn,
        taskOrder: finishTaskOrder,
        tasks: finishTasks,
      };

      const sourceColumn = state.lists.find(
        column => column._id === columnSource
      );
      const startTasks = sourceColumn.tasks.filter(
        task => task._id !== movedTask._id
      );
      const startColumn = {
        ...sourceColumn,
        taskOrder: startTaskOrder,
        tasks: startTasks,
      };

      const newLists = state.lists.map(list => {
        if (list._id === columnDestination) return finishColumn;
        if (list._id === columnSource) return startColumn;
        return list;
      });

      state.lists = newLists;

      const newCards = state.cards.map(card =>
        card._id === movedTask._id ? movedTask : card
      );

      state.cards = newCards;
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
        board => board._id === action.payload
      );
      state.boards.splice(index, 1);
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
      const boardId = action.payload.parentBoard;
      const updatedBoard = state.boards.find(board => board._id === boardId);
      updatedBoard.columnOrder.push(action.payload._id);
      const newBoards = state.boards.map(board =>
        board._id === updatedBoard._id ? updatedBoard : board
      );
      state.boards = newBoards;
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
      const updatedBoard = state.boards.find(board =>
        board.columnOrder.find(order => order === action.payload)
      );
      const newColumnOrder = updatedBoard.columnOrder.filter(
        order => order !== action.payload
      );
      updatedBoard.columnOrder = newColumnOrder;
      const newBoards = state.boards.map(board =>
        board._id === updatedBoard._id ? updatedBoard : board
      );
      state.boards = newBoards;
      const updatedLists = state.lists.filter(
        column => String(column._id) !== String(action.payload)
      );
      state.lists = updatedLists;
    },
    [deleteColumn.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [addTask.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [addTask.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const { parentColumn, _id } = action.payload;
      const updatedColumn = state.lists.filter(
        column => column._id === parentColumn
      )[0];
      updatedColumn.taskOrder.push(_id);
      updatedColumn.tasks.push(action.payload);
      const newLists = state.lists.map(list =>
        list._id === parentColumn ? updatedColumn : list
      );
      state.lists = newLists;
      state.cards.push(action.payload);
    },
    [editTask.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [editTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.cards.findIndex(
        card => card._id === action.payload._id
      );
      state.cards[index] = action.payload;
    },
    [editTask.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const updatedColumn = state.lists.find(column =>
        column.taskOrder.includes(action.payload)
      );
      updatedColumn.taskOrder.filter(order => order !== action.payload);
      const newLists = state.lists.map(column =>
        column._id === updatedColumn._id ? updatedColumn : column
      );
      state.lists = newLists;

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
export const {
  changeBg,
  changeCurrentBoard,
  setFilterCards,
  getCards,
  updateColumnOrderState,
  updateTaskOrderState,
  moveTaskToColumnState,
} = taskSlice.actions;
