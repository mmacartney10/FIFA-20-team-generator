import { useEffect, useState, FormEvent } from 'react';
import ApiUtil from 'utils/api-util';
import ApiUrls from 'data/api-urls';
import { Text, Button } from 'views/atoms';
import { Dropdown } from 'views/molecules';
import styles from './Filter.module.scss';

const defaultFilter = {
  leagues: [],
  formations: []
}

interface Props {
  setTeam: (value: any) => any;
  league: string;
  setLeague: Function;
  formation: string;
  setFormation: Function;
}

export const Filter = ({ setTeam, league, setLeague, formation, setFormation }: Props) => {

  const [ filter, setFilter ] = useState(defaultFilter)

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
            <legend className={styles.filterTitle}>
              <Text colour="light" type="heading" size="l" level={2}>Create new team</Text>
            </legend>
            <Dropdown defaultValue="all" name="League" setValue={setLeague} values={filter.leagues} />
            <Dropdown name="Formation" setValue={setFormation} values={filter.formations} />
            <Button>Generate team</Button>
          </fieldset>
        </form>

      </div>
    </section>
  );
}
