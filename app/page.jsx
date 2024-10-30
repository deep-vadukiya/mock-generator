//

import Link from "next/link";

// ------------------------------------------------

export default function Page() {
  return (
    <div className="container mx-auto mt-6 flex flex-col gap-4">
      <div>
        <p className="font-semibold text-2xl">
          Generate Financial Mockups at Free of Cost ...!
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <Link href="/credit-card-mock" className="underline">
          {"> 1. Generate Card Mock ..."}
        </Link>

        <Link href="/bank-details-mock" className="underline">
          {"> 2. Generate Bank Details Mock ..."}
        </Link>
      </div>
    </div>
  );
}
