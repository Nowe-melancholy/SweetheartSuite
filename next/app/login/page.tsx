'use client';

import { signIn, signOut } from 'next-auth/react';

export default function Login() {
  return (
    <>
      <button onClick={() => signIn('google')}>
        Googleアカウントでログイン
      </button>
      <button onClick={() => signOut()}>ログアウト</button>
    </>
  );
}
