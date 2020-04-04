import { Player, Position, Filter } from 'interfaces/players-interfaces';
import SortUtil from 'utils/sort-util';

interface PlayerMapper {
  filterPlayers: (playerData: Player[], filterOptions: Filter) => Player[];
  getListOfLeagues: (playerData: Player[]) => string[];
  getRandomPlayer: (playerData: Player[], position: Position) => Player;
}

export const defaultPlayer = {
  image: 'https://www.futwiz.com/assets/img/fifa20/careerfaces/244036.png',
  name: 'Matthew Macartney',
  team: 'Manchester City',
  league: 'Eng 1',
  position: 'ST',
  rating: '99'
}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const filterPlayers = (playerData: Player[], filterOptions: Filter) => {

  let data = [...playerData];

  if (filterOptions.league !== 'all') {
    data = playerData.filter(x => x.league === filterOptions.league)
  }

  return data;
}

const getListOfLeagues = (playerData: Player[]) => {
  const listOfLeagues = [...new Set( playerData.map(x => x.league) )];
  return SortUtil().sortAlphabetically(listOfLeagues);
}

const getRandomPlayer = (playerData: Player[], position: Position) => {

  const playersInPosition = playerData.filter((player: Player) => player.position === position);
  const randomIndex = generateRandomNumber(0, playersInPosition.length - 1);
  let player = playersInPosition[randomIndex];

  if (player === undefined) {
    player = defaultPlayer;
  }

  return player;
}

const playerMapper: PlayerMapper = {
  filterPlayers,
  getListOfLeagues,
  getRandomPlayer
};

export default playerMapper;
