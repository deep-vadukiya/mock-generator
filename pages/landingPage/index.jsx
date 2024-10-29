//

import React from "react";
import { Link } from "react-router-dom";
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <nav className="flex justify-between p-4 border-b">
        <p>
          <b>Mock Generator</b>
        </p>

        <div className="flex gap-4">
          <Link
            className="group text-gray-500 transition duration-300 hover:underline hover:text-gray-900"
            to="/"
          >
            ABOUT US
          </Link>

          <Link
            className="group text-gray-500 transition duration-300 hover:underline hover:text-gray-900"
            to="/"
          >
            DOCUMENTATION
          </Link>
        </div>
      </nav>

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
