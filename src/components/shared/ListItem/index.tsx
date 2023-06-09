import { FC } from 'react';
import Check from '../../common/Check/index.tsx';
import { taskListSlice } from '../../../store/reducers/taskListSlice.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { BsTrash } from 'react-icons/bs';
import IconBtn from '../../common/IconBtn/index.tsx';

interface TaskListProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
}

const ListItem: FC<TaskListProps> = ({ task }) => {
  const { changeTask, removeTask } = taskListSlice.actions;
  const dispatch = useAppDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  const handleChangeTask = () => {
    dispatch(changeTask(task.id));
  };

  const deleteIcon = (
    <BsTrash
      size={22}
      className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300 cursor-pointer"
    />
  );

  return (
    <div
      className={`flex items-center justify-between shadow-md mb-3 rounded-2xl p-5 w-6/12 max-sm:w-9/12 ${
        task.isCompleted ? 'opacity-70' : 'bg-zinc-800'
      }`}
    >
      <div className="flex items-center break-all">
        <span>
          <Check isCompleted={task.isCompleted} onClick={handleChangeTask} />
        </span>
        <span className="mx-3">{task.title}</span>
      </div>
      <IconBtn icon={deleteIcon} onClick={handleRemoveTask} />
    </div>
  );
};

export default ListItem;
