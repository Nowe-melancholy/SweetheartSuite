'use client';

import { css } from '../../../styled-system/css';
import { deleteItem } from './action';

type Props = {
  id: string;
  isDone: boolean;
  title: string;
  description: string;
};

export const ItemComponent = ({ id, isDone, title, description }: Props) => (
  <>
    <div className={itemStyle}>{isDone}</div>
    <div className={itemStyle}>{title}</div>
    <div className={itemStyle}>{description}</div>
    <div className={itemStyle}>
      <button>編集</button>
    </div>
    <div className={itemStyle}>
      <button onClick={() => deleteItem(id)}>削除</button>
    </div>
  </>
);

const itemStyle = css({
  border: '1px solid #e0d0de',
  borderRadius: '10px',
  padding: '0.8rem',
  margin: '0.5em 0',
  justifyContent: 'space-between',
  alignItems: 'center',
});
