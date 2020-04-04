import { useEffect, useState } from 'react';
import ApiUtil from 'utils/api-util';
// import { Player } from 'interfaces/players-interfaces';

const defaultFilter = {
  leagues: []
}

interface Props {
  setTeam: (value: any) => any;
}

const Team = ({ setTeam }: Props) => {

  const [ filter, setFilter ] = useState(defaultFilter)
  const [ league, seLeague ] = useState('All');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('handleSubmit');

    ApiUtil().apiPost('/api/create-team', {league: league}).then(setTeam);

  }

  useEffect(() => {
    ApiUtil().apiGet('/api/filter-options').then(setFilter);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>

        <legend>Filter</legend>

        <div>
          <label htmlFor="league">League</label>
          <select id="cars" onChange={(event) => seLeague(event.target.value)}>
            <option value="all">All</option>
            {filter.leagues.map(league => (
              <option value={league} key={league}>{league}</option>
            ))}
          </select>
        </div>

        <button type="submit">Generate team</button>

      </fieldset>
    </form>
  );
}

export default Team;
