import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid as id } from 'nanoid';
import { ITaskList } from '../../interfaces/data.interfaces.ts';

interface TaskListState {
  tasks: ITaskList[];
  filterValue: string;
}

const initialState: TaskListState = {
  tasks: [],
  filterValue: '',
};

export const taskListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    addTask(state, action: PayloadAction<string>) {
      const isEmptyField = action.payload.trim() === '';
      if (isEmptyField) return;

      const newTask: ITaskList = {
        id: id(),
        title: action.payload,
        isCompleted: false,
      };
      state.tasks.unshift(newTask);
    },
    setFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload;
    },
  },
});

export default taskListSlice.reducer;
