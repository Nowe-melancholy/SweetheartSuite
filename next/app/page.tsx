import { createUserClient } from '@/lib/client';
import { NoCouple } from './_component/NoCouple';

export default async function Home() {
  const client = createUserClient();
  const couple = await client.getCouple({});

  if (!couple.coupleId) return <NoCouple />;

  return (
    <>
      <h1>SweetHeartSuite</h1>
    </>
  );
}
