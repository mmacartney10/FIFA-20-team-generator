import playerData from 'data/player-data.json';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const data = PlayerMapper(playerData).getListOfLeagues();

  response.status(200).json(data);
};
