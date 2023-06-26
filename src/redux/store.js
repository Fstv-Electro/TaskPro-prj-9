import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './dashboards/slice';
import authSlice from './auth/slice';

export const store = configureStore({
  reducer: { 
    auth: authSlice,
    task: taskReducer
 },
});
