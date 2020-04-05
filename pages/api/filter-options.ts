import playerData from 'data/player-data.json';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const leagues = PlayerMapper.getListOfLeagues(playerData);
  const formations = [
    '4-4-2',
    '4-3-3'
  ]

  response.status(200).json({
    leagues,
    formations
  });
};
