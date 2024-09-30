//

import React from "react";
import { useNavigate } from "react-router-dom";
//
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
//
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

export default function CardMock() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(APP_PATH.landingPath)}>Back</Button>

      <p>Generate Card Mock</p>

      <div className="container border-2 mx-auto">
        <div className="border-radius:0.125rem p-2">
          <p>hello</p>

          <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">
              Hello, Tailwind!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
