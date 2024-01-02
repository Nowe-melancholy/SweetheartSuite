'use client';

import Link from 'next/link';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

type Props = {
  id: string;
  isDone: boolean;
  title: string;
};

export const ItemComponent = ({ id, isDone, title }: Props) => (
  <div
    className={flex({
      direction: 'row',
      padding: '10px',
      alignItems: 'center',
    })}
  >
    <input type='checkbox' checked={isDone} />
    <label className={css({ padding: '10px', fontSize: '20px' })}>
      <Link href={`/todo/edit/${id}`}>{title}</Link>
    </label>
  </div>
);
