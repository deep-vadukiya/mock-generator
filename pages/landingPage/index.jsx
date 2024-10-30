//

import React from "react";
import { Link } from "react-router-dom";
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function LandingPage() {
  return (
    <div className="container mx-auto mt-6 flex flex-col gap-4">
      <div>
        <p className="font-semibold text-2xl">
          Generate Financial Mockups at Free of Cost ...!
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <Link to={APP_PATH.cardMockRoute} className="underline">
          {"> 1. Generate Card Mock ..."}
        </Link>

        <Link to={APP_PATH.bankDetailsMockRoute} className="underline">
          {"> 2. Generate Bank Details Mock ..."}
        </Link>
      </div>
    </div>
  );
}
