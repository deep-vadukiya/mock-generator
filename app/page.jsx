//

import Link from "next/link";
// illustration
import { CollectionHero } from "../assets/illustrations/collectionHero";
import { Button } from "@/components/ui/button";
// paths
import { APP_AVAILABLE_TOOLS, APP_CREDIT_CARD_MOCK } from "globalLinks";

// ------------------------------------------------

export default function Page() {
  return (
    <div className="container mx-auto mt-6 flex flex-col gap-4">
      {/* hero section */}
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="flex flex-col justify-center px-8 gap-6">
          <p className="text-3xl">
            Transform Your Financial Records into Mockups Securely & Instantly.
          </p>
          <p className="text-lg text-muted-foreground">
            No storage, no hassle, just straightforward financial mockups.
          </p>

          <div className="flex gap-6">
            <Button variant="secondary" asChild>
              <Link href={APP_AVAILABLE_TOOLS}>Available Tools</Link>
            </Button>
            <Button>
              <Link href={APP_CREDIT_CARD_MOCK}>Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center -order-1 md:order-1 ">
          <CollectionHero width={340} height={300} />
        </div>
      </div>

      <div className="h-24" />
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
