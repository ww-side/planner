import { FC } from 'react';
import Draggable from 'react-draggable';
import { boardSlice } from '../../../store/reducers/boardSlice.ts';
import { RootState } from '../../../store/store.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';

const Card: FC = () => {
  const cards = useAppSelector((state: RootState) => state.board.cards);
  const { deleteCard, setCards } = boardSlice.actions;
  const dispatch = useAppDispatch();

  const updatePosition = (data: { x: number; y: number }, id: string): void => {
    dispatch(
      setCards(
        cards.map(item =>
          item.id === id
            ? { ...item, defaultPosition: { x: data.x, y: data.y } }
            : item
        )
      )
    );
  };

  return (
    <>
      {cards.map(item => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPosition}
            onStop={(_, data) => {
              updatePosition(data, item.id);
            }}
            bounds="parent"
          >
            <div
              className="absolute cursor-move w-[215px]
                text-black p-4 rounded-md shadow-md"
              style={{ backgroundColor: item.color }}
            >
              {`${item.item}`}
              <button
                className="absolute text-black font-bold py-1 px-2 rounded right-1 top-1"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation',
                }}
                onClick={() => dispatch(deleteCard(item.id))}
                onTouchStart={() => dispatch(deleteCard(item.id))}
              >
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </>
  );
};

export default Card;
