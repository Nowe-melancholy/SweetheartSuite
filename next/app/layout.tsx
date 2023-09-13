import { css } from '../styled-system/css';
import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body className={css({ backgroundColor: 'amber.100' })}>{children}</body>
    </html>
  );
};

export default RootLayout;
