import { statusFilters } from './constants';

// task
export const selectBoard = state => state.task.boards;

export const selectList = state => state.task.lists;

export const selectCard = state => state.task.cards;

export const selectBackground = state => state.task.currentBcg;

export const selectIsLoading = state => state.task.isLoading;

export const selectError = state => state.task.error;

export const selectBackgroundUrl = state => state.task.bgUrl;

export const selectCurrentBoard = state => state.task.currentBoard;

export const selectFilteredCards = state => state.task.filteredCards;

export const selectCurrentBoardData = state =>
  state.task.boards.find(board => board._id === state.task.currentBoard);

// export const selectFilter = state => state.task.filter;
// task

export const selectVisibleCards = state => {
  const tasks = selectCard(state);
  const statusFilter = selectFilteredCards(state);

  //   console.log(tasks);

  switch (statusFilter) {
    case statusFilters.low:
      return tasks.filter(task => task.priority === 'low');
    case statusFilters.medium:
      return tasks.filter(task => task.priority === 'medium');
    case statusFilters.high:
      return tasks.filter(task => task.priority === 'high');
    case statusFilters.without:
      return tasks.filter(task => task.priority === 'without');
    default:
      return tasks;
  }
};
