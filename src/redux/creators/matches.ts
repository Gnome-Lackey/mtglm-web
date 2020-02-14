import { EMIT_CREATE_MATCH_SUCCESS, EMIT_UPDATE_LOADING_MATCHES } from "redux/actions/match";

import { emitResetError, emitRequestError } from "redux/creators/errors";
import { emitRequestLoading } from "redux/creators/application";
import { requestGetSeason } from "redux/creators/seasons";

import * as matchService from "services/match";

import { RecordMatchFields } from "components/Hooks/useFormData/models/FormFields";

import { DOMAIN_ERROR_GENERAL, VIEW_ERROR_GENERAL } from "constants/errors";

export const requestCreateMatch = (details: RecordMatchFields) => async (dispatch: Function) => {
  dispatch(emitResetError(DOMAIN_ERROR_GENERAL, VIEW_ERROR_GENERAL));

  dispatch(emitRequestLoading(EMIT_UPDATE_LOADING_MATCHES, true));

  const winner = details.playerRecords.reduce(
    (player, record) => (record.wins > player.wins ? record : player),
    details.playerRecords[0]
  );

  const losers = details.playerRecords
    .filter((record) => record.id !== winner.id)
    .map((record) => record.player.key);

  const gamesPlayed = details.playerRecords.reduce((total, record) => total + record.wins, 0);

  const body = {
    losers,
    games: gamesPlayed,
    winner: winner.player.key,
    wins: winner.wins,
    season: details.season.key
  };

  const data = await matchService.create(body);

  if (data && data.error) {
    dispatch(emitRequestError(DOMAIN_ERROR_GENERAL, VIEW_ERROR_GENERAL, data.error.message));
  } else {
    dispatch({ type: EMIT_CREATE_MATCH_SUCCESS });
    dispatch(requestGetSeason(details.season.key));
  }

  dispatch(emitRequestLoading(EMIT_UPDATE_LOADING_MATCHES, false));
};
