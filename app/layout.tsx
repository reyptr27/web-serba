import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import Header from "@/app/ui/header";

export const metadata: Metadata = {
  title: "Web Serba",
  description: "Web serba ada !",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="Scroll-smooth">
      <body className={`${inter.className} antialiased dark:bg-slate-800`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
