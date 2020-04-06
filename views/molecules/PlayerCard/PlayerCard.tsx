import { Player } from 'interfaces/players-interfaces';
import { Text } from 'views/atoms';
import styles from './PlayerCard.module.scss';

interface Props {
  player: Player;
}

export const PlayerCard = ({ player }: Props) => {

  if (player === undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__imageContainer}>
          <img src={player.image} className={styles.card__image} />
        </div>
        <div className={styles.card__stats}>
          <Text colour="light" type="body" size="s">{player.position}</Text>
          <Text colour="light" type="body" size="s">{player.rating}</Text>
        </div>
      </div>
      <div className={styles.card__name}>
        <Text colour="light" type="body" size="s">{player.name}</Text>
      </div>
      <div className={styles.card__body}>
        <Text colour="dark" type="body" size="s">{player.team}</Text>
        <Text colour="dark" type="body" size="s">{player.league}</Text>
      </div>
    </div>
  );
}
