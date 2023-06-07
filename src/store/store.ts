import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/taskListSlice.ts';
import boardReducer from './reducers/boardSlice.ts';
import headerReducer from './reducers/headerSlice.ts';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  board: boardReducer,
  header: headerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
