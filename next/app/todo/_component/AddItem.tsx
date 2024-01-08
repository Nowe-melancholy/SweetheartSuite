'use client';

import { useForm } from 'react-hook-form';
import { addToDoItem } from './action';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AddItem = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await addToDoItem(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex mt-2'}>
        <Input
          className='mr-2'
          {...register('title')}
          placeholder='やりたいこと'
        />
        <Button>作成</Button>
      </div>
    </form>
  );
};

type FormData = {
  title: string;
};
