'use client';

import Link from 'next/link';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  id: string;
  isDone: boolean;
  title: string;
};

export const Item = ({ id, isDone, title }: Props) => (
  <div className={'flex items-center'}>
    <Checkbox className='m-2' checked={isDone} onChange={() => {}} />
    <label className={css({ padding: '10px', fontSize: '20px' })}>
      <Link href={`/todo/edit/${id}`}>{title}</Link>
    </label>
  </div>
);
