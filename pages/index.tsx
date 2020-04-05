import { useState } from 'react';
import { Player } from 'interfaces/players-interfaces';
import Team from 'components/Team/Team';
import Filter from 'components/Filter/Filter';

const Home = () => {

  const [ team, setTeam ] = useState<Player[]>([]);

  return (
    <div>
      <Filter setTeam={setTeam} />
      <Team team={team} />
    </div>
  );
}

export default Home;
