import { FC, MutableRefObject } from 'react';

interface ITimerInputProps {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  placeholder: string;
}

const TimerInput: FC<ITimerInputProps> = ({ inputRef, placeholder }) => {
  return (
    <input
      className="text-black w-3/12 max-lg:w-6/12 max-md:w-9/12 my-3 bg-transparent border
        border-gray-300 text-white placeholder-white::placeholder
        rounded-md px-4 py-2 focus:outline-none focus:ring-1
        focus:ring-white focus:border-white"
      type="text"
      ref={inputRef}
      placeholder={placeholder}
    />
  );
};

export default TimerInput;
