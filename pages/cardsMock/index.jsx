//

import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function CardMock() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(APP_PATH.landingPath)}>Back</button>

      <p>Generate Card Mock</p>
    </div>
  );
}
