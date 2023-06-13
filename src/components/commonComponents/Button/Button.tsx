import { FC } from 'react';
import { IButtonProps } from '../../../interfaces/data.interfaces.ts';

const Button: FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="bg-white text-black font-bold py-2 px-4 rounded
          transition-all duration-300 ease-in-out shadow-md hover:bg-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
