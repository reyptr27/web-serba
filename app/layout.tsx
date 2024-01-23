import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { Providers } from "@/app/providers";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import ScrollToTop from "@/app/ui/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Web Serba",
  description: "Web serba ada !",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-gray-50 dark:bg-[#091a28] text-gray-700 dark:text-gray-50 transition-colors duration-300`}>
        <Providers>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
