import playerData from 'data/player-data.json';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const leagues = PlayerMapper.getListOfLeagues(playerData);

  response.status(200).json({
    leagues: leagues
  });
};
