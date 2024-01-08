'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { deleteItem, updateItem } from './action';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  itemId: string;
  title: string;
  description: string;
};

export const EditItem = ({ itemId, title, description }: Props) => {
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

  const onClick = async () => {
    await deleteItem(itemId);
    router.push('/todo');
  };

  return (
    <Card className='w-96'>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col'}>
            <label className='mt-2'>タイトル</label>
            <Input className='mt-2 mb-4' {...register('title')} />
            <label>概要</label>
            <Textarea className='mt-2 mb-4 h-36' {...register('description')} />
            <Button className='mt-2'>保存</Button>
          </div>
        </form>
        <Button className='mt-2 w-full' onClick={onClick}>
          削除
        </Button>
      </CardContent>
    </Card>
  );
};

type FormData = {
  itemId: string;
  title: string;
  description: string;
};
