'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className='flex justify-center'>
      <Card className='w-96 h-96 flex items-center justify-center'>
        <Button onClick={() => signIn('google')}>
          Googleアカウントでログイン
        </Button>
      </Card>
    </div>
  );
}
