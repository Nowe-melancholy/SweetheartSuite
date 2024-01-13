import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { createChannel, createClient } from 'nice-grpc';
import { BACKEND_END_POINT } from '../../../const/const';
import { UserDefinition } from '../../../../types/pkg/User/presenter/user';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === 'google') {
        if (!profile?.email) return false;

        const userData = await getUser(profile.email);
        user.email = profile.email;

        if (!userData.id) return '/login/register';
        return true;
      }

      return false;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          user,
        };
      }
      return token;
    },
    session: ({ session, user, token }) => {
      session.user = user;
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

const getUser = async (mailAddress: string) => {
  const channel = createChannel(BACKEND_END_POINT);
  const client = createClient(UserDefinition, channel);
  const user = await client.getUserByMailAddress({ mailAddress });
  return user;
};
