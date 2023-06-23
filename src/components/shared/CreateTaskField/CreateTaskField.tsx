import React, { FC, useState } from 'react';
import { taskListSlice } from '../../../store/reducers/taskListSlice.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { BsPlusCircleFill } from 'react-icons/bs';
import IconBtn from '../../commonComponents/IconBtn/IconBtn.tsx';

const CreateTaskField: FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = taskListSlice.actions;
  const dispatch = useAppDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  const handleButton = () => {
    dispatch(addTask(title));
    setTitle('');
  };

  const addIcon = (
    <span className="hover:opacity-50 transition duration-200">
      <BsPlusCircleFill size={30} />
    </span>
  );

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-6/12 max-sm:w-9/12">
      <input
        className="bg-transparent w-11/12 border-none outline-none"
        placeholder="Add a task"
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={e => handleKeyDown(e)}
      />
      <IconBtn icon={addIcon} onClick={handleButton} />
    </div>
  );
};

export default CreateTaskField;
