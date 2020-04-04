import { Player } from 'interfaces/players-interfaces';
import styles from './Team.module.css';

interface Props {
  team: Player[]
}

const Team = ({ team }: Props) => {

  const RenderPlayer = ({  player }: { player: Player }) => (
    <div className={styles.player}>
      <div className={styles.player__header}>
        <img className={styles.player__image} src={player.image} />
        <div className={styles.player__stats}>
          <p className={styles.player__heading}>{player.position || 'Test'}</p>
          <p className={styles.player__text}>{player.rating || 'Test'}</p>
        </div>
      </div>
      <div className={styles.player__body}>
        <h1 className={styles.player__name}>{player.name || 'Test'}</h1>
        <div className={styles.player__leagueTeam}>
          <p className={styles.player__text}>{player.league || 'Test'}</p>
          <p className={styles.player__league}>{player.team || 'Test'}</p>
        </div>
      </div>
    </div>
  );

  if (team.length < 11) {
    return null;
  }

  return (
    <div className={styles.team}>
      <div className={styles.team__row}>
        <RenderPlayer player={team[0]} />
        <RenderPlayer player={team[1]} />
      </div>

      <div className={styles.team__row}>
        <RenderPlayer player={team[2]} />
        <RenderPlayer player={team[3]} />
        <RenderPlayer player={team[4]} />
        <RenderPlayer player={team[5]} />
      </div>

      <div className={styles.team__row}>
        <RenderPlayer player={team[6]} />
        <RenderPlayer player={team[7]} />
        <RenderPlayer player={team[8]} />
        <RenderPlayer player={team[9]} />
      </div>

      <div className={styles.team__row}>
        <RenderPlayer player={team[10]} />
      </div>
    </div>
  );
}

export default Team;
