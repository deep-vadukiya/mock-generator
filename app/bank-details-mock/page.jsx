//

"use client";

import { useState } from "react";
import { House, CircleAlert } from "lucide-react";
import Link from "next/link";
import html2canvas from "html2canvas";
// icons
import { User, HardDriveDownload } from "lucide-react";
// components
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ------------------------------------------------

const BANK_MOCK_DATA = {
  backgroundColor: "#FFFFFF",
  themeColor: "#111111",
  cardResolution: 2,

  userName: "John Doe",
  userEmail: "john.doe@gmail.com",
  bankLogo: "City Bank",

  bankProvider: "City Bank",
  accountHolderName: "Mr. John Doe",
  accountNumber: "1234 1234 1234 7890",
  ifscCode: "CITY001ABC",
  accountType: "Savings Account",
  branchName: "California",
  transactionFacilities: "IMPS, UPI, NEFT, RTGS",
};

const DETAILS_LIST = [
  { key: "bankProvider", value: "Bank Provider" },
  { key: "accountHolderName", value: "Account Holder Name" },
  { key: "accountNumber", value: "Account Number" },
  { key: "ifscCode", value: "IFSC Code" },
  { key: "accountType", value: "Account Type" },
  { key: "branchName", value: "Branch Name" },
  { key: "transactionFacilities", value: "Transaction Facilities" },
];

export default function Page() {
  const [bankDetails, setBankDetails] = useState(BANK_MOCK_DATA);

  const bankDetailsUpdate = (e) => {
    setBankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element, {
        scale:
          bankDetails.cardResolution >= 2 && bankDetails.cardResolution <= 6
            ? bankDetails.cardResolution
            : 2,
      }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = `mock-generator-bank-details-${new Intl.DateTimeFormat(
      "en-GB"
    ).format(new Date())}_resX${
      bankDetails.cardResolution >= 2 && bankDetails.cardResolution <= 6
        ? bankDetails.cardResolution
        : 2
    }.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4 space-y-6 sm:pb-8">
      <div className="flex items-center gap-4">
        <Link className={buttonVariants({ variant: "secondary" })} href="/">
          <House size={16} />
        </Link>

        <p>Generate Bank Details</p>
      </div>

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
            <div className="mb-4 flex flex-col gap-2">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="userName">User Name</Label>
                <Input
                  type="text"
                  value={bankDetails.userName}
                  onChange={bankDetailsUpdate}
                  name="userName"
                  placeholder="User Name"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="userEmail">User Email</Label>
                <Input
                  type="text"
                  value={bankDetails.userEmail}
                  onChange={bankDetailsUpdate}
                  name="userEmail"
                  placeholder="User Email"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="bankLogo">Bank Logo Text</Label>
                <Input
                  type="text"
                  value={bankDetails.bankLogo}
                  onChange={bankDetailsUpdate}
                  name="bankLogo"
                  placeholder="Bank Logo Text"
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-2">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="bankProvider">Bank Provider</Label>
                <Input
                  type="text"
                  value={bankDetails.bankProvider}
                  onChange={bankDetailsUpdate}
                  name="bankProvider"
                  placeholder="Bank Provider"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="accountHolderName">Account Holder Name</Label>
                <Input
                  type="text"
                  value={bankDetails.accountHolderName}
                  onChange={bankDetailsUpdate}
                  name="accountHolderName"
                  placeholder="Account Holder Name"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  type="text"
                  value={bankDetails.accountNumber}
                  onChange={bankDetailsUpdate}
                  name="accountHolderNumber"
                  placeholder="Account Number"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="ifscCode">IFSC Code</Label>
                <Input
                  type="text"
                  value={bankDetails.ifscCode}
                  onChange={bankDetailsUpdate}
                  name="ifscCode"
                  placeholder="IFSC Code"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="accountType">Account Type</Label>
                <Input
                  type="text"
                  value={bankDetails.accountType}
                  onChange={bankDetailsUpdate}
                  name="accountType"
                  placeholder="Account Type"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="branchName">Branch Name</Label>
                <Input
                  type="text"
                  value={bankDetails.branchName}
                  onChange={bankDetailsUpdate}
                  name="branchName"
                  placeholder="Branch Name"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="transactionFacilities">
                  Transaction Facilities
                </Label>
                <Input
                  type="text"
                  value={bankDetails.transactionFacilities}
                  onChange={bankDetailsUpdate}
                  name="transactionFacilities"
                  placeholder="Transaction Facilities"
                />
              </div>

              <div className="flex items-center space-x-2 p-2">
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Choose Theme Color
                </Label>
                <input
                  type="color"
                  value={bankDetails.themeColor}
                  onChange={bankDetailsUpdate}
                  name="themeColor"
                  placeholder="Theme Color"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="-order-1 lg:order-1 overflow-x-auto block"
          style={{ overflow: "scroll" }}
        >
          <div className="md:p-8 p-4 flex justify-center" id="print">
            <div
              className="container p-5 rounded-3xl shadow-xl flex flex-col border border-gray-100"
              style={{
                backgroundColor: bankDetails.backgroundColor ?? "#FFFFFF",
                width: 480,
                minHeight: 480,
                minWidth: 460,
              }}
            >
              <div className="w-full flex justify-between items-center border-b p-2 pb-8 border-gray-100">
                <div className="flex gap-4 justify-center items-center">
                  <div
                    className="bg-slate-200 rounded-full p-2 h-10 w-10 flex justify-center items-center"
                    style={{ borderColor: bankDetails.themeColor || "#111111" }}
                  >
                    <User color={bankDetails.themeColor || "#111111"} />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-base">{bankDetails.userName}</p>
                    <p className="text-muted-foreground text-sm">
                      {bankDetails.userEmail}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    className="font-extrabold text-xl"
                    style={{
                      color: bankDetails.themeColor || "#111111",
                    }}
                  >
                    {bankDetails.bankLogo}
                  </p>
                </div>
              </div>

              {DETAILS_LIST.map((el) => {
                return (
                  <div
                    key={el.key}
                    className="w-full flex justify-between items-center py-3 px-2 border-gray-100 [&:not(:last-child)]:border-b"
                  >
                    <p className="text-base">{el.value}</p>
                    <p className="text-base text-muted-foreground">
                      {BANK_MOCK_DATA[el.key]}
                    </p>
                  </div>
                );
              })}
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
