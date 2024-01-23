import Logo from "@/app/ui/components/logo";
import Navlink from "@/app/ui/components/nav-link";
import ThemeSwitcher from "@/app/ui/components/theme-switcher";
import SearchForm from "./components/search-form";

export default function Header() {
  return (
    <>
      <header className="z-20 sticky top-0 bg-gray-50 dark:bg-[#091a28] border-b-[1px] border-solid border-[#e2ecec] dark:border-[#0d2538] transition-colors duration-300">
        <div className="p-[2px] bg-gradient-to-r from-green-600 via-[#8ed6fb] to-pink-600"></div>
        <nav className="container mx-auto p-4">
          <div className="flex justify-between gap-x-3 items-center">
            <Logo />
            <Navlink />
            <SearchForm />
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
    </>
  );
}
