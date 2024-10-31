//

import Link from "next/link";
import { Github } from "lucide-react";
import { GITHUB_REPOSITORY_LINK } from "./../globalLinks";
import "./global.css";
import { Button } from "@/components/ui/button";

// ----------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between p-4 border-b">
          <Link className="" href="/">
            <p className="font-semibold text-lg">Mock Generator</p>
          </Link>

          <div className="flex gap-4 items-center">
            <Button asChild variant="ghost">
              <Link href="/">ABOUT US</Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href="/">DOCUMENTATION</Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href={GITHUB_REPOSITORY_LINK} target="_blank">
                <Github size={20} />
              </Link>
            </Button>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
