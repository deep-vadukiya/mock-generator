//

import React from "react";
import { House } from "lucide-react";
import Link from "next/link";
// components
import { buttonVariants } from "@/components/ui/button";

// ------------------------------------------------

export default function Page() {
  return (
    <div className="container mx-auto p-4 space-y-6 sm:pb-8">
      <div className="flex items-center gap-4">
        <Link className={buttonVariants({ variant: "secondary" })} href="/">
          <House size={16} />
        </Link>

        <p>Generate Bank Details</p>
      </div>

      <div style={{ height: 200 }}></div>

      <div style={{ padding: 100 }}>
        <p>bank mock goes here</p>
      </div>
    </div>
  );
}
