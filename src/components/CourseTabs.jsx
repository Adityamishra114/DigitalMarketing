import React, { useState } from "react";
import Banner1 from "../assets/mdm.webp";
import Banner2 from "../assets/pdm.webp";
import Banner3 from "../assets/adm.webp";
import { MdDownload } from "react-icons/md";

const courses = [
  {
    title: "Multimedia & Design",
    description: "Learn to become graphic designer, video creator, and animation artist.",
    category: "Digital Marketing",
    type: "Student",
    image: Banner1,
    brochure: "/data/mdm-brochure.pdf",
  },
  {
    title: "Fullstack Web Developer",
    description: "Learn to become a full stack website developer & make your career bright.",
    category: "Website",
    type: "Student",
    image: Banner2,
    brochure: "/data/fullstack-brochure.pdf",
  },
  {
    title: "ADCA",
    description: "You’ll be eligible in accounting, graphic design, and web designing.",
    category: "Popular",
    type: "Student",
    image: Banner3,
    brochure: "/data/adca-brochure.pdf",
  },
  {
    title: "Corporate Upskilling",
    description: "Advanced tech training tailored for teams.",
    category: "Corporate Training",
    type: "Business",
    image: Banner1,
    brochure: "/data/corporate-upskill.pdf",
  },
  {
    title: "Team Leadership Workshop",
    description: "Boost leadership skills and collaboration across departments.",
    category: "Workshops",
    type: "Business",
    image: Banner2,
    brochure: "/data/leadership-workshop.pdf",
  },
  {
    title: "Technical Team Upskilling",
    description: "Improve your team’s productivity and performance.",
    category: "Team Upskilling",
    type: "Business",
    image: Banner3,
    brochure: "/data/tech-upskill.pdf",
  },
];

const CourseTabs = () => {
  const [userType, setUserType] = useState("Student");

  const filteredCourses = courses
    .filter((course) => course.type === userType)
    .slice(0, 3);

  const bulletPoints = [
    "In Class | Online",
    "500+ Hrs Training",
    "02 Months Internship",
    "Recording (LMS) | Live Session",
    "Live Projects",
    "E-Notes & E-Books",
    "30+ Certifications",
  ];

  return (
    <div className="py-10 px-4">
     <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-center mb-4 text-[#333] hover:text-[#0e3477] transition duration-300 transform hover:-translate-y-1">
    Choose the Course that <span className="text-[#0e3477]">Interests you the Most</span>
  </h2>
  <p className="text-center text-gray-600 text-sm sm:text-[13px] mb-8 max-w-3xl mx-auto px-2 sm:px-4 lg:px-0">
    Choose the right path tailored to your learning journey or team needs. Whether you're a student or a business, our programs are crafted to boost your growth with practical skills.
  </p>
</div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 gap-4">
          {["Student", "Business"].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-5 py-2 text-sm font-semibold border transition ${
                userType === type
                  ? "bg-[#0e3477] text-white"
                  : "bg-white text-[#0e3477] border-[#0e3477]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-2">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded overflow-hidden border transform transition duration-300 hover:-translate-y-2.5 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-center text-[#0e3477] mb-2">
                    {course.title}
                  </h3>
                  <hr className="border-t border-gray-300 mb-3" />
                  <ul className="text-sm text-gray-600 mb-4 space-y-1 list-disc list-inside">
                    {bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

  <div className="flex gap-3">
  <button className="w-1/4 bg-[#0e3477] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-[#092653] transition">
    View
  </button>
  <a
    href={course.brochure}
    download
    className="w-3/4 flex items-center justify-center bg-gray-100 text-[#0e3477] px-4 py-2 text-sm font-semibold rounded border border-[#0e3477] hover:bg-[#0e3477] hover:text-white transition"
  >
    <MdDownload className="mr-2 text-lg" />
    Download Brochure
  </a>
</div>

                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No courses found.</p>
          )}
        </div>
      </div>
      <div className="mt-10 text-center">
  <a
    href="/enroll"
    className="inline-block bg-[#0e3477] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#092653] transition"
  >
    Enroll Now
  </a>
</div>
    </div>
  );
};

export default CourseTabs;
