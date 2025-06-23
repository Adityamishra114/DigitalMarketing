import React, { useEffect, useState } from "react";
import AboutBg from "../assets/Aboutbg.png";
import { logos } from "../../data";

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

const OurClients = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  const logosPerSlide = isMobile ? 2 : 5; 
  const pagedLogos = chunkArray(logos, logosPerSlide);
  const totalPages = pagedLogos.length;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalPages);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [totalPages]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="py-16 bg-contain bg-[#0e3477]/60 bg-center bg-repeat"
      // style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          OUR CLIENTS
        </h2>
        <p className="text-md md:text-xl text-gray-600 mt-2">
          From Boutique to Enterprise, We Drive Results
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <div className={`grid gap-4 grid-cols-2 md:grid-cols-5 transition-all duration-500`}>
          {pagedLogos[currentSlide]?.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex items-center justify-center h-[100px] sm:h-[120px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-[50px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
