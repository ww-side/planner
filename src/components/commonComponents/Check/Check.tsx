import { FC } from 'react';
import { BsCheck } from 'react-icons/bs';

interface CheckType {
  isCompleted: boolean;
  onClick: () => void;
}

const Check: FC<CheckType> = ({ isCompleted, onClick }) => {
  return (
    <div
      className={`border rounded-lg border-white-300 w-6 h-6 cursor-pointer ${
        isCompleted ? 'bg-green-700' : ''
      } flex items-center justify-center`}
      onClick={onClick}
    >
      {isCompleted && <BsCheck size={24} />}
    </div>
  );
};

export default Check;
