import { useState, useEffect } from 'react';
import { Player } from 'interfaces/players-interfaces';
import { Header, Filter } from 'pages/organisms';

const Home = () => {

  const [ team, setTeam ] = useState<Player[]>([]);

  useEffect(() => {
    console.log('team: ', team);
  }, [team]);

  return (
    <div>
      <Header />
      <Filter setTeam={setTeam} />
    </div>
  );
}

export default Home;
