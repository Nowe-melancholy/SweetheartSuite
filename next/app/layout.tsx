import { css } from '../styled-system/css';
import './globals.css';
import { NextAuthProvider } from './NextAuthProvider';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body>
        <div className={'flex flex-col'}>
          <div className={'h-16 p-1 mb-8 text-3xl text-white bg-black'}>
            SweetHeartSuite
          </div>
          <NextAuthProvider>
            <div>{children}</div>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
