//

import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function BankMock() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(APP_PATH.landingPath)}>Back</button>

      <p>Generate Bank Mock</p>
    </div>
  );
}
