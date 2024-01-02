import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { css } from '../styled-system/css';

export const InputText: FC<ComponentPropsWithRef<'input'>> = forwardRef(
  ({ ...props }, ref) => {
    return (
      <input
        type='text'
        className={css({
          width: '100%',
          padding: '10px 15px',
          fontSize: '16px',
          borderRadius: '3px',
          border: '2px solid #ddd',
          boxSizing: 'border-box',
        })}
        {...props}
        ref={ref}
      />
    );
  }
);
