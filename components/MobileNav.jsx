"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "./navLinks";

function MobileNav() {
  const pathName = usePathname();
  const currentPageStyles = "text-accent border-b-2 border-accent";

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Andrew <span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {navLinks.map(({ id, name, path }) => (
              <Link
                key={id}
                href={path}
                className={`${
                  path === pathName ? currentPageStyles : ""
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
}

export default MobileNav;
