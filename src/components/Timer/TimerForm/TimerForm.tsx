const TimeInput = ({ onSet }) => {
  const secondsRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    const strSeconds = secondsRef.current.value;
    if (strSeconds.match(/[0-9]/)) {
      secondsRef.current.value = '';
      onSetCountdown(parseInt(strSeconds, 10));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={secondsRef} placeholder="enter time in seconds" />
      <input type="submit" value="Start" />
    </form>
  );
};

export default TimeInput;
