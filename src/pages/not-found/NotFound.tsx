import React, { memo } from "react";
import { Link } from "react-router-dom";

import { ROUTE } from "../../pages/routes.constants";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Oh no! We could not find that page :(</h1>
      <Link to={ROUTE.ROOT}>Go to {ROUTE.ROOT}</Link>
    </div>
  );
};

export default memo(NotFound);
