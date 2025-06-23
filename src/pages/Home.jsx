import HomeBanner from "../components/HomeBanner";
import CourseTabs from "../components/CourseTabs";
import FAQSection from "../components/FaqSection";
import ImpactSection from "../components/ImpactSection";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogSection from "../components/BlogSection";
import MiniCard from "../components/MiniCard";
import ContactFormSection from "../components/ContactFormSection";
import Upskills from "../components/Upskills";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <CourseTabs />
      <MiniCard />
      <FAQSection />
      <ImpactSection />
      <Upskills />
      <TestimonialSlider />
      <BlogSection />
      <ContactFormSection />
    </>
  );
};

export default Home;
