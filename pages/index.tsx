import { useEffect, useState } from 'react';
import ApiUtil from 'utils/api-util';

import Team from 'components/Team/Team';

const Home = () => {

  const [ listOfLeagues, setListOfLeagues ] = useState<string[]>([]);

  useEffect(() => {

    ApiUtil().apiGet('/api/filter-options').then(setListOfLeagues);

  }, []);

  const RenderLeagueList = () => (
    <ul>
      {listOfLeagues.map(league => (
        <li key={league}>{league}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <p>This is the home page</p>
      <Team />
    </div>
  );
}

export default Home;
