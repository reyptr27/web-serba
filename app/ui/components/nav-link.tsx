"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Tutorial", href: "/tutorial" },
  { name: "Download", href: "/download" },
];

export default function Navlink() {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden lg:block text-gray-700 dark:text-gray-50">
        <ul className="flex justify-between gap-16 text-xl font-black">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx("flex justify-center flex-col items-center gap-1", {
                    "text-green-700 dark:text-green-600 hover:opacity-70": pathname === link.href,
                    "opacity-70 hover:text-green-700": pathname !== link.href,
                  })}
                >
                  <span className="text-base font-normal">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
