import { FC } from 'react';
import CreateTaskField from '../../components/TaskList/CreateTaskField/CreateTaskField.tsx';
import List from '../../components/TaskList/List/List.tsx';
import FilterTaskField from '../../components/TaskList/FilterTaskField/FilterTaskField.tsx';

const TaskList: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Task List</h1>
      <CreateTaskField />
      <FilterTaskField />
      <List />
    </div>
  );
};

export default TaskList;