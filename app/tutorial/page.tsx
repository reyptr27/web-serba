import Carousel from "@/app/ui/components/carousel";
import ScrollToTop from "@/app/ui/components/scroll-to-top";
import Posts from "@/app/ui/components/posts";
import { Suspense } from "react";
import Loading from "@/app/ui/components/loading";

export const revalidate = 86400;

export default function Tutorial() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#091a28] transition-colors duration-300">
        <main className="container w-full mx-auto">
          {/* Use a 12-column layout */}
          <div className="grid grid-cols-12 bg-gray-50 dark:bg-[#091a28] transition-colors duration-300">
            {/* Main Content - uses 9-colspan*/}
            <div className="col-span-12 md:col-span-9">
              {/* Carousel */}
              <div id="carousel" className="px-3 lg:px-7 pt-5 pb-6">
                <Carousel />
              </div>
              <div id="post" className="z-10 sticky top-14 md:top-[69px] px-2 md:px-3 lg:px-7 py-1 bg-gray-50 dark:bg-[#091a28] transition duration-300">
                <div className="flex justify-between items-center border-b border-[#e2ecec] dark:border-[#0d2538] transition duration-300 p-2 md:p-0">
                  <div id="filter-post" className="flex items-center space-x-4 font-semibold text-sm md:text-lg">
                    <button className="text-gray-700 dark:text-gray-50 py-4">Latest</button>
                    <button className="text-green-700 dark:text-green-600 py-4 border-b border-green-700 dark:border-green-600">Oldest</button>
                  </div>
                </div>
              </div>
              {/* Content */}
              <Suspense fallback={<Loading />}>
                <div className="px-7 md:pb-20">
                  <Posts postType={"tutorial"} />
                </div>
              </Suspense>
              {/* Scroll to top button  */}
              <ScrollToTop />
            </div>
            {/* Sidebar - uses 3 col span */}
            <aside className="invisible md:visible md:col-span-3 px-3 md:px-6 p-2 border-t md:border-t-0 md:border-l border-[#e2ecec] dark:border-[#0d2538] transition-colors duration-300">
              <div className="sticky top-28 h-[100px]">{/* <CategoryTag /> */}</div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
