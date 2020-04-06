import { ReactNode } from 'react';
import styles from './Text.module.scss';

interface Props {
  type: 'heading' | 'body' | 'label';
  level?: 1 | 2 | 3 | 4;
  size?: 's' | 'm' | 'l' | 'xl';
  colour: 'dark' | 'light';
  center?: boolean;
  children: ReactNode;
}


export const Text = ({ colour, level = 1, size, type, children, center = false }: Props) => {

  const getSize = () => {

    switch (size) {
      case 's':
        return styles['text--s'];
      case 'm':
        return styles['text--m'];
      case 'l':
        return styles['text--l'];
      case 'xl':
        return styles['text--xl'];
    }
  }

  const getColour = () => {

    switch (colour) {
      case 'light':
        return styles['text--light'];
      case 'dark':
        return styles['text--dark'];
    }
  }

  const getType = () => {

    switch (type) {
      case 'body':
      case 'label':
        return styles['textBody'];
      case 'heading':
        return styles['textHeading'];
    }
  }

  const getClassNames = () => {

    let classNames = [styles.text];

    classNames.push(getColour());

    classNames.push(getType());

    size && classNames.push(getSize());

    center && classNames.push(styles['text--center'])

    return classNames.join(' ');
  }

  const getHeading = () => {

    switch (level) {
      case 1:
        return <h1 className={getClassNames()}>{children}</h1>
      case 2:
        return <h2 className={getClassNames()}>{children}</h2>
      case 3:
        return <h3 className={getClassNames()}>{children}</h3>
      case 4:
        return <h4 className={getClassNames()}>{children}</h4>
    }
  }

  if (type === 'label') {
    return (
      <label className={getClassNames()}>{children}</label>
    );
  }

  if (type === 'body') {
    return (
      <p className={getClassNames()}>{children}</p>
    );
  }

  return getHeading();
}
