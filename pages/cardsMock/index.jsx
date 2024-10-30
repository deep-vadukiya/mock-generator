//

import React from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
//
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
//
import { APP_PATH } from "../../routes/paths";
import CardChip from "../../assets/creditCard/cardChip";
import Nfc from "../../assets/creditCard/Nfc";

// ------------------------------------------------

// Note: Credit card size: 1011*638 px

export default function CardMock() {
  const navigate = useNavigate();

  const bankName = "HDFC Bank";
  const bankPartnerName = "TATA NEUCARD PLUS";
  const cardCategory = "Rupay";
  const cardTypeCategory = "PLATINUM";
  const backgroundColor = "#8CC0DE";
  const cardType = "CREDIT CARD";
  const cardNumber = "6529 2500 0082 1348";
  const cardHolderName = "DEEP VADUKIYA";
  const cardExpires = "04/28";
  const cardCVV = "04/28";

  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Button onClick={() => navigate(APP_PATH.landingPath)}>Back</Button>

      <p>Generate Card Mock</p>

      <div className="md:p-8 overflow-x-auto" id="print">
        <div
          className="container mx-auto p-5 rounded-3xl shadow-xl flex flex-col justify-between"
          style={{ backgroundColor, maxWidth: 440, height: 260 }}
        >
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-xl font-semibold text-white">{bankName}</p>
              <p className="text-white opacity-70">{bankPartnerName}</p>
            </div>

            <div className="justify-end">
              <p className="text-xl font-semibold text-white text-end">
                {cardCategory}
              </p>
              <p className="font-thin text-white">{cardTypeCategory}</p>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <CardChip height={32} width={32} />
            <Nfc height={32} width={32} />
          </div>

          <div className="flex flex-row">
            <div className="basis-8/12">
              <div className="w-full flex flex-col justify-between">
                <p className="text-white font-extralight text-2xl tracking-widest pb-2">
                  {cardNumber}
                </p>

                <div className="flex justify-between">
                  <div className="">
                    <p className="text-white font-extralight opacity-60 max-w-fit">
                      Card Holder
                    </p>
                    <p className="text-white max-w-fit">{cardHolderName}</p>
                  </div>

                  <div className="">
                    <p className="text-white font-extralight opacity-60">
                      Expires
                    </p>
                    <p className="text-white">{cardExpires}</p>
                  </div>

                  <div className="">
                    <p className="text-white font-extralight opacity-60">CVV</p>
                    <p className="text-white">{cardCVV}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-4/12">
              <div className="h-full content-end">
                <p className="text-end font-light text-white opacity-70 text-sm">
                  {cardType}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleDownloadImage}>download card</button>
    </div>
  );
}
