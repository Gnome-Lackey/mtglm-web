import { TypeAheadOption } from "components/Form/TypeAhead/Model/TypeAheadOption";
import { Card } from "models/Card";

export interface ConfirmFields {
  code: string;
}

export interface GettingStartedFields {
  epithet: string;
  favoriteCard: Card;
}

export interface LoginFields {
  password: string;
  userName: string;
}

export interface PlayerRecordFields {
  id: string;
  player: TypeAheadOption;
  wins: number;
}

export interface RecordMatchFields {
  playerRecords: PlayerRecordFields[];
}

export interface SeasonFields {
  [k: string]: any;
  startedDate: string;
  endedDate: string;
  set: TypeAheadOption;
  players: TypeAheadOption[];
  isActive: boolean;
}

export interface SignUpFields {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
}
