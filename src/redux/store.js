import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './dashboards/slice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
