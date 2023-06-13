import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux.ts';
import TaskListItem from './TaskListItem/TaskListItem.tsx';
import CreateTodoField from './CreateTodoField/CreateTodoField.tsx';

const TaskList: FC = () => {
  const { tasks } = useAppSelector(state => state.tasks);

  return (
    <div className="flex flex-col items-center justify-center text-white w-full mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Task List</h1>
      <CreateTodoField />
      {tasks.map(task => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
