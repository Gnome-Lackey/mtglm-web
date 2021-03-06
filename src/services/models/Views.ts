export interface MatchView {
  id: string;
  isSeasonPoint: boolean;
  wins: number;
  games: number;
}

export interface PlayerView {
  id: string;
  email: string;
  displayName?: string;
  userName: string;
  epithet: string;
  colors: string[];
  totalWins: number;
  totalLosses: number;
}

export interface ScryfallCardView {
  id: string;
  name: string;
  language: string;
  releasedOn: string;
  image: string;
  costs: {
    mana: string;
    converted: number;
  };
  type: string;
  subtype: string;
  colors: string[];
  identity: string[];
  set: {
    code: string;
    name: string;
  };
  rarity: string;
}

export interface ScryfallSetView {
  id: string;
  code: string;
  name: string;
  releasedOn: string;
  cardCount: number;
}

export interface SeasonView {
  id: string;
  isActive: boolean;
  startedOn: string;
  endedOn: string;
}
