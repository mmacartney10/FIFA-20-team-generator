import { useEffect, useState } from 'react';
import ApiUtil from 'utils/api-util';
import ApiUrls from 'data/api-urls';

const defaultFilter = {
  leagues: [],
  formations: []
}

interface Props {
  setTeam: (value: any) => any;
}

const Team = ({ setTeam }: Props) => {

  const [ filter, setFilter ] = useState(defaultFilter)
  const [ league, seLeague ] = useState('All');
  const [ formation, setFormation ] = useState('4-4-2');

  const handleSubmit = (event) => {
    event.preventDefault();
    ApiUtil().apiPost(ApiUrls.createTeam, { league, formation }).then(setTeam);
  }

  useEffect(() => {
    ApiUtil().apiGet(ApiUrls.filterOptions).then(setFilter);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>

        <legend>Filter</legend>

        <div>
          <label htmlFor="league">League</label>
          <select id="cars" onChange={(event) => seLeague(event.target.value)}>
            <option value="all">All</option>
            {filter.leagues.map(_league => (
              <option value={_league} key={_league}>{_league}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="league">Formation</label>
          <select id="cars" onChange={(event) => setFormation(event.target.value)}>
            {filter.formations.map(_formation => (
              <option value={_formation} key={_formation}>{_formation}</option>
            ))}
          </select>
        </div>

        <button type="submit">Generate team</button>

      </fieldset>
    </form>
  );
}

export default Team;
