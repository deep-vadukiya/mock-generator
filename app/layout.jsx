//

import Link from "next/link";
import { Github } from "lucide-react";
import { GITHUB_REPOSITORY_LINK } from "./../globalLinks";
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

          <div className="flex gap-6 items-center">
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

            <Link
              className="group text-gray-500 transition duration-300 hover:underline hover:text-gray-900"
              href={GITHUB_REPOSITORY_LINK}
            >
              <Github size={20} />
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
