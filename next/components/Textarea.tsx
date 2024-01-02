import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { css } from '../styled-system/css';

export const Textarea: FC<ComponentPropsWithRef<'textarea'>> = forwardRef(
  ({ ...props }, ref) => {
    console.log('InputText', props);
    return (
      <textarea
        className={css({
          width: '100%',
          height: 'full',
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
