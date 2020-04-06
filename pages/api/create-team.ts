import playerData from 'data/player-data.json';
import Formations from 'data/formations';
import { Player, Position } from 'interfaces/players-interfaces';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const filterOptions = request.body;

  const filteredPlayerData = PlayerMapper.filterPlayers(playerData, filterOptions);
  const formation = Formations[filterOptions.formation] ?? Formations['4-4-2'];

  let data: Player[] = [];

  formation.forEach((position: Position) => data.push(PlayerMapper.getRandomPlayer(filteredPlayerData, position)))

  response.status(200).json(data);
};
