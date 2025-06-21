import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logo from "../assets/logo.png";
import AboutBg from "../assets/Aboutbg.png";

const logos = [
  { name: "Random House", src: Logo },
  { name: "Daiwa", src: Logo },
  { name: "Gold Dust", src: Logo },
  { name: "LoopLoc", src: Logo },
  { name: "Circa", src: Logo },
  { name: "Broadway", src: Logo },
  { name: "MPA", src: Logo },
  { name: "Mountaire", src: Logo },
  { name: "Blue Owl", src: Logo },
  { name: "New Client", src: Logo },
];

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

const getVisibleCount = () => {
  if (window.innerWidth < 480) return 1;
  if (window.innerWidth < 768) return 2;
  if (window.innerWidth < 1024) return 3;
  return 4;
};

const OurClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rows = 2;
  const perPage = visibleCount * rows;
  const pagedLogos = chunkArray(logos, perPage);
  const totalPages = pagedLogos.length;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div
      className="py-16 bg-contain bg-center bg-repeat"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          OUR CLIENTS
        </h2>
        <p className="text-md md:text-xl text-gray-600 mt-2">
          From Boutique to Enterprise, We Drive Results
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="absolute left-0 top-[40%] z-10">
          <button
            onClick={prevSlide}
            className="bg-white text-[#0e3477] p-3 rounded-full shadow hover:bg-[#0e3477]/10 transition"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute right-0 top-[40%] z-10">
          <button
            onClick={nextSlide}
            className="bg-white text-[#0e3477] p-3 rounded-full shadow hover:bg-[#0e3477]/10 transition"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 transition-all duration-500">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-${visibleCount} gap-4`}>
              {pagedLogos[currentSlide]
                ?.slice(
                  rowIndex * visibleCount,
                  rowIndex * visibleCount + visibleCount
                )
                .map((logo, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-[120px] sm:h-[100px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-[60px] object-contain"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {pagedLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-[#0e3477]"
                  : "bg-[#0e3477]/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
