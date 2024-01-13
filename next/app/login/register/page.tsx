import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getServerSession } from 'next-auth';

export default async function Register() {
  const data = await getServerSession();
  if (!data?.user?.email) throw new Error('email is not found');

  return (
    <div className='flex justify-center'>
      <Card className='w-96'>
        <CardTitle className='m-3'>新規登録</CardTitle>

        <CardContent>
          <form>
            <div className='flex flex-col'>
              <label htmlFor='email'>メールアドレス</label>
              <Input defaultValue={data.user.email} disabled />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='name'>名前</label>
              <Input />
            </div>

            <Button type='submit'>登録</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
