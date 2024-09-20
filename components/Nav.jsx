"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";

function Nav() {
  const pathName = usePathname();
  const currentPageStyle = `text-accent border-b-2 border-accent`;
  const navLinkStyles = `capitalize font-medium hover:text-accent transition-all`;

  return (
    <nav className="flex gap-8">
      {navLinks.map(({ id, path, name }) => (
        <Link
          key={id}
          href={path}
          className={`${
            pathName === path ? currentPageStyle : ""
          } ${navLinkStyles}`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
