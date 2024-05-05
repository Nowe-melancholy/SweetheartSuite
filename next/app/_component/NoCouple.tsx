import { createUserClient } from '@/lib/client';

export const NoCouple = async () => {
  const client = createUserClient();
  const recievedRequest = await client.getRequestByToUserId({});
  if (recievedRequest.id)
    return <>{recievedRequest.fromUserId}からリクエストを受け取っています</>;

  return <>カップルが作成されていません</>;
};
