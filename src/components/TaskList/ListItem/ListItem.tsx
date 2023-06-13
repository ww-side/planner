import { FC } from 'react';
import Check from '../../commonComponents/Check/Check.tsx';
import { TaskListProps } from '../../../interfaces/data.interfaces.ts';
import { taskListSlice } from '../../../store/reducers/taskListSlice.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { BsTrash } from 'react-icons/bs';

const ListItem: FC<TaskListProps> = ({ task }) => {
  const { changeTask, removeTask } = taskListSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div
      className={`flex items-center justify-between shadow-md mb-3 rounded-2xl p-5 w-6/12 max-sm:w-9/12 ${
        task.isCompleted ? 'opacity-70' : 'bg-zinc-800'
      }`}
    >
      <div className="flex items-center">
        <span
          className="cursor-pointer"
          onClick={() => dispatch(changeTask(task.id))}
        >
          <Check isCompleted={task.isCompleted} />
        </span>
        <span className="ml-3">{task.title}</span>
      </div>
      <button onClick={() => dispatch(removeTask(task.id))}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default ListItem;
