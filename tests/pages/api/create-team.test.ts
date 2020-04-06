import { Player, Position, Team } from 'interfaces/players-interfaces';
import { getPlayers, createTeam } from 'pages/api/create-team';

test('When getPlayers is called it should return a list of players with those positions', () => {

  const positions: Position[] = [ 'LW', 'ST', 'RW'];
  const playerData: Player[] = [
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'ST',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LW',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RW',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LB',rating:'94'}
  ];
  const expectedData: Player[] = [
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LW',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'ST',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RW',rating:'94'}
  ]

  expect(getPlayers(positions, playerData)).toStrictEqual(expectedData);

});

test('When the filter options all and 4-4-2 are selected it should create that team', () => {

  const league: string = 'all';
  const formation: string = '4-4-2';

  const playerData: Player[] = [
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'ST',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'ST',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RM',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LB',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CB',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CB',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RB',rating:'94'},
    {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'GK',rating:'94'}
  ];

  const expectedData: Team = {
    attack: [
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'ST',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'ST',rating:'94'}
    ],
    midfield: [
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LM',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CM',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CM',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RM',rating:'94'},
    ],
    defence: [
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'LB',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CB',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'CB',rating:'94'},
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'RB',rating:'94'},
    ],
    goalkeeper: [
      {image:'',name:'Lionel Messi',team:'FC Barcelona',league:'ESP 1',position:'GK',rating:'94'}
    ]
  }

  expect(createTeam(league, formation, playerData)).toStrictEqual(expectedData);
});
