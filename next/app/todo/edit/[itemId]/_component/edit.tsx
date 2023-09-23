'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { updateItem } from './action';

type Props = {
  itemId: string;
  title: string;
  description: string;
};

export const EditToDoItem = ({ itemId, title, description }: Props) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      itemId,
      title,
      description,
    },
  });

  const onSubmit = async (data: FormData) => {
    await updateItem(data);
    router.push('/todo');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>編集</div>
      <div>
        <label>タイトル</label>
        <input type='text' {...register('title')} />
      </div>
      <div>
        <label>概要</label>
        <input type='text' {...register('description')} />
      </div>
      <button type='submit'>保存</button>
    </form>
  );
};

type FormData = {
  itemId: string;
  title: string;
  description: string;
};
