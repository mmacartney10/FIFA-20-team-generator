export type Forward = 'ST' | 'LW' | 'RW' | 'CF';
export type Midfield = 'CAM' | 'LM' | 'CM' | 'RM';
export type Defence = 'LWB' | 'CDM' | 'RWB' | 'LB' | 'CB' | 'RB';
export type Goalkeeper = 'GK';
export type Position = Forward | Midfield | Defence | Goalkeeper;

export interface Player {
  image: string;
  name: string;
  team: string;
  league: string;
  position: string;
  rating: string;
}

export interface Filter {
  league: string;
  formation: string;
}

export interface Team {
  attack: Player[],
  midfield: Player[],
  defence: Player[],
  goalkeeper: Player[]
};

export interface Formation {
  attack: Position[],
  midfield: Position[],
  defence: Position[],
  goalkeeper: Position[]
}

export interface Formations {
  [name: string]: Formation;
}
