"use client";

import { useState } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import { CircleAlert, HardDriveDownload, House } from "lucide-react";
// radix components
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
// utility
import CardChip from "../../assets/creditCard/CardChip";
import Nfc from "../../assets/creditCard/Nfc";

// ------------------------------------------------

// Note: Credit card size: 1011*638 px

const CARD_MOCK_DATA = {
  bankName: "Your Bank",
  bankPartnerName: "Your Bank Partner",

  cardCategory: "Rupay",
  cardSubCategory: "PLATINUM",
  backgroundColor: "#8CC0DE",

  cardType: "credit_card",

  cardNumber: "1234 1234 1234 1234",
  cardHolderName: "JOHN DOE",
  cardExpires: "2036-09",
  cardCVV: "123",

  isNFCEnabled: true,

  cardResolution: 2,
};

const CARD_TYPES = {
  credit_card: "Credit Card",
  debit_card: "Debit Card",
  prepaid_card: "Prepaid Card",
  charge_card: "Charge Card",
};

export default function Page() {
  const [cardDetails, setCardDetails] = useState(CARD_MOCK_DATA);

  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element, {
        scale:
          cardDetails.cardResolution >= 2 && cardDetails.cardResolution <= 6
            ? cardDetails.cardResolution
            : 2,
      }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = `mock-generator-credit-card-${new Intl.DateTimeFormat(
      "en-GB"
    ).format(new Date())}_resX${
      cardDetails.cardResolution >= 2 && cardDetails.cardResolution <= 6
        ? cardDetails.cardResolution
        : 2
    }.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cardDetailUpdate = (e, fieldName) => {
    if (fieldName === "cardType" || fieldName === "isNFCEnabled") {
      setCardDetails({
        ...cardDetails,
        [fieldName]: e,
      });
    } else {
      setCardDetails({
        ...cardDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const getFormattedDate = (typedDate) => {
    const date = new Date(typedDate);
    const formatted =
      [date.getMonth() + 1].toString().padStart(2, "0") +
      "/" +
      date.getFullYear().toString().substring(2);
    return formatted;
  };

  return (
    <div className="container mx-auto p-4 space-y-6 sm:pb-8">
      <div className="flex items-center gap-4">
        <Link className={buttonVariants({ variant: "secondary" })} href="/">
          <House size={16} />
        </Link>

        <p>Generate Card Mock</p>
      </div>

      <p className="font-semibold text-lg">Enter Card Details</p>

      <div className="sm:hidden block p-3 bg-red-100 border rounded-md border-red-200">
        <div className="flex gap-3 items-center">
          <CircleAlert size={14} className="text-red-600" />
          <p className="text-red-600">
            Note: UI will not render as expected in small screens. However you
            can still try ... 🤞🏻
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="">
          <div className="flex flex-col gap-2 lg:w-3/4">
            <Input
              type="text"
              value={cardDetails.bankName}
              onChange={cardDetailUpdate}
              name="bankName"
              placeholder="Bank Name"
            />
            <Input
              type="text"
              value={cardDetails.bankPartnerName}
              onChange={cardDetailUpdate}
              name="bankPartnerName"
              placeholder="Partner Name"
            />
            <Input
              type="text"
              value={cardDetails.cardCategory}
              onChange={cardDetailUpdate}
              name="cardCategory"
              placeholder="Card Category"
            />
            <Input
              type="text"
              value={cardDetails.cardSubCategory}
              onChange={cardDetailUpdate}
              name="cardSubCategory"
              placeholder="Card Sub-Category"
            />

            <Input
              type="text"
              value={cardDetails.cardNumber}
              onChange={cardDetailUpdate}
              name="cardNumber"
              placeholder="Card Number"
            />
            <Input
              type="text"
              value={cardDetails.cardHolderName}
              onChange={cardDetailUpdate}
              name="cardHolderName"
              placeholder="Card Holder"
            />
            <Input
              type="month"
              value={cardDetails.cardExpires}
              onChange={cardDetailUpdate}
              name="cardExpires"
              placeholder="Card Expiry"
            />
            <Input
              type="text"
              value={cardDetails.cardCVV}
              onChange={cardDetailUpdate}
              name="cardCVV"
              placeholder="Card CVV"
            />

            <Select
              value={cardDetails.cardType}
              onValueChange={(val) => cardDetailUpdate(val, "cardType")}
              name="cardType"
            >
              <SelectTrigger>
                <SelectValue placeholder="Card Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit_card">Credit Card</SelectItem>
                <SelectItem value="debit_card">Debit Card</SelectItem>
                <SelectItem value="prepaid_card">Prepaid Card</SelectItem>
                <SelectItem value="charge_card">Charge Card</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2 p-2">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Is NFC Enabled ...?
              </Label>
              <Switch
                name="isNFCEnabled"
                checked={cardDetails.isNFCEnabled}
                onCheckedChange={(e) => cardDetailUpdate(e, "isNFCEnabled")}
              />
            </div>

            <div className="flex items-center space-x-2 p-2">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Choose Background Color
              </Label>
              <input
                type="color"
                value={cardDetails.backgroundColor}
                onChange={cardDetailUpdate}
                name="backgroundColor"
                placeholder="Background color"
              />
            </div>

            <Input
              type="number"
              min={2}
              max={6}
              value={cardDetails.cardResolution}
              onChange={cardDetailUpdate}
              name="cardResolution"
              placeholder="Card Download Resolution Scale"
            />
          </div>
        </div>

        <div
          className="-order-1 lg:order-1 overflow-x-auto block"
          style={{ overflow: "scroll" }}
        >
          <div className="md:p-8 p-4 flex justify-center" id="print">
            <div
              className="container p-5 rounded-3xl shadow-xl flex flex-col justify-between"
              style={{
                backgroundColor: cardDetails.backgroundColor ?? "#8CC0DE",
                width: 440,
                height: 260,
                minWidth: 440,
              }}
            >
              <div className="w-full flex justify-between">
                <div className="">
                  <p className="text-xl font-semibold text-white">
                    {cardDetails.bankName}
                  </p>
                  <p className="text-white opacity-70">
                    {cardDetails.bankPartnerName}
                  </p>
                </div>

                <div className="justify-end">
                  <p className="text-xl font-semibold text-white text-end">
                    {cardDetails.cardCategory}
                  </p>
                  <p className="font-thin text-white">
                    {cardDetails.cardSubCategory}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <CardChip height={32} width={32} />
                {cardDetails.isNFCEnabled && <Nfc height={32} width={32} />}
              </div>

              <div className="flex flex-row">
                <div className="basis-8/12">
                  <div className="w-full flex flex-col justify-between">
                    <p className="text-white font-extralight text-2xl tracking-widest pb-2">
                      {cardDetails.cardNumber}
                    </p>

                    <div className="flex justify-between">
                      <div className="">
                        <p className="text-white font-extralight opacity-60 max-w-fit">
                          Card Holder
                        </p>
                        <p className="text-white max-w-fit">
                          {cardDetails.cardHolderName}
                        </p>
                      </div>

                      <div className="">
                        <p className="text-white font-extralight opacity-60">
                          Expires
                        </p>
                        <p className="text-white">
                          {getFormattedDate(cardDetails.cardExpires)}
                        </p>
                      </div>

                      <div className="">
                        <p className="text-white font-extralight opacity-60">
                          CVV
                        </p>
                        <p className="text-white">{cardDetails.cardCVV}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="basis-4/12">
                  <div className="h-full content-end">
                    <p className="text-end font-light text-white opacity-70 text-sm">
                      {CARD_TYPES[cardDetails.cardType] ?? ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-3">
            <Button
              onClick={handleDownloadImage}
              variant="outline"
              className="gap-2"
            >
              <HardDriveDownload size={16} />
              Download Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
