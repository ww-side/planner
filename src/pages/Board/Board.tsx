import { FC } from 'react';
import Card from '../../components/shared/Card/Card.tsx';
import AddCardForm from '../../components/shared/AddCardForm/AddCardForm.tsx';

const Board: FC = () => {
  return (
    <div className="relative h-[91vh] overflow-hidden">
      <AddCardForm />
      <div className="flex flex-grow items-center h-full justify-center">
        <p className="text-center opacity-30 select-none">BOARD</p>
      </div>
      <Card />
    </div>
  );
};

export default Board;
