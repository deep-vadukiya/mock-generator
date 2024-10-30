//

import React from "react";
import { Link } from "react-router-dom";
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <div className="container mx-auto mt-4 flex flex-col gap-4">
        <Link to={APP_PATH.cardMockRoute} className="underline">
          {"> Generate Card Mock ..."}
        </Link>

        <Link to={APP_PATH.bankDetailsMockRoute} className="underline">
          {"> Generate Bank Details Mock ..."}
        </Link>
      </div>
    </>
  );
}
