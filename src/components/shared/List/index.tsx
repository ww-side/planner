import { FC } from 'react';
import ListItem from '../ListItem/index.tsx';
import { useAppSelector } from '../../../hooks/redux.ts';

const List: FC = () => {
  const { tasks } = useAppSelector(state => state.tasks);
  const { filterValue } = useAppSelector(state => state.tasks);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => <ListItem key={task.id} task={task} />)
      ) : (
        <p className="text-xl">No tasks found</p>
      )}
    </>
  );
};

export default List;
