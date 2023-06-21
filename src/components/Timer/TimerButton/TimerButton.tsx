import { FC } from 'react';
import { ITimerButtonProps } from '../../../interfaces/data.interfaces.ts';

enum Colors {
  basic = 'bg-zinc-100 hover:bg-zinc-200',
  yellow = 'bg-yellow-400 hover:bg-yellow-500',
  green = 'bg-green-500 hover:bg-green-600',
  greenDisabled = Colors.green +
    'pointer-events-none cursor-not-allowed opacity-50',
  red = 'bg-red-600 hover:bg-red-700',
}

const YELLOW_COLOR = 'yellow';
const GREEN_COLOR = 'green';
const RED_COLOR = 'red';
const GREEN_DISABLED = 'greenDisabled';

const TimerButton: FC<ITimerButtonProps> = ({
  onClickHandler,
  label,
  color,
}) => {
  const getColor = (color: string) => {
    switch (color) {
      case YELLOW_COLOR:
        return Colors.yellow;
      case GREEN_COLOR:
        return Colors.green;
      case RED_COLOR:
        return Colors.red;
      case GREEN_DISABLED:
        return Colors.greenDisabled;
      default:
        return Colors.basic;
    }
  };

  return (
    <button
      className={`w-1/12 max-lg:w-2/12 max-md:w-3/12 font-bold py-2 px-4 rounded ${getColor(
        color
      )}`}
      onClick={onClickHandler}
    >
      <span className="text-black">{label}</span>
    </button>
  );
};

export default TimerButton;
