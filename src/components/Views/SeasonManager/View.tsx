import * as React from "react";
import { RouteComponentProps } from "react-router";

import SeasonForm from "components/Views/SeasonManager/SeasonForm";
import SeasonList from "components/Views/SeasonManager/SeasonList";

import useDataFetch from "components/Hooks/useDataFetch";

import { Set } from "models/Scryfall";
import { Season } from "models/Season";
import { Player } from "models/Player";

import "./styles.scss";

interface SeasonManagerViewActions {
  emitSelectSeasonForEditing: Function;
  emitDeselectSeasonForEditing: Function;
  requestGetSetByCode: Function;
  requestQueryPlayers: Function;
  requestCreateSeason: Function;
  requestGetSeasons: Function;
  requestUpdateSeason: Function;
}

interface SeasonManagerViewProps extends RouteComponentProps {
  actions: SeasonManagerViewActions;
  isRequestLoading: boolean;
  potentialSets: Set[];
  potentialPlayers: Player[];
  searchForPlayer: boolean;
  searchForSet: boolean;
  selectedPlayers: Player[];
  selectedSeason: Season;
  seasons: Season[];
}

const SeasonManagerView = ({
  actions,
  isRequestLoading,
  potentialPlayers,
  potentialSets,
  searchForPlayer,
  searchForSet,
  selectedPlayers,
  selectedSeason,
  seasons
}: SeasonManagerViewProps): React.FunctionComponentElement<SeasonManagerViewProps> => {
  useDataFetch(!seasons.length, actions.requestGetSeasons);

  const [showForm, setShowForm] = React.useState(!!selectedSeason);

  const handleSelectSeason = (season: Season): void => {
    actions.emitSelectSeasonForEditing(season);

    setShowForm(true);
  };

  const handleDeselectSeason = (): void => {
    actions.emitDeselectSeasonForEditing();

    setShowForm(false);
  };

  const handleCreateNewSeason = (): void => {
    if (selectedSeason) {
      actions.emitDeselectSeasonForEditing();
    }

    setShowForm(true);
  };

  const submitHandler = selectedSeason ? actions.requestUpdateSeason : actions.requestCreateSeason;

  return (
    <div className="season-manager-view">
      <SeasonList
        createHandler={handleCreateNewSeason}
        deselectHandler={handleDeselectSeason}
        seasons={seasons}
        selectHandler={handleSelectSeason}
        selectedSeason={selectedSeason}
        showForm={showForm}
      />
      {showForm ? (
        <SeasonForm
          isRequestLoading={isRequestLoading}
          potentialPlayers={potentialPlayers}
          potentialSets={potentialSets}
          searchForPlayer={searchForPlayer}
          searchForSet={searchForSet}
          selectedPlayers={selectedPlayers}
          selectedSeason={selectedSeason}
          fetchSetHandler={actions.requestGetSetByCode}
          searchPlayerHandler={actions.requestQueryPlayers}
          submitHandler={submitHandler}
        />
      ) : null}
    </div>
  );
};

export default SeasonManagerView;
