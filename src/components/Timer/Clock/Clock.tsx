import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux.ts';

const Clock: FC = () => {
  const time = useAppSelector(state => state.timer.time);

  const format = (time: number) => {
    let seconds: string | number = time % 60;
    let minutes: string | number = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

  return <h1 className="text-center text-4xl mt-2">{format(time)}</h1>;
};

export default Clock;
