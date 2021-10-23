import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from './pages/Main/index'

function Index(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default Index;
