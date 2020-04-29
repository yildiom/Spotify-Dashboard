import React from "react";
import { ROUTE } from "../routes.constants";

const componentPromise = import(
  "./Profile" /* webpackChunkName: "home", webpackPreload: true */
);
const Component = React.lazy(() => componentPromise);
// tslint:enable

export default {
  component: Component,
  exact: true,
  path: ROUTE.PROFILE
};
