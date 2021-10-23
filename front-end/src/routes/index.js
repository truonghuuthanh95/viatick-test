import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Photo = React.lazy(() => import("features/Photo/index"));
const Auth = React.lazy(() => import("features/Auth/index"));
const Index = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/auth" />

            <Route path="/auth" component={Auth} />

            {/* <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default Index;
