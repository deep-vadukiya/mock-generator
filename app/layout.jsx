//

import Link from "next/link";
import "./global.css";

// ----------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between p-4 border-b">
          <Link className="" href="/">
            <p className="font-semibold text-lg">Mock Generator</p>
          </Link>

          <div className="flex gap-4">
            <Link
              className="group text-gray-500 transition duration-300 hover:underline hover:text-gray-900"
              href="/"
            >
              ABOUT US
            </Link>

            <Link
              className="group text-gray-500 transition duration-300 hover:underline hover:text-gray-900"
              href="/"
            >
              DOCUMENTATION
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
