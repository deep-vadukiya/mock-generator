//

import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Landing Page</p>

      <div>
        <button onClick={() => navigate(APP_PATH.cardMockRoute)}>
          Generate Card Mock
        </button>
      </div>

      <div>
        <button onClick={() => navigate(APP_PATH.bankDetailsMockRoute)}>
          Generate Bank Details Mock
        </button>
      </div>
    </div>
  );
}
