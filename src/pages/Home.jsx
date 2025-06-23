import HomeBanner from "../components/HomeBanner";
import CourseTabs from "../components/CourseTabs";
import FAQSection from "../components/FaqSection";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogSection from "../components/BlogSection";
import MiniCard from "../components/MiniCard";
import ContactFormSection from "../components/ContactFormSection";
import Upskills from "../components/Upskills";
import CourseRoadmap from "../components/CourseRoadmap";
import CertificatesSection from "../components/CertificatesSection";
import HeroMain from "../components/HeroMain";
import TopCompanies from "../components/TopCompanies";
import FeatureSummary from "../components/FeatureSummary";

const Home = () => {
  return (
    <>
    <HeroMain/>
    <TopCompanies/>
    <FeatureSummary/>
      {/* <HomeBanner /> */}
      <CourseTabs />
      <MiniCard />
      <FAQSection />  
      <Upskills />
      <TestimonialSlider />
      <CourseRoadmap/>
      <BlogSection />
      <CertificatesSection/>
      <ContactFormSection />
    </>
  );
};

export default Home;
