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
