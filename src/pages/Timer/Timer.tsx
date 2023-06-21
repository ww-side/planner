import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { timerSlice } from '../../store/reducers/timerSlice.ts';
import Clock from '../../components/Timer/Clock/Clock.tsx';
import TimerForm from '../../components/Timer/TimerForm/TimerForm.tsx';
import TimerButton from '../../components/Timer/TimerButton/TimerButton.tsx';

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
        <TimerButton
          onClickHandler={handleStopClick}
          label={running ? 'Stop' : 'Continue'}
          color={running ? 'red' : 'green'}
        />
        <TimerButton
          onClickHandler={handleReset}
          label="Reset"
          color="yellow"
        />
      </span>
    </>
  );
};

export default Timer;
