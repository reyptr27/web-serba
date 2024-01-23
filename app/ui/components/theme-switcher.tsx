"use client";

import { BiSun, BiMoon, BiPalette } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <BiPalette className="text-xl cursor-pointer text-gray-700 dark:text-gray-50" />;

  if (resolvedTheme === "light") {
    return <BiMoon className="text-2xl cursor-pointer text-gray-700 dark:text-gray-50" onClick={() => setTheme("dark")} />;
  }

  if (resolvedTheme === "dark") {
    return <BiSun className="text-2xl cursor-pointer text-gray-700 dark:text-gray-50" onClick={() => setTheme("light")} />;
  }
}
