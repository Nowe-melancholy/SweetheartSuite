'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { updateItem } from './action';
import { stack } from '../../../../../styled-system/patterns';
import { InputText } from '../../../../_components/InputText';
import { css } from '../../../../../styled-system/css';
import { Textarea } from '../../../../_components/Textarea';
import { BUtton } from '../../../../_components/Button';

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
      <div className={stack()}>
        <label>タイトル</label>
        <InputText {...register('title')} />
        <label>概要</label>
        <div className={css({ height: '150px' })}>
          <Textarea {...register('description')} />
        </div>
        <div
          className={css({
            height: '30px',
            width: '50px',
          })}
        >
          <BUtton value='保存' />
        </div>
      </div>
    </form>
  );
};

type FormData = {
  itemId: string;
  title: string;
  description: string;
};
