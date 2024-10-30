//

import Link from "next/link";

// ----------------------------------------------

export default function NotFound() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="space-y-4">
        <p className="text-center text-lg font-bold">
          Oops, The link is broken
        </p>
        <Link href="/">
          <p className="text-center underline">{"< Go To Home"}</p>
        </Link>
      </div>
    </div>
  );
}
