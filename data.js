// TestimonialSlider data
import Banner from "./src/assets/adm.webp";
import Banner1 from "./src/assets/mdm.webp";
import Banner2 from "./src/assets/pdm.webp";

// MiniCard data
import DM from "./src/assets/1dm.png";

// BlogSection data
import blog1 from "./src/assets/web.jpg";
import blog2 from "./src/assets/design.jpg";
import blog3 from "./src/assets/digital.jpg";

// OurClients data
import Logo from "./src/assets/logo.png";

// HeroSection data
import BannerHS from "./src/assets/Aboutbgacc.webp";

// AboutHeroSection data
import sampleImage from "./src/assets/Aboutbgacc.webp";

// CourseTabs data
import BannerC1 from "./src/assets/mdm.webp";
import BannerC2 from "./src/assets/pdm.webp";
import BannerC3 from "./src/assets/adm.webp";

// ImpactSection data
export const testimonials = [
  {
    image: Banner,
    quoteTitle: "Lounge Lizard genuinely cares about their customers.",
    quoteText:
      "Lounge Lizard was able to take an abstract idea for an app and bring it to reality, while staying true to the original vision.",
    author: "PRESIDENT",
    company: "STUDR",
    rating: 5,
  },
  {
    image: Banner1,
    quoteTitle: "Exceptional creativity and development support.",
    quoteText:
      "The app’s design and usability were outstanding. The agency distinguished themselves with responsive communication.",
    author: "CEO",
    company: "CREATEX",
    rating: 5,
  },
  {
    image: Banner2,
    quoteTitle: "Fantastic end-to-end experience with Lounge Lizard.",
    quoteText:
      "They delivered high-quality designs with strong attention to detail and customer satisfaction.",
    author: "MARKETING HEAD",
    company: "TECHWAVE",
    rating: 5,
  },
];

export const cardData = [
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

export const blogData = [
  {
    id: 1,
    img: blog1,
    date: "05-29-2025",
    title: "Best Web Design Companies in 2025 [June Update]",
    excerpt:
      "Whether you're building a new website or revamping an existing one, partnering with a top web design company is crucial to ensuring a site that is [...]",
    category: "Design",
  },
  {
    id: 2,
    img: blog2,
    date: "05-29-2025",
    title: "TOP Web Development Companies in 2025 [June Update]",
    excerpt:
      "To ensure a fair and objective evaluation, we analyzed numerous web design agencies based on several criteria. These include their portfolio of work [...]",
    category: "Development",
  },
  {
    id: 3,
    img: blog3,
    date: "05-29-2025",
    title: "Top 10 Best Financial Website Designs [June 2025 Update]",
    excerpt:
      "Key Takeaways: These financial website designs use an intuitive flow and stellar UI/UX experience to capture site visitors' business [...]",
    category: "Marketing",
  },
];

export const logos = [
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

export const images = [
  {
    url: BannerHS,
    stat: "90%",
    description: "SOLD-OUT SHOWS ON TICKETMASTER",
    thumbnail: BannerHS,
  },
  {
    url: BannerHS,
    stat: "51%",
    description: "INCREASE IN ORGANIC TRAFFIC",
    thumbnail: BannerHS,
  },
  {
    url: BannerHS,
    stat: "38%",
    description: "BOOST IN SOCIAL REACH",
    thumbnail: BannerHS,
  },
];

export const accordionItems = [
  {
    title: "BRANDING",
    content: [
      "Brand Storytelling",
      "Brand Voice Copywriting",
      "Corporate ID",
      "Corporate Nomenclature",
      "Slogans",
      "Collateral Design",
    ],
  },
  {
    title: "DESIGN",
    content: [
      "UI/UX Design",
      "Responsive Web Design",
      "Mobile App Design",
      "Email Template Design",
      "Logo & Identity Design",
    ],
  },
  {
    title: "DIGITAL MARKETING",
    content: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Campaigns",
      "Content Strategy",
    ],
  },
  {
    title: "DEVELOPMENT",
    content: [
      "Custom Web Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "App Development",
    ],
  },
  {
    title: "SEO",
    content: [
      "Technical SEO",
      "Keyword Research",
      "On-Page Optimization",
      "Backlink Strategy",
      "Analytics & Reporting",
    ],
  },
];

export const courses = [
  {
    title: "Multimedia & Design",
    description:
      "Learn to become graphic designer, video creator, and animation artist.",
    category: "Digital Marketing",
    type: "Student",
    image: BannerC1,
    brochure: "/data/mdm-brochure.pdf",
    bulletPoints: [
      "In Class | Online",
      "500+ Hrs Training",
      "02 Months Internship",
      "Recording (LMS) | Live Session",
      "Live Projects",
      "E-Notes & E-Books",
      "30+ Certifications",
    ],
  },
  {
    title: "Fullstack Web Developer",
    description:
      "Learn to become a full stack website developer & make your career bright.",
    category: "Website",
    type: "Student",
    image: BannerC2,
    brochure: "/data/fullstack-brochure.pdf",
    bulletPoints: [
      "In Class | Online",
      "500+ Hrs Training",
      "02 Months Internship",
      "Recording (LMS) | Live Session",
      "Live Projects",
      "E-Notes & E-Books",
      "30+ Certifications",
    ],
  },
  {
    title: "ADCA",
    description:
      "You’ll be eligible in accounting, graphic design, and web designing.",
    category: "Popular",
    type: "Student",
    image: BannerC3,
    brochure: "/data/adca-brochure.pdf",
    bulletPoints: [
      "In Class | Online",
      "500+ Hrs Training",
      "02 Months Internship",
      "Recording (LMS) | Live Session",
      "Live Projects",
      "E-Notes & E-Books",
      "30+ Certifications",
    ],
  },
  {
    title: "Corporate Upskilling",
    description: "Advanced tech training tailored for teams.",
    category: "Corporate Training",
    type: "Business",
    image: BannerC1,
    brochure: "/data/corporate-upskill.pdf",
    bulletPoints: [
      "In Class | Online",
      "500+ Hrs Training",
      "02 Months Internship",
      "Recording (LMS) | Live Session",
      "Live Projects",
      "E-Notes & E-Books",
      "30+ Certifications",
    ],
  },
  {
    title: "Team Leadership Workshop",
    description:
      "Boost leadership skills and collaboration across departments.",
    category: "Workshops",
    type: "Business",
    image: BannerC2,
    brochure: "/data/leadership-workshop.pdf",
    bulletPoints: [
      "In Class | Online",
      "500+ Hrs Training",
      "02 Months Internship",
      "Recording (LMS) | Live Session",
      "Live Projects",
      "E-Notes & E-Books",
      "30+ Certifications",
    ],
  },
  {
    title: "Technical Team Upskilling",
    description: "Improve your team’s productivity and performance.",
    category: "Team Upskilling",
    type: "Business",
    image: BannerC3,
    brochure: "/data/tech-upskill.pdf",
    bulletPoints: [
      "In Class | Online",
      "500+ Hrs Training",
      "02 Months Internship",
      "Recording (LMS) | Live Session",
      "Live Projects",
      "E-Notes & E-Books",
      "30+ Certifications",
    ],
  },
];

export const impactItems = [
  { title: 650, suffix: "+", description: "Websites Launched" },
  { title: 23, suffix: "+", description: "Years of Experience" },
  {
    title: 4.9,
    suffix: " ★",
    description: "Avg. Google Rating",
    isDecimal: true,
  },
  { title: 500, suffix: "+", description: "Happy Clients" },
];

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

export const features = [
  { id: 1, icon: FaChalkboardTeacher, label: "Expert Trainers" },
  { id: 2, icon: FaCalendarAlt, label: "Flexible Batches" },
  { id: 3, icon: FaLaptopCode, label: "Online Classes" },
  { id: 4, icon: FaUserGraduate, label: "Doubt Classes" },
  { id: 5, icon: FaUserTie, label: "Job Oriented Training" },
  { id: 6, icon: FaProjectDiagram, label: "Live Project Work" },
  { id: 7, icon: FaCertificate, label: "Verifiable Certificate" },
  { id: 8, icon: FaHandsHelping, label: "100% Job Assistance" },
];

export const faqs = [
  {
    question: "Would a website redesign bring more traffic?",
    answer:
      "Yes, a redesign with better UX and SEO optimization can significantly increase traffic.",
  },
  {
    question: "My website isn't generating enough leads.",
    answer:
      "A combination of CRO strategies and clearer CTAs can help convert more visitors.",
  },
  {
    question: "My ecommerce website is continuously losing sales.",
    answer:
      "We analyze funnel performance and improve speed, trust signals, and UX to retain users.",
  },
  {
    question:
      "I want to improve ROI on Digital Marketing, but staying up to speed on trends is a full-time job.",
    answer:
      "Our marketing team stays on top of trends to ensure maximum ROI with minimal effort on your part.",
  },
  {
    question: "Managing a digital campaign takes too much time.",
    answer:
      "Let our experts handle everything from setup to reporting so you can focus on your business.",
  },
];
