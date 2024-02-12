import { Metadata } from 'nice-grpc';
import { cookies } from 'next/headers';
import { createUserClient } from '@/lib/client';

export default async function Home() {
  const client = createUserClient();
  const couple = await client.getCouple(
    {},
    {
      metadata: Metadata({
        Authorization: cookies().get('Authorization')?.value ?? '',
      }),
    }
  );

  if (!couple.coupleId) return <>No Couple</>;

  return (
    <>
      <h1>SweetHeartSuite</h1>
    </>
  );
}
