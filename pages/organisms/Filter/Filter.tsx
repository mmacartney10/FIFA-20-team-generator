import { useEffect, useState, FormEvent } from 'react';
import ApiUtil from 'utils/api-util';
import ApiUrls from 'data/api-urls';
import { Text, Button } from 'pages/atoms';
import { Dropdown } from 'pages/molecules';

const defaultFilter = {
  leagues: [],
  formations: []
}

interface Props {
  setTeam: (value: any) => any;
}

export const Filter =  ({ setTeam }: Props) => {

  const [ filter, setFilter ] = useState(defaultFilter)
  const [ league, setLeague ] = useState('All');
  const [ formation, setFormation ] = useState('4-4-2');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    ApiUtil().apiPost(ApiUrls.createTeam, { league, formation }).then(setTeam);
  }

  useEffect(() => {
    ApiUtil().apiGet(ApiUrls.filterOptions).then(setFilter);
  }, []);

  return (
    <section className="wrapper wrapper--green">
      <div className="inner">

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="hidden">Create new team</legend>
            <Text colour="light" type="heading" size="l" level={2}>Create new team</Text>
            <Dropdown defaultValue="all" name="League" setValue={setLeague} values={filter.leagues} />
            <Dropdown name="Formation" setValue={setFormation} values={filter.formations} />
            <Button>Generate team</Button>
          </fieldset>
        </form>

      </div>
    </section>
  );
}
