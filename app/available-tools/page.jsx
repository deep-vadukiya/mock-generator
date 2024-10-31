//

import { APP_BANK_DETAILS_MOCK, APP_CREDIT_CARD_MOCK } from "globalLinks";
import Image from "next/image";
import Link from "next/link";

// ------------------------------------------------

const LIST = [
  {
    title: "Credit Card Mock",
    subtitle: "Create Credit Card Mocksups With Minimal and Required Details",
    href: APP_CREDIT_CARD_MOCK,
    image: "/images/credit_card_mock.png",
    alt: "Credit card mock demo",
  },
  {
    title: "Bank Details Mock",
    subtitle: "Create Bank Details Mocksups With Minimal and Required Details",
    href: APP_BANK_DETAILS_MOCK,
    image: "/images/bank_details_mock.png",
    alt: "Bank details mock demo",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto mt-6 flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-6">
        {LIST.map((el) => {
          return (
            <Link href={el.href} key={el.image}>
              <div className="shadow-lg p-4 rounded-xl flex flex-col gap-4 border hover:border-gray-300 border-white">
                <div className="">
                  <div
                    style={{ minHeight: 376 }}
                    className="flex justify-center items-center"
                  >
                    <Image
                      src={el.image}
                      width={1248}
                      height={648}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt={el.alt}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold">{el.title}</p>
                  <p className="text-muted-foreground">{el.subtitle}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
