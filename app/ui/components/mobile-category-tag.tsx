"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Each } from "@/app/each";
import Link from "next/link";
import clsx from "clsx";

interface MobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const categories = [
  { name: "Sport", href: "/blog" },
  { name: "Automotive", href: "/" },
  { name: "Health", href: "/" },
  { name: "Fashion", href: "/" },
];

function CategoryNav({ open, setOpen }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={clsx(
          "absolute top-0 left-0 h-screen w-screen bg-gray-50 dark:bg-[#091a28] border-b-[1px] border-solid border-[#e2ecec] dark:border-[#0d2538] rounded-b-lg transform",
          {
            "-translate-y-0": open,
            "-translate-y-full": !open,
          },
          "transition-transform duration-300 ease-in-out filter"
        )}
      >
        <div className="flex flex-col justify-center items-center mt-28">
          <Each
            of={categories}
            render={(category) => (
              <Link
                key={category.name}
                href={category.href}
                className={clsx(
                  "text-2xl font-bold",
                  {
                    "text-green-700 dark:text-green-600 hover:opacity-70": pathname === category.href,
                    "text-gray-700 dark:text-gray-50 hover:text-green-700 opacity-70": pathname !== category.href,
                  },
                  "my-4"
                )}
              >
                {category.name}
              </Link>
            )}
          />

          {/* <div className="mt-16 p-4 bg-green-700/40 dark:bg-green-600/30 rounded-full"><ThemeSwitcher /></div> */}
        </div>
      </div>
    </>
  );
}

export default function MobileCategoryTag() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="block md:hidden">
        <CategoryNav open={open} setOpen={setOpen} />
        <div className="w-11/12 flex justify-end items-center">
          <div
            className="group z-50 relative w-6 h-4 cursor-pointer flex-col justify-between items-center flex"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span className={`h-0.5 w-full dark:bg-gray-50 bg-gray-700 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`h-0.5 w-full dark:bg-gray-50 bg-gray-700 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
            <span className={`h-0.5 w-full dark:bg-gray-50 bg-gray-700 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </div>
      </div>
    </>
  );
}
