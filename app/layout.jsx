//

import Link from "next/link";
import { Github } from "lucide-react";
//
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
//
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
//
import {
  APP_BANK_DETAILS_MOCK,
  APP_CREDIT_CARD_MOCK,
  GITHUB_PLATFORM_LINK,
  GITHUB_PROFILE_LINK,
  GITHUB_REPOSITORY_LINK,
  NEXTJS_PLATFORM_LINK,
  UNDRAW_PLATFORM_LINK,
} from "./../globalLinks";
import "./global.css";

// ----------------------------------------------

const components = [
  {
    title: "Credit Card Mockup",
    href: APP_CREDIT_CARD_MOCK,
    description:
      "Create Credit Card Mocksups With Minimal and Required Details",
  },
  {
    title: "Bank Detail Mockup",
    href: APP_BANK_DETAILS_MOCK,
    description: "Create Bank Details Mockups",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="flex justify-between p-4 border-b">
          <Link className="" href="/">
            <p className="font-semibold text-lg">Mock Generator</p>
          </Link>

          <div className="flex md:gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>AVAILABLE TOOLS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-3 p-3">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild variant="ghost">
              <Link href="/">PRIVACY</Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href={GITHUB_REPOSITORY_LINK} target="_blank">
                <Github size={20} />
              </Link>
            </Button>
          </div>
        </nav>

        {children}

        <div className="sticky top-[100vh] h-36 border-t p-4">
          <div className="p-6 md:p-3 justify-between flex md:flex-row flex-col">
            <div>
              <p className="text-sm">
                <span>Powered by&nbsp;</span>
                <a href={GITHUB_PLATFORM_LINK} target="_blank">
                  <u>GitHub</u>
                </a>
                &nbsp;and&nbsp;
                <a href={NEXTJS_PLATFORM_LINK} target="_blank">
                  <u>Next.Js</u>
                </a>
              </p>

              <p className="text-sm pt-2">
                <span>Developed, Crafted with 💜 by &nbsp;</span>
                <Link href={GITHUB_PROFILE_LINK} target="_blank">
                  <u>@deep-vadukiya</u>
                </Link>
              </p>
            </div>

            <div className="pt-2 md:pt-0">
              <p className="text-sm">
                <span>Images by&nbsp;</span>
                <a href={UNDRAW_PLATFORM_LINK} target="_blank">
                  <u>Undraw.</u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
