"use client";

import { BiHome, BiBookHeart, BiNews, BiCloudDownload } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { Each } from "@/app/each";

const links = [
  { name: "Home", href: "/", icon: BiHome },
  { name: "Blog", href: "/blog", icon: BiNews },
  { name: "Tutorial", href: "/tutorial", icon: BiBookHeart },
  { name: "Download", href: "/download", icon: BiCloudDownload },
];

export default function MobileNavLink() {
  const pathname = usePathname();
  return (
    <>
      <div className="lg:hidden z-20 fixed bottom-0 py-3 px-5 rounded-t-xl flex flex-row w-full mx-auto bg-gray-50 dark:bg-[#091a28] border-t-[1px] border-solid border-[#e2ecec] dark:border-[#0d2538] transition-colors duration-300">
        <Each
          of={links}
          render={(link) => {
            const LinkIcon = link.icon;
            let isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

            // Menyesuaikan logika isActive berdasarkan jenis halaman
            if (link.href === "/blog" && pathname.startsWith("/blog")) {
              isActive = true; // Aktif jika di halaman blog utama atau di bawahnya
            } else if (link.href === "/tutorial" && pathname.startsWith("/tutorial")) {
              isActive = true; // Aktif jika di halaman tutorial utama atau di bawahnya
            } else if (link.href === "/blog-tags" && pathname.startsWith("/blog-tags")) {
              isActive = true; // Aktif jika di halaman blog-tags utama atau di bawahnya
            } else if (link.href === "/tutorial-tags" && pathname.startsWith("/tutorial-tags")) {
              isActive = true; // Aktif jika di halaman tutorial-tags utama atau di bawahnya
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className={clsx("flex justify-center items-center grow py-2 px-3 cursor-pointer transition-all duration-200 ease-out", {
                  "bg-green-700/60 dark:bg-green-600/40 rounded-full justify-start": isActive,
                  "bg-none": !isActive,
                })}
              >
                <LinkIcon
                  className={clsx("inline text-xl transition-colors duration-300", {
                    "text-green-700 dark:text-green-600": isActive,
                    "text-gray-700 dark:text-gray-50": !isActive,
                  })}
                />
                &nbsp;
                <span
                  className={clsx("text-md m-auto text-center font-semibold transition-all duration-300 ease-in", {
                    "inline-block text-gray-50 dark:text-gray-50": isActive,
                    hidden: !isActive,
                  })}
                >
                  {link.name}
                </span>
              </Link>
            );
          }}
        />
      </div>
    </>
  );
}
