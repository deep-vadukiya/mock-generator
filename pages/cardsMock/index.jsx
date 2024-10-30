//

import React from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { HardDriveDownload, House } from "lucide-react";
// radix components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// utility
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
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          onClick={() => navigate(APP_PATH.landingPath)}
        >
          <House size={16} />
        </Button>

        <p>Generate Card Mock</p>
      </div>

      <p className="font-semibold text-lg">Enter Card Details</p>

      <div className="grid lg:grid-cols-2">
        <div className="">
          <div className="flex flex-col gap-2 lg:w-3/4">
            <Input type="text" placeholder="Bank Name" />
            <Input type="text" placeholder="Partner Name" />
            <Input type="text" placeholder="Card Category" />
            <Input type="text" placeholder="Card Sub-Category" />

            <Input type="text" placeholder="Card Number" />
            <Input type="text" placeholder="Card Holder" />
            <Input type="date" placeholder="Card Expiry" />
            <Input type="text" placeholder="Card CVV" />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Card Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit_card">Credit Card</SelectItem>
                <SelectItem value="debit_card">Debit Card</SelectItem>
                <SelectItem value="prepaidt_card">Prepaid Card</SelectItem>
                <SelectItem value="charge_card">Charge Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
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
                        <p className="text-white font-extralight opacity-60">
                          CVV
                        </p>
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

          <div className="flex justify-center">
            <Button
              onClick={handleDownloadImage}
              variant="outline"
              className="gap-2"
            >
              <HardDriveDownload size={16} />
              download card
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
