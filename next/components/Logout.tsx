'use client';

import { signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';

export const Logout = () => {
  const { data: session } = useSession();
  return (
    session && (
      <Button className='ml-auto' onClick={() => signOut()}>
        ログアウト
      </Button>
    )
  );
};
