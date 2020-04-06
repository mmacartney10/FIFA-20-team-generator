import { Player, Team } from 'interfaces/players-interfaces';
import { Text } from 'views/atoms';
import { PlayerCard } from 'views/molecules';
import styles from './Formations.module.scss';

interface Props {
  team: Team;
}

export const Formations = ({ team }: Props) => {

  const noAttack = team.attack.length === 0;
  const noMidfield = team.midfield.length === 0;
  const noDefence = team.defence.length === 0;
  const noGoalkeeper = team.goalkeeper.length === 0;

  const getPlayer = (player: Player) => (
    <PlayerCard player={player}/>
  );

  if (noAttack || noMidfield || noDefence || noGoalkeeper) {
    return null;
  }

  return (
    <header className="wrapper">
      <div className="inner">

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Attack</Text>
        </div>

        <div className={styles.formationBody}>
          {team.attack.map(getPlayer)}
        </div>

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Midfield</Text>
        </div>

        <div className={styles.formationBody}>
          {team.midfield.map(getPlayer)}
        </div>

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Defence</Text>
        </div>

        <div className={styles.formationBody}>
          {team.defence.map(getPlayer)}
        </div>

        <div className={styles.formationHead}>
          <Text colour="light" type="heading" size="xl" level={2}>Goalkeeper</Text>
        </div>

        <div className={styles.formationBody}>
          {team.goalkeeper.map(getPlayer)}
        </div>

      </div>
    </header>
  );
}
