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

      <div style={{ height: 200 }}></div>

      <div style={{ padding: 100 }}>
        <p>bank mock goes here</p>
      </div>
    </div>
  );
}
