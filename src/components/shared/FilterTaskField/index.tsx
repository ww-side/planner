import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { taskListSlice } from '../../../store/reducers/taskListSlice.ts';

const FilterTaskField = () => {
  const { setFilterValue } = taskListSlice.actions;
  const { filterValue } = useAppSelector(state => state.tasks);
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <>
      <input
        className="mb-4 bg-transparent w-11/12 outline-none rounded-2xl border-zinc-800 border-2 px-5 py-3 w-6/12 max-sm:w-9/12"
        type="text"
        placeholder="Find a task"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default FilterTaskField;
