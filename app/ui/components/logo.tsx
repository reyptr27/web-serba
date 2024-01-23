"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <h1 className="text-gray-700 dark:text-gray-50">Logo</h1>;
  }

  if (resolvedTheme === "light") {
    return (
      <>
        <Link href="/" className="cursor-pointer hidden md:block transition duration-300">
          <Image src="/logo-normal-light.svg" className="" width={0} height={0} priority={true} style={{ width: "130px", height: "auto" }} alt="logo normal light" />
        </Link>
        <Link href="/" className="cursor-pointer block md:hidden">
          <Image src="/logo-mobile.svg" className="" width={0} height={0} priority={true} style={{ width: "30px", height: "auto" }} alt="logo mobile light" />
        </Link>
      </>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <>
        <Link href="/" className="cursor-pointer hidden md:block transition duration-300">
          <Image src="/logo-normal-dark.svg" className="" width={0} height={0} priority={true} style={{ width: "130px", height: "auto" }} alt="logo normal dark" />
        </Link>
        <Link href="/" className="cursor-pointer block md:hidden">
          <Image src="/logo-mobile.svg" className="" width={0} height={0} priority={true} style={{ width: "30px", height: "auto" }} alt="logo mobile dark" />
        </Link>
      </>
    );
  }
}
