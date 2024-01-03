import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => (
  <div
    className={css({
      margin: '10px 0',
      padding: '10px',
      overflow: 'hidden',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      width: 'full',
    })}
  >
    {children}
  </div>
);
