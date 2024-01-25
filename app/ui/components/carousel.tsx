"use client";

import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { BiArrowToLeft, BiArrowToRight, BiCircle } from "react-icons/bi";

// Max 7 content
const slides = [
  {
    url: "/carousel/carousel-1.avif",
  },
  {
    url: "/carousel/carousel-2.avif",
  },
  {
    url: "/carousel/carousel-3.avif",
  },
  {
    url: "/carousel/carousel-4.avif",
  },
  {
    url: "/carousel/carousel-5.avif",
  },
  {
    url: "/carousel/carousel-5.avif",
  },
  {
    url: "/carousel/carousel-4.avif",
  },
  {
    url: "/carousel/carousel-1.avif",
  },
];

export default function Carousel() {
  const slidesToShow = slides.slice(0, 7);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = slidesToShow.length;

  const minIndex = 0;
  const maxIndex = totalSlides - 1;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(Math.max(minIndex, Math.min(maxIndex, slideIndex)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const deltaX = e.touches[0].clientX - touchStartX.current;

      if (deltaX > 50) {
        prevSlide();
        touchStartX.current = null; // Reset touchStartX after swipe
      } else if (deltaX < -50) {
        nextSlide();
        touchStartX.current = null; // Reset touchStartX after swipe
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  useEffect(() => {
    // Auto slide every 5 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] m-auto pb-5 md:pb-5 py-0 md:py-10 px-0 md:px-4 relative group" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})`, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" }} className="w-full h-full rounded-2xl bg-center bg-cover duration-300"></div>
        {/* Left arrow */}
        <div className="block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 md:left-10 text-xs md:text-2xl rounded-full p-2 bg-green-700/50 text-white cursor-pointer">
          <BiArrowToLeft className="hidden md:block" onClick={prevSlide} size={30} />
          <BiArrowToLeft className="block md:hidden" onClick={prevSlide} size={15} />
        </div>
        {/* Right arrow */}
        <div className="block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 md:right-10 text-xs md:text-2xl rounded-full p-2 bg-green-700/50 text-white cursor-pointer">
          <BiArrowToRight className="hidden md:block" onClick={nextSlide} size={30} />
          <BiArrowToRight className="block md:hidden" onClick={nextSlide} size={15} />
        </div>

        <div className="flex justify-center gap-3 md:gap-7 py-5 transition duration-300">
          {slidesToShow.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={clsx("text-green-700 sm:text-xs md:text-lg xl:text-xl cursor-pointer transition duration-300", {
                "bg-green-700 rounded-full": slideIndex === currentIndex,
                "bg-gray-50 dark:bg-[#091a28] rounded-full opacity-40": slideIndex !== currentIndex,
              })}
            >
              <BiCircle />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
