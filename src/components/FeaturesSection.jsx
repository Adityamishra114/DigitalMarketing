import React from "react";
import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaLaptopCode,
  FaUserGraduate,
  FaProjectDiagram,
  FaCertificate,
  FaHandsHelping,
  FaUserTie,
} from "react-icons/fa";
import bgImage from "../assets/Banner2.avif";

const features = [
  { icon: <FaChalkboardTeacher size={40} />, label: "Expert Trainers" },
  { icon: <FaCalendarAlt size={40} />, label: "Flexible Batches" },
  { icon: <FaLaptopCode size={40} />, label: "Online Classes" },
  { icon: <FaUserGraduate size={40} />, label: "Doubt Classes" },
  { icon: <FaUserTie size={40} />, label: "Job Oriented Training" },
  { icon: <FaProjectDiagram size={40} />, label: "Live Project Work" },
  { icon: <FaCertificate size={40} />, label: "Verifiable Certificate" },
  { icon: <FaHandsHelping size={40} />, label: "100% Job Assistance" },
];

const FeaturesSection = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center bg-opacity-70 px-0 py-0 sm:px-4 sm:py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full backdrop-blur-sm py-10 px-4">
        <div className="max-w-screen-xl mx-auto text-white text-center">
          <h2 className="text-3xl font-bold mb-10">
            IFDA Features & Facilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-6 flex flex-col items-center transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <div className="text-lg font-semibold">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
