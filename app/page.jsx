//

import Link from "next/link";
import { FileCheck2, ShieldCheck, Handshake } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
// illustration
import { CollectionHero } from "../assets/illustrations/CollectionHero";
// paths
import { APP_AVAILABLE_TOOLS, APP_CREDIT_CARD_MOCK } from "../globalLinks";

// ------------------------------------------------

const FEATURES = [
  {
    title: "Effortless Mockups",
    description:
      "Quickly turn your financial records into professional mockups with ease and precision.",
    icon: <FileCheck2 color="#00796B" size={28} />,
    color: "#00796B",
    secondaryColor: "#E0F7FA",
  },
  {
    title: "Privacy Guaranteed",
    description:
      "Your data stays private. We don’t store any essential information, ensuring complete confidentiality.",
    icon: <ShieldCheck color="#FB8C00" size={28} />,
    color: "#FB8C00",
    secondaryColor: "#FFF3E0",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Simple, intuitive design for smooth navigation. No technical expertise required to get started.",
    icon: <Handshake color="#3F51B5" size={28} />,
    color: "#3F51B5",
    secondaryColor: "#E8EAF6",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col gap-24">
      {/* hero section */}
      <div className="grid md:grid-cols-2 gap-8">
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
          <div className="flex flex-col">
            <CollectionHero height={300} />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-8">
        {FEATURES.map((fea) => {
          return (
            <div
              key={fea.color}
              className="drop-shadow-xl rounded-xl p-6 py-8 flex flex-col gap-6 text-center"
              style={{ backgroundColor: fea.secondaryColor }}
            >
              <div className="flex justify-center">{fea.icon}</div>

              <div className="space-y-2">
                <p className="text-lg font-semibold">{fea.title}</p>
                <p className="text-muted-foreground">{fea.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
