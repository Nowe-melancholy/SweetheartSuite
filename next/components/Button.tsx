import { css } from '../styled-system/css';

type Props = {
  value: string;
};

export const BUtton = ({ value }: Props) => (
  <button
    type='submit'
    className={css({
      height: 'full',
      width: 'full',
      borderRadius: '0.5rem',
      color: 'white',
      backgroundColor: 'black',
    })}
  >
    {value}
  </button>
);
