import playerData from 'data/player-data.json';
import { Player, Filter } from 'interfaces/players-interfaces';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const filterOptions = request.body;

  const filteredPlayerData = PlayerMapper.filterPlayers(playerData, filterOptions);

  const data: Player[] = [
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'ST'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'ST'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'LM'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'CM'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'CM'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'RM'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'LB'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'CB'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'CB'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'RB'),
    PlayerMapper.getRandomPlayer(filteredPlayerData, 'GK')
  ]

  response.status(200).json(data);
};
