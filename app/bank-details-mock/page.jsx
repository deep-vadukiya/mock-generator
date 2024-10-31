//

"use client";

import React, { useState } from "react";
import { House, CircleAlert } from "lucide-react";
import Link from "next/link";
// components
import { buttonVariants } from "@/components/ui/button";
import { User } from "lucide-react";

// ------------------------------------------------

const BANK_MOCK_DATA = {
  backgroundColor: "#FFFFFF",

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
          <div className="flex flex-col gap-2 lg:w-3/4">{/* === */}</div>

          <div
            className="-order-1 lg:order-1 overflow-x-auto block"
            style={{ overflow: "scroll" }}
          >
            <div className="md:p-8 p-4 flex justify-center" id="print">
              <div
                className="container p-5 rounded-3xl shadow-xl flex flex-col"
                style={{
                  backgroundColor: bankDetails.backgroundColor ?? "#FFFFFF",
                  width: 480,
                  height: 480,
                  minWidth: 460,
                }}
              >
                <div className="w-full flex justify-between items-center border-b p-2 pb-8 border-gray-100">
                  <div className="flex gap-4 justify-center items-center">
                    <div className="bg-slate-200 rounded-full p-2 h-10 w-10 flex justify-center items-center">
                      <User />
                    </div>

                    <div>
                      <p className="leading-5">Dimitry Vegas</p>
                      <p className="text-muted-foreground leading-5 text-sm">
                        useremail001@gmail.com
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-extrabold text-xl">HDFC Bank</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
