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
}
