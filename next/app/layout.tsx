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
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            height: 'full',
            width: 'full',
            justifyContent: 'center',
          })}
        >
          <div
            className={css({
              fontSize: '24px',
              border: '1px solid #e0d0de',
              backgroundColor: '#e0d0de',
            })}
          >
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
