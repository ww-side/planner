import { FC } from 'react';
import { BsCheck } from 'react-icons/bs';

interface CheckType {
  isCompleted: boolean;
}

const Check: FC<CheckType> = ({ isCompleted }) => {
  return (
    <div
      className={`border rounded-lg border-white-300 w-6 h-6 ${
        isCompleted ? 'bg-green-700' : ''
      } flex items-center justify-center`}
    >
      {isCompleted && <BsCheck size={24} />}
    </div>
  );
};

export default Check;
