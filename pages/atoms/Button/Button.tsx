import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
}

export const Button = ({ children }: Props) => {

  return (
    <button className={styles.button} type="submit">{children}</button>
  );
}
