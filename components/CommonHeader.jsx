//

import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

// ----------------------------------------------

export default function CommonHeader() {
  return (
    <>
      <nav className="flex justify-between p-4 border-b">
        <Link className="" to="/">
          <b>Mock Generator</b>
        </Link>

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

      <Outlet />
    </>
  );
}
