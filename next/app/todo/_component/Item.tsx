'use client';

import Link from 'next/link';
import { css } from '../../../styled-system/css';

type Props = {
  id: string;
  isDone: boolean;
  title: string;
};

export const ItemComponent = ({ id, isDone, title }: Props) => (
  <div
    className={css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '10px',
    })}
  >
    <input type='checkbox' checked={isDone} />
    <label className={css({ padding: '10px', fontSize: '20px' })}>
      <Link href={`/todo/edit/${id}`}>{title}</Link>
    </label>
  </div>
);
