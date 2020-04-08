import { Formations } from 'interfaces/players-interfaces';
export default {
  '3-1-4-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'LM', 'CM', 'CDM', 'CM', 'RM' ],
    defence: [ 'CB', 'CB', 'CB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '3-4-1-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'LM', 'CM', 'CAM', 'CM', 'RM' ],
    defence: [ 'CB', 'CB', 'CB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '3-4-2-1': {
    attack: [ 'ST', 'ST', 'ST' ],
    midfield: [ 'LM', 'CM', 'CM', 'RM' ],
    defence: [ 'CB', 'CB', 'CB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '3-4-3(diamond)': {
    attack: [ 'LW', 'ST', 'RW' ],
    midfield: [ 'LM', 'CAM', 'CDM', 'RM' ],
    defence: [ 'CB', 'CB', 'CB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '3-5-1-1': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CDM', 'CM', 'CF', 'CDM', 'RM' ],
    defence: [ 'CB', 'CB', 'CB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '3-5-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'LM', 'CM', 'CAM', 'CM', 'RM' ],
    defence: [ 'CB', 'CB', 'CB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-1-3-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'LM', 'CM', 'CDM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-1-4-1': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CM', 'CDM', 'CM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-2-2-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'CAM', 'CDM', 'CDM', 'CAM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-2-3-1(narrow)': {
    attack: [ 'ST' ],
    midfield: [ 'CAM', 'CDM', 'CAM', 'CDM', 'CAM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-2-3-1(wide)': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CDM', 'CAM', 'CDM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-2-4': {
    attack: [ 'LW', 'ST', 'ST', 'RW' ],
    midfield: [ 'CM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-1-2': {
    attack: [ 'ST', 'CAM', 'ST' ],
    midfield: [ 'CM', 'CM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-2-1': {
    attack: [ 'ST', 'ST', 'ST' ],
    midfield: [ 'CM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-3(flat)': {
    attack: [ 'LW', 'ST', 'RW' ],
    midfield: [ 'CM', 'CM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-3(holding)': {
    attack: [ 'LW', 'ST', 'RW' ],
    midfield: [ 'CM', 'CDM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-3(defend)': {
    attack: [ 'LW', 'ST', 'RW' ],
    midfield: [ 'CDM', 'CM', 'CDM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-3(attack)': {
    attack: [ 'LW', 'ST', 'RW' ],
    midfield: [ 'CM', 'CAM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-3-3(false9)': {
    attack: [ 'LW', 'CF', 'RW' ],
    midfield: [ 'CM', 'CDM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-4-1-1(attack)': {
    attack: [ 'ST', 'CF' ],
    midfield: [ 'LM', 'CM', 'CM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-4-1-1(midfield)': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CM', 'CAM', 'CM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-4-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'LM', 'CM', 'CM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-4-2(holding)': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'LM', 'CDM', 'CDM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-5-1(attack)': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CAM', 'CM', 'CAM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '4-5-1': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CM', 'CM', 'CM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '5-2-1-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'CM', 'CAM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '5-2-3': {
    attack: [ 'LW', 'ST', 'RW' ],
    midfield: [ 'CM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '5-3-2': {
    attack: [ 'ST', 'ST' ],
    midfield: [ 'CM', 'CM', 'CM' ],
    defence: [ 'LB', 'CB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '5-4-1(diamond)': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CAM', 'CDM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  },
  '5-4-1': {
    attack: [ 'ST' ],
    midfield: [ 'LM', 'CM', 'CM', 'RM' ],
    defence: [ 'LB', 'CB', 'CB', 'CB', 'RB' ],
    goalkeeper: [ 'GK' ],
    subs: ['GK', 'CB', 'CB',  'CM', 'CM', 'ST']
  }
} as Formations;
