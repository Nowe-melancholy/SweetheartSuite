'use client';

import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Gender } from '../../../const/Gender';
import { registerUser } from './_component/action';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { signIn } from 'next-auth/react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

export default function Register() {
  const searchParams = useSearchParams();
  const mailAddress = searchParams.get('mailAddress');
  if (!mailAddress) throw new Error('mailAddress is not found');

  const form = useForm<FormData>({
    defaultValues: {
      mailAddress,
    },
  });

  const onSubmit = async (data: FormData) => {
    await registerUser(data);
    await signIn('google', {
      callbackUrl: '/todo',
    });
  };

  return (
    <div className='flex justify-center'>
      <Card className='w-96'>
        <CardTitle className='m-3'>新規登録</CardTitle>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='mailAddress'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex flex-col m-2'>
                      <FormLabel htmlFor='email'>メールアドレス</FormLabel>
                      <FormControl>
                        <Input {...field} disabled />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex flex-col m-2'>
                      <label htmlFor='name'>名前</label>
                      <Input {...field} />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='gender'
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className='w-[180px]  m-2'>
                        <SelectValue placeholder='性別' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='1'>男性</SelectItem>
                        <SelectItem value='2'>女性</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <Button className='m-2' type='submit'>
                登録
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

type FormData = {
  mailAddress: string;
  name: string;
  gender: Gender;
};
