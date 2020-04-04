import { Player, Position } from 'interfaces/players-interfaces';
import SortUtil from 'utils/sort-util';

interface PlayerMapper {
  getListOfLeagues: () => string[];
  getRandomPlayer: (position: Position) => Player;
}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default (playerData: Player[]): PlayerMapper => {

  const getListOfLeagues = () => {
    const listOfLeagues = [...new Set( playerData.map(x => x.league) )];
    return SortUtil().sortAlphabetically(listOfLeagues);
  }

  const getRandomPlayer = (position: Position) => {

    const playersInPosition = playerData.filter((player: Player) => player.position === position);
    const randomIndex = generateRandomNumber(0, playersInPosition.length - 1);
    const player = playersInPosition[randomIndex];

    console.log('player', player);

    return player;
  }

  return {
    getListOfLeagues,
    getRandomPlayer
  }
};
