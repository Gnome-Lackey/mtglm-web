import * as React from "react";
import { RouteComponentProps } from "react-router";

import { User } from "models/User";

import "./styles.scss";
import Fab from "components/Common/Fab";

interface HomeViewProps extends RouteComponentProps {
  actions: {};
  user: User;
}

const HomeView: React.FunctionComponent<HomeViewProps> = ({
  user
}: HomeViewProps): React.FunctionComponentElement<HomeViewProps> => (
  <div className="home-view">
    <p>Welcome {user.userName}! This site is under construction.</p>
    <Fab clickHandler={() => console.log("clicked")}>
      <i className="fas fa-plus" />
    </Fab>
  </div>
);

export default HomeView;
