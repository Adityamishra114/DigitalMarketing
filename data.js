// All imported Icons
import { FaLightbulb, FaPenNib, FaQuestionCircle, FaFlag } from "react-icons/fa";
import { MdOutlineLightbulb } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaLaptopCode,
  FaUserGraduate,
  FaProjectDiagram,
  FaCertificate,
  FaHandsHelping,
  FaUserTie,
  FaSearch, FaHandHoldingUsd,
} from "react-icons/fa";




// Award images About us section
import award1 from "./src/assets/award1.webp"; 
import award2 from "./src/assets/award2.webp";
import award3 from "./src/assets/award3.webp";
import award4 from "./src/assets/award4.webp";
// certificate image
import Cert1 from "./src/assets/certificate1.jpg";
import Cert2 from "./src/assets/certificate2.jpg";
import Cert3 from "./src/assets/certificate3.jpg";
import Cert4 from "./src/assets/certificate3.jpg";
import Cert5 from "./src/assets/certificate3.jpg";
//company logo 
import Google from "./src/assets/google.jpg";
import Walmart from "./src/assets/walmart.jpg";
import AirBnb from "./src/assets/airbnb.png";
import MamaEarth from "./src/assets/mamaearth.png"; 
import Accenture from "./src/assets/accenture.jpg";

// TestimonialSlider data
import Banner from "./src/assets/adm.webp";
import Banner1 from "./src/assets/mdm.webp";
import Banner2 from "./src/assets/pdm.webp";

// MiniCard data
import DM from "./src/assets/1dm.png";
import DM1 from "./src/assets/2dm.png";
import DM2 from "./src/assets/3dm.png";
import DM3 from "./src/assets/4dm.png";
import DM4 from "./src/assets/5dm.png";
import DM5 from "./src/assets/6dm.png";

// BlogSection data
import blog1 from "./src/assets/web.jpg";
import blog2 from "./src/assets/design.jpg";
import blog3 from "./src/assets/digital.jpg";

// OurClients data
import Logo from "./src/assets/logo.png";

// HeroSection data
import BannerHS from "./src/assets/Aboutbgacc.webp";
//AboutBanner image
import AboutBanner from "./src/assets/Digital5.jpeg"
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
  { id: 2, image: DM1, text: "Web Development" },
  { id: 3, image: DM2, text: "UI/UX Design" },
  { id: 4, image: DM3, text: "Digital Marketing" },
  { id: 5, image: DM4, text: "Data Science" },
  { id: 6, image: DM5, text: "Cyber Security" },
  { id: 7, image: DM, text: "App Development" },
  { id: 8, image: DM1, text: "Cloud Computing" },
  { id: 9, image: DM2, text: "Blockchain" },
  { id: 10, image: DM3, text: "Robotics" },
  { id: 11, image: DM4, text: "HR & Soft Skills" },
  { id: 12, image: DM5, text: "Business Strategy" },
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

export const accordionItems = [
  {
    title: "BRANDING",
    faqs: [
      {
        question: "What is brand storytelling?",
        answer:
          "Brand storytelling is the art of using a narrative to connect your brand to customers, providing meaning and emotional resonance.",
      },
      {
        question: "Why is brand identity important?",
        answer:
          "A strong brand identity builds trust, recognition, and emotional connection with your audience, setting you apart in the market.",
      },
      {
        question: "Do you help with logo design?",
        answer:
          "Yes, we create custom logo designs that align with your brand's voice, values, and target audience.",
      },
      {
        question: "What does a branding package include?",
        answer:
          "Our branding packages typically include logo, typography, color palette, voice guidelines, and key marketing assets.",
      },
      {
        question: "Can you rebrand an existing business?",
        answer:
          "Absolutely! We offer brand audits, redesigns, and strategic repositioning for existing businesses ready for a refresh.",
      },
    ],
  },
  {
    title: "DESIGN",
    faqs: [
      {
        question: "What is UI/UX design?",
        answer:
          "UI/UX design is the process of creating user interfaces and experiences that are visually appealing and easy to use.",
      },
      {
        question: "How is responsive design implemented?",
        answer:
          "Responsive design ensures a website looks good on all devices using flexible layouts and media queries.",
      },
      {
        question: "What tools do you use for design?",
        answer:
          "We use Figma, Adobe XD, Sketch, and Photoshop for various design tasks.",
      },
      {
        question: "Do you design logos and brand kits?",
        answer:
          "Yes, we offer complete branding services including logos, style guides, and visual identity kits.",
      },
      {
        question: "Can I request revisions on the design?",
        answer:
          "Yes, we provide a set number of revisions to ensure you’re satisfied with the design outcome.",
      },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    faqs: [
      {
        question: "What platforms do you use for digital marketing?",
        answer:
          "We use Google Ads, Facebook Ads, Instagram, LinkedIn, and various email marketing platforms.",
      },
      {
        question: "What is included in your SEO service?",
        answer:
          "Technical SEO, keyword optimization, backlinking, and analytics reporting are all included.",
      },
      {
        question: "Do you run paid ad campaigns?",
        answer:
          "Yes, we create and manage PPC campaigns on Google and social media platforms.",
      },
      {
        question: "How do you track campaign success?",
        answer:
          "We use tools like Google Analytics and Meta Pixel to measure KPIs and performance metrics.",
      },
      {
        question: "Is content marketing part of your services?",
        answer:
          "Yes, we offer blogging, content planning, and strategy to boost organic traffic.",
      },
    ],
  },
  {
    title: "DEVELOPMENT",
    faqs: [
      {
        question: "Do you build custom websites?",
        answer:
          "Yes, we specialize in custom-built websites tailored to your business needs and target audience.",
      },
      {
        question: "What platforms do you use for e-commerce development?",
        answer:
          "We use Shopify, WooCommerce, and custom solutions built with React, Node.js, and MongoDB.",
      },
      {
        question: "Is mobile responsiveness included?",
        answer:
          "Yes, all websites we develop are fully responsive across mobile, tablet, and desktop devices.",
      },
      {
        question: "Can I manage my own content?",
        answer:
          "Absolutely! We integrate CMS platforms like WordPress or custom CMS so you can easily manage your site content.",
      },
      {
        question: "Do you offer ongoing support and maintenance?",
        answer:
          "Yes, we provide maintenance packages that include updates, bug fixes, security monitoring, and performance optimization.",
      },
    ],
  },
];

export const officeData = {
  heading: "Corporate",
  highlight: "Office",
  locationName: "Digital Vidya, Gurgaon",
  address:
    "Unit No. 304 – B, 3rd Floor, JMD Regent Plaza, MG Road, Gurugram, Haryana – 122001",
  email: "info@digitalvidya.com",
  phone: "+91-8010033033",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.467478261944!2d77.0805174150823!3d28.614179791285388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d84519eec41%3A0x65e498e225fc0995!2sDigital%20Vidya!5e0!3m2!1sen!2sin!4v1663671765030!5m2!1sen!2sin",
};


export const upskillsData = [
  {
    id: 1,
    icon: FaChalkboardTeacher,
    title: "Advance Knowledge",
    subtitle:
      "Make your own website | Run live marketing campaigns | Live projects | Case studies",
    description:
      "DIDM has designed a practical oriented advanced digital marketing course that best suits from student to a marketing specialist. While learning, get exposure to website designing without coding, live projects, and case studies to enhance your skills.",
  },
  {
    id: 2,
    icon: FaUserGraduate,
    title: "Quality Training",
    subtitle:
      "Online and Offline Training | Flexible Batch Timings | Weekday and Weekend Batch | Micro Batch Size",
    description:
      "DIDM is committed to deliver the best digital marketing course learning outcomes with the facility of online/offline training and the option of choosing flexible batch timings by just dialing a number to our 24x7 customer support.",
  },
  {
    id: 3,
    icon: MdOutlineLightbulb,
    title: "Smart Classes",
    subtitle:
      "Practical Classes | E-resources | E-Learning | LMS learning | Assessments | Deep Learning Experience",
    description:
      "Being a professional training institute, DIDM believes in high-quality practical training as per market standard. We provide online training sessions through LMS and provide study materials in video and text format so that students can refer to the videos even if they miss any class.",
  },
  {
    id: 4,
    icon: PiCertificateBold,
    title: "Certified Expert",
    subtitle:
      "Industry Expert | Google Certified Trainers | Top Mentors | Experienced Faculty",
    description:
      "Our trainers are qualified Google certified industry experts who adopt an interactive approach during training and focus on every individual to make them industry-ready by clearing the concepts and doubts. They also help trainees in resume building and job placements.",
  },
];


export const contactBannerData = {
  title: "Contact Us",
  description: `Digital Vidya is a brand name of the Company “Engaging Ideas Private Limited”, 
which was registered with the Registrar of Companies in the year 2012 and having CIN U74900DL2012PTC232239. 
The registered office address of the Company is at C-7/6, Mianwali Nagar, Rohtak Road, New Delhi-110087 
and the corporate office address at Unit No. 304, 3rd Floor, JMD Regent Plaza, MG Road, Gurugram, Haryana-122001.`,
};


export const aboutInfo = {
  headingTop: "New Way To Learn",
  mainHeading: "Master In Digital Marketing Course",
  subHeading:
    "Theory | Live Practical | Implementation | 64+ Careers | 650+ Placement Partners",
  awardImages: [award1, award2, award3, award4],
  cards: [
    {
      title: "Our Vision — Empowering Digital Learning",
      content:
        "Our digital marketing courses aim to help you achieve every goal in just one shot with 36+ modules. You can choose according to your need and interest. We provide 100% placement assistance with life-time support through resume-building, Q&A sessions, Google certification, and NCoEM compliance.",
    },
    {
      title: "Our Mission — Shaping Future Marketers",
      content:
        "We guide every student with the help of top trainers and industry experts to make them market-ready. Our course is driven by innovation and a future-ready vision.",
    },
    {
      title: "Our Value — Excellence, Innovation, Integrity",
      content:
        "Our course is driven by innovation, excellence, and integrity. We provide customized training modules that suit every learner and work on client-like projects. We build rapport and skill that help learners succeed in practical scenarios.",
    },
  ],
};


export const steps = [
  {
    title: "Learn",
    description:
      "Upskill yourself by gaining insights from leading professionals' vast experience.",
    icon: FaLightbulb,
    badge: "Live Classes + Self-Paced",
  },
  {
    title: "Practice",
    description:
      "Sharpen your skills by learning through course assignments, live projects, and regular assessments and quizzes.",
    icon: FaPenNib,
  },
  {
    title: "Ask",
    description:
      "Resolve your queries from industry experts with our dedicated 1:1 doubt-clearing sessions.",
    icon: FaQuestionCircle,
  },
  {
    title: "Build",
    description:
      "Craft a diverse portfolio and appealing resume, and optimize LinkedIn to showcase your digital marketing skills.",
    icon: FaFlag,
  },
];



export const certificates = [
  {
    id: 1,
    name: "Certificate 1",
    image: Cert1,
  },
  {
    id: 2,
    name: "Certificate 2",
    image: Cert2,
  },
  {
    id: 3,
    name: "Certificate 3",
    image: Cert3,
  },
  {
    id: 4,
    name: "Certificate 3",
    image: Cert4,
  },
  {
    id: 5,
    name: "Certificate 3",
    image: Cert5,
  },
];
export const topCompanies = [
  { id: 1, name: "Google", logo: Google },
  { id: 2, name: "Meta", logo: Walmart },
  { id: 3, name: "Expedia", logo: MamaEarth },
  { id: 4, name: "Lenskart", logo: Accenture },
  { id: 5, name: "OLA", logo: AirBnb },
  { id: 6, name: "Walmart", logo:Walmart  },
  { id: 7, name: "Duolingo", logo: MamaEarth },
  { id: 8, name: "Airbnb", logo: AirBnb },
  { id: 9, name: "Adobe", logo: Google },
  { id: 10, name: "Mamaearth", logo: MamaEarth },
  { id: 11, name: "Accenture", logo: Accenture },
];
export const featureStats = [
  {
    id: 1,
    icon: FaUserGraduate,
    label: "STUDENTS",
    value: 9450,
    suffix: "+",
  },
  {
    id: 2,
    icon: FaSearch,
    label: "HIRING PARTNERS",
    value: 300,
    suffix: "+",
  },
  {
    id: 3,
    icon: FaHandHoldingUsd,
    label: "NO COST EMI",
    value: 5000,
    prefix: "₹",
  },
  {
    id: 4,
    icon: FaLightbulb,
    label: "BRANDS CASE STUDIES",
    value: 50,
    suffix: "+",
  },
];

export const courseOptions = [
  "Digital Marketing",
  "Web Development",
  "Graphic Design",
  "UI/UX Design",
  "Animation & Multimedia",
  "Others",
];

export const defaultFormData = {
  name: "",
  phone: "",
  course: "",
  email: "",
  message: "",
};
export const steps1 = [
  {
    title: "Learn",
    icon: "https://deen3evddmddt.cloudfront.net/images/courses-details/learn-icon.svg",
    iconFilled: "https://deen3evddmddt.cloudfront.net/images/courses-details/blue-learn-icon.svg",
    badge: "Live Classes",
    badgeIcon: "https://deen3evddmddt.cloudfront.net/images/icons/ellipse-icon.svg",
    badge2: "Self-Paced",
    description: "Upskill yourself by gaining insights from leading professionals' vast experience."
  },
  {
    title: "Practice",
    icon: "https://deen3evddmddt.cloudfront.net/images/courses-details/practice-icon.svg",
    iconFilled: "https://deen3evddmddt.cloudfront.net/images/courses-details/blue-practice-icon.svg",
    description: "Sharpen your skills by learning through course assignments, live projects, and regular assessments and quizzes."
  },
  {
    title: "Ask",
    icon: "https://deen3evddmddt.cloudfront.net/images/courses-details/build-icon.svg",
    iconFilled: "https://deen3evddmddt.cloudfront.net/images/courses-details/blue-build-icon.svg",
    description: "Resolve your queries from industry experts with our dedicated 1:1 doubt-clearing sessions."
  },
  {
    title: "Build",
    icon: "https://deen3evddmddt.cloudfront.net/images/courses-details/success-icon.svg",
    iconFilled: "https://deen3evddmddt.cloudfront.net/images/courses-details/blue-success-icon.svg",
    description: "Craft a diverse portfolio and appealing resume, and optimize LinkedIn to showcase your digital marketing skills."
  }
];
export const bannerContent = {
  image: AboutBanner, 
  heading: "Welcome to DG Royals",
  paragraph:
    "Empowering learners through industry-ready digital marketing courses, live mentorship, and hands-on training.",
};