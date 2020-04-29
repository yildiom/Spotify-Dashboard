import React from "react";
import { ROUTE } from "../../pages/routes.constants";

/**
 * use lazy imports to get code splitting out-of-the-box
 * you can use "webpackChunkName" to name this chunk
 */
// tslint:disable:space-in-parens
const componentPromise = import(
  "./Home" /* webpackChunkName: "home", webpackPreload: true */
);
const Component = React.lazy(() => componentPromise);
// tslint:enable

export default {
  component: Component,
  exact: true,
  path: ROUTE.ROOT
};
