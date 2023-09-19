'use client';

import { Item } from '../../../types/pkg/ToDo/presenter/todo_pb';
import { deleteItem } from './action';

type Props = {
  id: string;
  isDone: boolean;
  title: string;
  description: string;
};

export const ItemComponent = ({ id, isDone, title, description }: Props) => (
  <>
    <div>{isDone}</div>
    <div>{title}</div>
    <div>{description}</div>
    <div>
      <button>編集</button>
    </div>
    <div>
      <button onClick={() => deleteItem(id)}>削除</button>
    </div>
  </>
);
