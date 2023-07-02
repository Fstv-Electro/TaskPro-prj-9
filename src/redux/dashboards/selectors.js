import { createSelector } from '@reduxjs/toolkit';

// task
export const selectBoard = state => state.task.boards;

export const selectList = state => state.task.lists;

export const selectCard = state => state.task.cards;

export const selectBackground = state => state.task.currentBcg;

export const selectIsLoading = state => state.task.isLoading;

export const selectError = state => state.task.error;

export const selectBackgroundUrl = state => state.task.bgUrl;

export const selectCurrentBoard = state => state.task.currentBoard;
// task

export const selectUserLists = createSelector([selectList], lists => lists);
