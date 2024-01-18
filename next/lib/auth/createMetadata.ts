import { Metadata } from 'nice-grpc';
import { cookies } from 'next/headers';

export const createMetadata = () => {
  const token = cookies().get('Authorization');
  const metadata = new Metadata();
  metadata.set('Authorization', token?.value ?? '');
  return { metadata };
};
