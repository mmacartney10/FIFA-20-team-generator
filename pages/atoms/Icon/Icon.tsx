import styles from './Icon.module.scss';

interface Props {
  name: 'arrow-down';
}

const ArrowDown = () => (
  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeWidth="3"><path d="M2 2l5 5M12 2L7 7"/></g></svg>
);

export const Icon = ({ name }: Props) => {

  const getIcon = () => {

    switch (name) {
      case 'arrow-down':
        return <ArrowDown />
    }
  }

  return getIcon();
}
