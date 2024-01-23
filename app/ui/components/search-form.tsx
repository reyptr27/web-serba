import { BiSearchAlt } from "react-icons/bi";

export default function SearchForm() {
  return (
    <>
      <div className="relative inline-block">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Search ..."
          className="transition duration-300 rounded-[5px] w-full md:w-64 lg:w-64 xl:w-64 border-0 outline-none focus:ring-2 focus:ring-green-700 text-start px-3 py-1 bg-gray-100 dark:bg-slate-700"
          alt="Search form"
        />
        <BiSearchAlt className="absolute right-2 top-2 opacity-50 text-gray-700 dark:text-gray-50 " />
      </div>
    </>
  );
}
