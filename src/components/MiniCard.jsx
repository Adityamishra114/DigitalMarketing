import React from "react";
import DM from "../assets/1dm.png"
const cardData = [
  { id: 1, image: DM, text: "Artificial Intelligence" },
  { id: 2, image: DM, text: "Web Development" },
  { id: 3, image: DM, text: "UI/UX Design" },
  { id: 4, image: DM, text: "Digital Marketing" },
  { id: 5, image: DM, text: "Data Science" },
  { id: 6, image: DM, text: "Cyber Security" },
  { id: 7, image: DM, text: "App Development" },
  { id: 8, image: DM, text: "Cloud Computing" },
  { id: 9, image: DM, text: "Blockchain" },
  { id: 10, image: DM, text: "Robotics" },
  { id: 11, image: DM, text: "HR & Soft Skills" },
  { id: 12, image: DM, text: "Business Strategy" },
];

const MiniCard = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-[22px] sm:text-[24px] lg:text-[24px] font-bold text-center text-[#333] mb-4">
        <span className="text-[#0e3477] hover:opacity-60">Digital Marketing Course</span> For Transforming Your Career
      </h2>
      <p className="text-center text-sm sm:text-[13px] text-gray-600 mb-10 max-w-4xl mx-auto">
        Do you lack the skills you need to move ahead? Now, you can become a digital marketing specialist without leaving your job. Boost your career with the Delhi Institute of Digital Marketing. A place to learn digital marketing from Executive Level to Manager Level in all practical ways. The high demand for a digital marketing course is best suited for working professionals, job seekers, freelancers, students, and entrepreneurs.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="text-black flex items-center gap-3 p-3 rounded"
  style={{ boxShadow: "2px 0 35px 0 rgba(68, 88, 144, 0.12)" }}
          >
            <img
              src={card.image}
              alt={card.text}
              className="w-8 h-8 object-contain"
            />
            <p className="text-xs font-nunito font-medium transition-transform duration-300 hover:translate-x-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCard;
