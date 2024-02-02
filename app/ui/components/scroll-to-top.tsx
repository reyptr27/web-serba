"use client";

import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollThreshold = 300;

    setIsVisible(scrollTop > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="z-30 fixed cursor-pointer bottom-[80px] lg:bottom-[80px] right-[20px] p-2 bg-green-700/50 md:bg-green-700 rounded-full items-center">
          <BiArrowToTop className="text-3xl md:text-4xl lg:text-5xl text-white" />
        </button>
      )}
    </>
  );
}
