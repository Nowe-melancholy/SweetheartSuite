'use client';

import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Jender } from '../../../../const/Jender';
import { registerUser } from './action';
import { useRouter, useSearchParams } from 'next/navigation';

export const RegisterUser = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const mailAddress = searchParams.get('mailAddress');
  if (!mailAddress) throw new Error('mailAddress is not found');

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      mailAddress,
    },
  });

  const onSubmit = async (data: FormData) => {
    await registerUser(data);
    router.push('/todo');
  };

  return (
    <Card className='w-96'>
      <CardTitle className='m-3'>新規登録</CardTitle>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col m-2'>
            <label htmlFor='email'>メールアドレス</label>
            <Input {...register('mailAddress')} disabled />
          </div>

          <div className='flex flex-col m-2'>
            <label htmlFor='name'>名前</label>
            <Input {...register('name')} />
          </div>

          <Select>
            <SelectTrigger className='w-[180px]  m-2'>
              <SelectValue placeholder='性別' />
            </SelectTrigger>
            <SelectContent {...register('jender')}>
              <SelectItem value='1'>男性</SelectItem>
              <SelectItem value='2'>女性</SelectItem>
            </SelectContent>
          </Select>

          <Button className='m-2' type='submit'>
            登録
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

type FormData = {
  mailAddress: string;
  name: string;
  jender: Jender;
};
