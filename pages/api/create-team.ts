import playerData from 'data/player-data.json';
import { Player } from 'interfaces/players-interfaces';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const data: Player[] = [
    PlayerMapper(playerData).getRandomPlayer('ST'),
    PlayerMapper(playerData).getRandomPlayer('ST'),
    PlayerMapper(playerData).getRandomPlayer('LM'),
    PlayerMapper(playerData).getRandomPlayer('CM'),
    PlayerMapper(playerData).getRandomPlayer('CM'),
    PlayerMapper(playerData).getRandomPlayer('RM'),
    PlayerMapper(playerData).getRandomPlayer('LB'),
    PlayerMapper(playerData).getRandomPlayer('CB'),
    PlayerMapper(playerData).getRandomPlayer('CB'),
    PlayerMapper(playerData).getRandomPlayer('RB'),
    PlayerMapper(playerData).getRandomPlayer('GK')
  ]

  response.status(200).json(data);
};
