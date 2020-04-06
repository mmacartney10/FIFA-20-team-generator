import { useState, useEffect } from 'react';
import { Player } from 'interfaces/players-interfaces';
import { Header, Filter, Formations } from 'pages/organisms';

const Home = () => {

  const [ team, setTeam ] = useState<Player[]>([]);

  return (
    <div>
      <Header />
      <Filter setTeam={setTeam} />
      <Formations team={team} />
    </div>
  );
}

export default Home;
