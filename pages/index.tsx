import { useState } from 'react';
import { Team } from 'interfaces/players-interfaces';
import { Header, Filter, Formations } from 'views/organisms';
import Meta  from 'views/Meta';

const defaultTeam = {
  attack: [],
  midfield: [],
  defence: [],
  goalkeeper: [],
  subs: []
}

const Home = () => {

  const [ team, setTeam ] = useState<Team>(defaultTeam);
  const [ league, setLeague ] = useState('All');
  const [ formation, setFormation ] = useState('4-4-2');

  return (
    <div>
      <Meta title="Fifa 20 Team Generator" description="A site that generates a random team from a league and formation" />
      <Header />
      <Filter setTeam={setTeam} league={league} setLeague={setLeague} formation={formation} setFormation={setFormation} />
      <Formations team={team} />
    </div>
  );
}

export default Home;
