import { Player } from 'interfaces/players-interfaces';
import { Text } from 'pages/atoms';
import { PlayerCard } from 'pages/molecules';
import styles from './Formations.module.scss';

interface Props {
  team: Player[];
}

export const Formations = ({ team }: Props) => {

  if (team.length === 0) {
    return null;
  }

  return (
    <header className="wrapper">
      <div className="inner">

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Attack</Text>
        </div>

        <div className={styles.formationBody}>
          <PlayerCard player={team[0]}/>
          <PlayerCard player={team[1]}/>
        </div>

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Midfield</Text>
        </div>

        <div className={styles.formationBody}>
          <PlayerCard player={team[2]}/>
          <PlayerCard player={team[3]}/>
          <PlayerCard player={team[4]}/>
          <PlayerCard player={team[5]}/>
        </div>

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Defence</Text>
        </div>

        <div className={styles.formationBody}>
          <PlayerCard player={team[6]}/>
          <PlayerCard player={team[7]}/>
          <PlayerCard player={team[8]}/>
          <PlayerCard player={team[9]}/>
        </div>

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Goalkeeper</Text>
        </div>

        <div className={styles.formationBody}>
          <PlayerCard player={team[10]}/>
        </div>

      </div>
    </header>
  );
}
