import { FC, FormEvent, useRef } from 'react';
import Button from '../../commonComponents/Button/Button.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { timerSlice } from '../../../store/reducers/timerSlice.ts';
import TimerInput from '../TimerInput/TimerInput.tsx';

const TimerForm: FC = () => {
  const time = useAppSelector(state => state.timer.time);
  const { setCount, setRunning, setIntervalActive } = timerSlice.actions;
  const dispatch = useAppDispatch();
  const minutesRef = useRef<HTMLInputElement | null>(null);
  const secondsRef = useRef<HTMLInputElement | null>(null);

  const onSetCountdown = (seconds: number) => {
    dispatch(setCount(seconds));
    dispatch(setRunning(true));
    dispatch(setIntervalActive(true));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const secondsInputElement = secondsRef.current;
    const minutesInputElement = minutesRef.current;

    let countdown = 0;

    if (secondsInputElement && secondsInputElement.value.match(/[0-9]/)) {
      const seconds = parseInt(secondsInputElement.value, 10);
      countdown += seconds;
      secondsInputElement.value = '';
    }

    if (minutesInputElement && minutesInputElement.value.match(/[0-9]/)) {
      const minutes = parseInt(minutesInputElement.value, 10);
      countdown += minutes * 60;
      minutesInputElement.value = '';
    }

    if (countdown > 0 && onSetCountdown) onSetCountdown(countdown);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={onSubmit}>
      <TimerInput inputRef={minutesRef} placeholder="Enter minutes" />
      <TimerInput inputRef={secondsRef} placeholder="Enter seconds" />
      {time > 0 ? (
        <Button color="greenDisabled">Start</Button>
      ) : (
        <Button color="green">Start</Button>
      )}
    </form>
  );
};

export default TimerForm;
