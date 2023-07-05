import { ChangeEvent, FC, KeyboardEvent } from 'react';
import Chance from 'chance';
import { nanoid } from 'nanoid';
import randomColor from 'randomcolor';
import Button from '../../common/Button/index.tsx';
import { boardSlice } from '../../../store/reducers/boardSlice.ts';
import { RootState } from '../../../store/store.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { Card } from '../../../interfaces/card.ts';

const AddCardForm: FC = () => {
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

    const newItem: Card = {
      id: nanoid(),
      item: card,
      color: randomColor({
        luminosity: 'light',
      }),
      defaultPosition: {
        x: randomPosition(0, 180),
        y: randomPosition(-500, -120),
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
      <Button color="basic" onClickHandler={handleAddCard}>
        Enter
      </Button>
    </div>
  );
};

export default AddCardForm;
