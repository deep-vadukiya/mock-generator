//

import React from "react";
import { useNavigate } from "react-router-dom";
//
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
//
import { APP_PATH } from "../../routes/paths";

// ------------------------------------------------

// Note: Credit card size: 1011*638 px

export default function CardMock() {
  const navigate = useNavigate();

  const bankName = "HDFC Bank";
  const bankPartnerName = "TATA NEUCARD PLUS";
  const cardType = "Rupay";
  const cardTypeCategory = "PLATINUM";
  const backgroundColor = "#8CC0DE";

  return (
    <div>
      <Button onClick={() => navigate(APP_PATH.landingPath)}>Back</Button>

      <p>Generate Card Mock</p>

      <div className="h-36" />

      <div
        className="container mx-auto p-10 rounded-xl shadow-xl"
        style={{ backgroundColor }}
      >
        <div style={{ maxWidth: 1011, maxHeight: 638 }}>
          <div className="w-full h-full">
            <div className="w-full flex justify-between">
              <div className="space-y-2">
                <p className="font-sans text-3xl font-bold text-white">
                  {bankName}
                </p>
                <p className="font-sans text-2xl text-white opacity-70">
                  {bankPartnerName}
                </p>
              </div>

              <div className="space-y-2 justify-end">
                <p className="font-sans text-3xl font-semibold text-white text-end">
                  {cardType}
                </p>
                <p className="font-sans text-xl font-thin text-white">
                  {cardTypeCategory}
                </p>
              </div>
            </div>

            <div></div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
