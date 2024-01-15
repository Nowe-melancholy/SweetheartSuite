'use server';

import { Jender } from './../../../../const/Jender';
import { createChannel, createClient } from 'nice-grpc';
import { UserDefinition } from '../../../../types/pkg/User/presenter/user';
import { BACKEND_END_POINT } from '../../../const/const';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function registerUser(user: {
  mailAddress: string;
  name: string;
  jender: Jender;
}) {
  const client = createClient(UserDefinition, createChannel(BACKEND_END_POINT));
  let auth: string | undefined;

  await client.addUser(user, {
    onHeader: (header) => (auth = header.get('Authorization')),
  });

  cookies().set('Authorization', auth ?? '', {
    secure: true,
  });

  revalidatePath('/');
}
