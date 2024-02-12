import { Metadata, createChannel, createClient } from 'nice-grpc';
import { BACKEND_END_POINT } from '../app/const/const';
import { UserDefinition } from '../types/pkg/User/presenter/user';
import { cookies } from 'next/headers';

export const createUserClient = () => {
  const client = createClient(UserDefinition, createChannel(BACKEND_END_POINT));

  const metadata = Metadata({
    Authorization: cookies().get('Authorization')?.value ?? '',
  });

  const funcs = Object.keys(UserDefinition.methods) as [
    keyof typeof UserDefinition.methods
  ];

  const defineFunc = <T extends keyof typeof UserDefinition.methods>(
    funcName: T
  ) => {
    const func = client[funcName];
    return (request: Parameters<typeof func>[0]) =>
      func(request as any, { metadata });
  };

  return funcs.reduce(
    (prev: typeof client, current) => ({
      ...prev,
      [current]: defineFunc(current),
    }),
    client
  );
};
