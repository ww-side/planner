import { ChangeEvent, FC, KeyboardEvent } from 'react';
import Chance from 'chance';
import { nanoid } from 'nanoid';
import randomColor from 'randomcolor';
import { boardSlice } from '../../../../store/reducers/boardSlice.ts';
import { RootState } from '../../../../store/store.ts';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';
import { ICard } from '../../../../types/data.types.ts';

const AddForm: FC = () => {
  const card = useAppSelector((state: RootState) => state.board.card);
  const { addCard, setCard } = boardSlice.actions;
  const dispatch = useAppDispatch();

  const randomPosition = (min: number, max: number): number => {
    return new Chance().integer({ min: min, max: max });
  };

  const handleAddCard = (): void => {
    if (card.trim() === '') {
      return;
    }

    const newItem: ICard = {
      id: nanoid(),
      item: card,
      color: randomColor({
        luminosity: 'light',
      }),
      defaultPosition: {
        x: randomPosition(0, 180),
        y: randomPosition(-500, -100),
      },
    };

    dispatch(addCard(newItem));
    dispatch(setCard(''));
  };

  const keyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') handleAddCard();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCard(e.target.value));
  };

  return (
    <div className={`flex flex-end justify-center gap-4 pt-5`}>
      <input
        value={card}
        type="text"
        className={`border-b bg-transparent outline-none text-white`}
        placeholder="Enter your task..."
        onChange={handleChange}
        onKeyDown={keyPress}
      />
      <button
        className={`bg-white text-black font-bold py-2 px-4 rounded 
          transition-all duration-300 ease-in-out shadow-md hover:bg-gray-300`}
        onClick={handleAddCard}
      >
        Enter
      </button>
    </div>
  );
};

export default AddForm;
