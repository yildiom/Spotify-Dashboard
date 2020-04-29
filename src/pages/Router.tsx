import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

const NotFound = React.lazy(() =>
  import("./not-found" /* webpackChunkName: "not-found" */)
);

/**
 * your console will show an error for passing component prop to Route
 * > this shouldn't cause issues
 * > see https://github.com/ReactTraining/react-router/issues/6420
 */

const Router = () => (
  <Suspense fallback={null}>
    <Switch>
      {routes.map(route => {
        const routeProps = {
          key: route.path,
          exact: route.exact,
          path: route.path,
          component: route.component
        };

        return <Route {...routeProps} />;
      })}

      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Router;
