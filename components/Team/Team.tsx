import { useEffect, useState } from 'react';
import ApiUtil from 'utils/api-util';
import { Player } from 'interfaces/players-interfaces';
import styles from './Team.module.css';

const Team = () => {

  const [ listOfPlayers, setListOfPlayers ] = useState<Player[]>([]);

  useEffect(() => {
    ApiUtil().apiGet('/api/create-team').then(setListOfPlayers);
  }, []);

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
        <h1 className={styles.player__heading}>{player.name || 'Test'}</h1>
        <p className={styles.player__text}><strong>League:</strong> {player.league || 'Test'}</p>
        <p className={styles.player__text}><strong>Team:</strong> {player.team || 'Test'}</p>
      </div>
    </div>
  );

  if (listOfPlayers.length < 11) {
    return null;
  }

  return (
    <div className={styles.team}>
      <div className={styles.team__row}>
        <RenderPlayer player={listOfPlayers[0]} />
        <RenderPlayer player={listOfPlayers[1]} />
      </div>

      <div className={styles.team__row}>
        <RenderPlayer player={listOfPlayers[2]} />
        <RenderPlayer player={listOfPlayers[3]} />
        <RenderPlayer player={listOfPlayers[4]} />
        <RenderPlayer player={listOfPlayers[5]} />
      </div>

      <div className={styles.team__row}>
        <RenderPlayer player={listOfPlayers[6]} />
        <RenderPlayer player={listOfPlayers[7]} />
        <RenderPlayer player={listOfPlayers[8]} />
        <RenderPlayer player={listOfPlayers[9]} />
      </div>

      <div className={styles.team__row}>
        <RenderPlayer player={listOfPlayers[10]} />
      </div>
    </div>
  );
}

export default Team;
