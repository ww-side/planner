import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { timerSlice } from '../../store/reducers/timerSlice.ts';
import Clock from '../../components/shared/Clock/Clock.tsx';
import TimerForm from '../../components/shared/TimerForm/TimerForm.tsx';
import Button from '../../components/common/Button/Button.tsx';

const Timer = () => {
  const time = useAppSelector(state => state.timer.time);
  const running = useAppSelector(state => state.timer.running);
  const intervalActive = useAppSelector(state => state.timer.intervalActive);
  const { setCount, setRunning, setIntervalActive } = timerSlice.actions;
  const dispatch = useAppDispatch();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalActive) {
      handleStart();
    }

    return () => {
      handleStop();
    };
  });

  const handleStart = () => {
    timerRef.current = window.setInterval(() => {
      if (time > 0) {
        const newCount = time - 1;
        dispatch(setCount(newCount));
      } else {
        handleStop();
        window.alert('Time over');
      }
    }, 1000);
  };

  const handleStop = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
  };

  const handleReset = () => {
    dispatch(setCount(0));
  };

  const handleStopClick = () => {
    dispatch(setIntervalActive(!intervalActive));
    dispatch(setRunning(!running));
  };

  return (
    <>
      <Clock />
      <TimerForm />
      <span className="flex gap-3 justify-center mt-2">
        <Button
          onClickHandler={handleStopClick}
          color={running ? 'red' : 'green'}
        >
          {running ? 'Stop' : 'Continue'}
        </Button>
        <Button onClickHandler={handleReset} color="yellow">
          Reset
        </Button>
      </span>
    </>
  );
};

export default Timer;
