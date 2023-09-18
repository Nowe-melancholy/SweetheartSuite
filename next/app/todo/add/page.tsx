'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { addToDoItem } from './action';

export default async function ToDoCreate() {
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => addToDoItem(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>新規作成</div>
      <div>
        <label>タイトル</label>
        <input type='text' {...register('title')} />
      </div>
      <div>
        <label>概要</label>
        <input type='text' {...register('description')} />
      </div>
      <button type='submit' disabled={isPending}>
        作成 {isPending && '...'}
      </button>
    </form>
  );
}

type FormData = {
  title: string;
  description: string;
};
