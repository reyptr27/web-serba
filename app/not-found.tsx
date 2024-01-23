import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex items-center p-4 justify-center mt-[150px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-700 dark:text-gray-50">Could not find the requested resource</p>
          <Link href="/">
            <div className="text-blue-500 hover:underline cursor-pointer">Return Home</div>
          </Link>
        </div>
      </div>
    </>
  );
}
