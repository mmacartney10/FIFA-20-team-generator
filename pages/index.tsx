import { useState } from 'react';
import { Team } from 'interfaces/players-interfaces';
import { Header, Filter, Formations } from 'views/organisms';

const defaultTeam = {
  attack: [],
  midfield: [],
  defence: [],
  goalkeeper: []
}

const Home = () => {

  const [ team, setTeam ] = useState<Team>(defaultTeam);
  const [ league, setLeague ] = useState('All');
  const [ formation, setFormation ] = useState('4-4-2');

  return (
    <div>
      <Header />
      <Filter setTeam={setTeam} league={league} setLeague={setLeague} formation={formation} setFormation={setFormation} />
      <Formations team={team} />
    </div>
  );
}

export default Home;
