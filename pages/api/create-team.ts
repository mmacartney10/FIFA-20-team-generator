import playerData from 'data/player-data.json';
import Formations from 'data/formations';
import { Player, Position, Team } from 'interfaces/players-interfaces';
import PlayerMapper from 'mappers/player-mapper';

export const getPlayers = (positions: Position[], data: Player[]): Player[] => {
  return positions.map((position: Position) => PlayerMapper.getRandomPlayer(data, position));
}

export const createTeam = (league: string, formation: string, _playerData: Player[]): Team => {

  const filteredPlayerData = PlayerMapper.filterPlayers(_playerData, league);
  const { attack, midfield, defence, goalkeeper } = Formations[formation] ?? Formations['4-4-2'];

  return {
    attack: getPlayers(attack, filteredPlayerData),
    midfield: getPlayers(midfield, filteredPlayerData),
    defence: getPlayers(defence, filteredPlayerData),
    goalkeeper: getPlayers(goalkeeper, filteredPlayerData)
  }
}

export default (request, response) => {

  const { league, formation } = request.body;
  const data = createTeam(league, formation, playerData);

  response.status(200).json(data);
};
