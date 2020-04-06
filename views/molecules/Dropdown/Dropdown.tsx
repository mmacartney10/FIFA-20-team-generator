import styles from './Dropdown.module.scss';
import { Text, Icon } from 'views/atoms';

interface Props {
  name: string;
  values: string[];
  setValue: Function;
  defaultValue?: string;
}

export const Dropdown = ({ name, values, setValue, defaultValue }: Props) => {

  return (
    <div className={styles.dropdown}>
      <Text type="label" colour="light">{name}</Text>
      <div className={styles.dropdown__container}>
        <select id={name} name={name} onChange={(event) => setValue(event.target.value)} className={styles.dropdown__select}>
          {defaultValue && <option value={defaultValue}>{defaultValue}</option>}
          {values && values.map(value => (
            <option value={value} key={value}>{value}</option>
          ))}
        </select>
        <div className={styles.dropdown__icon}>
          <Icon name="arrow-down" />
        </div>
      </div>
    </div>
  );
}
