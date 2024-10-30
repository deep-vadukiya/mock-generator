//

import React from "react";
import { Link } from "react-router-dom";
import { APP_PATH } from "../routes/paths";

// ----------------------------------------------

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="space-y-4">
        <p className="text-center text-lg font-bold">
          Oops, The link is broken
        </p>
        <Link to={APP_PATH.landingPath}>
          <p className="text-center underline">{"< Go To Home"}</p>
        </Link>
      </div>
    </div>
  );
}
