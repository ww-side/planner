import { MouseEventHandler, ReactNode } from 'react';

export interface ITaskList {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ICard {
  id: string;
  item: string;
  color: string;
  defaultPosition: {
    x: number;
    y: number;
  };
}

export interface TaskListProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
}

export interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export interface ITimerButtonProps {
  onClickHandler?: () => void;
  children: ReactNode;
  color: string;
}

export interface IBoardState {
  card: string;
  cards: ICard[];
}

export interface ITimerState {
  time: number;
  running: boolean;
  intervalActive: boolean;
}
