import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { createChannel, createClient } from 'nice-grpc';
import { cookies } from 'next/headers';
import { BACKEND_END_POINT } from '../../app/const/const';
import { UserDefinition } from '../../types/pkg/User/presenter/user';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (account?.provider === 'google') {
        if (!profile?.email) return false;

        const userData = await getUser(profile.email);

        if (!userData.id)
          return `/login/register?mailAddress=${encodeURIComponent(
            profile.email
          )}`;

        return true;
      }

      return false;
    },
  },
};

const getUser = async (mailAddress: string) => {
  const channel = createChannel(BACKEND_END_POINT);
  const client = createClient(UserDefinition, channel);

  let auth: string | undefined;
  const user = await client.getUserByMailAddress(
    { mailAddress },
    {
      onHeader: (header) => (auth = header.get('Authorization')),
    }
  );

  cookies().set('Authorization', auth ?? '', {
    secure: true,
  });
  return user;
};
