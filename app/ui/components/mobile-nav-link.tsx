"use client";

import { BiHome, BiBookHeart, BiNews, BiCloudDownload } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: BiHome },
  { name: "Blog", href: "/blog", icon: BiNews },
  { name: "Tutorial", href: "/tutorial", icon: BiBookHeart },
  { name: "Download", href: "/download", icon: BiCloudDownload },
];

export default function Mobilenavlink() {
  const pathname = usePathname();

  return (
    <>
      <div>
        <p>mobile nav</p>
      </div>
    </>
  );
}
