import PlayerMapper, { defaultPlayer } from 'mappers/player-mapper';
import { Player, Formations } from 'interfaces/players-interfaces';

const testData: Player[] = [
  {
    image: '',
    name: 'test',
    team: 'test',
    league: 'ENG 1',
    position: 'ST',
    rating: '89'
  },
  {
    image: '',
    name: 'test',
    team: 'test',
    league: 'SPA 1',
    position: 'CF',
    rating: '89'
  }
]

test('When all leagues filter option is passed all players should be returned', () => {

  const league = 'all';

  expect(PlayerMapper.filterPlayers(testData, league)).toStrictEqual(testData);
});

test('When one league is passed the players only in that league should be returned', () => {

  const league = 'ENG 1'

  const expectedData = [{
    image: '',
    name: 'test',
    team: 'test',
    league: 'ENG 1',
    position: 'ST',
    rating: '89'
  }]

  expect(PlayerMapper.filterPlayers(testData, league)).toStrictEqual(expectedData);
});


test('When getListOfLeagues is called all the leagues should be returned in an array', () => {

  const expectedData = ['ENG 1', 'SPA 1'];

  expect(PlayerMapper.getListOfLeagues(testData)).toStrictEqual(expectedData);
});

test('When getListOfFormations is called all the formations should be returned in an array', () => {

  const formations: Formations = {
    '3-1-4-2': {
      attack: [ 'ST', 'ST' ],
      midfield: [ 'LM', 'CM', 'CDM', 'CM', 'RM' ],
      defence: [ 'CB', 'CB', 'CB' ],
      goalkeeper: [ 'GK' ]
    },
    '3-4-1-2': {
      attack: [ 'ST', 'ST' ],
      midfield: [ 'LM', 'CM', 'CAM', 'CM', 'RM' ],
      defence: [ 'CB', 'CB', 'CB' ],
      goalkeeper: [ 'GK' ]
    }
  };

  const expectedData = ['3-1-4-2', '3-4-1-2'];

  expect(PlayerMapper.getListOfFormations(formations)).toStrictEqual(expectedData);
});



test('When getRandomPlayer is called a single player should be returned in the position passed', () => {

  const position = 'ST';
  const expectedData =   {
    image: '',
    name: 'test',
    team: 'test',
    league: 'ENG 1',
    position: 'ST',
    rating: '89'
  }

  expect(PlayerMapper.getRandomPlayer(testData, position)).toStrictEqual(expectedData);
});

test('When getRandomPlayer is called and that position doesnot exist the default player should be returned', () => {

  const position = 'CB';

  expect(PlayerMapper.getRandomPlayer(testData, position)).toStrictEqual(defaultPlayer);
});
