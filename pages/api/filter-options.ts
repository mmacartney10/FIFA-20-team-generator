import playerData from 'data/player-data.json';
import formationData from 'data/formations';
import PlayerMapper from 'mappers/player-mapper';

export default (request, response) => {

  const leagues = PlayerMapper.getListOfLeagues(playerData);
  const formations = PlayerMapper.getListOfFormations(formationData);

  response.status(200).json({
    leagues,
    formations
  });
};
