'use client';

import { useForm } from 'react-hook-form';
import { addToDoItem } from './action';
import { InputText } from '../../../components/InputText';
import { flex } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';
import { BUtton } from '../../../components/Button';

export const AddItem = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await addToDoItem(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={flex({ alignItems: 'center' })}>
        <div className={css({ width: '300px' })}>
          <InputText {...register('title')} placeholder='やりたいこと' />
        </div>
        <div
          className={css({ height: '30px', width: '50px', marginLeft: '10px' })}
        >
          <BUtton value='作成' />
        </div>
      </div>
    </form>
  );
};

type FormData = {
  title: string;
};
