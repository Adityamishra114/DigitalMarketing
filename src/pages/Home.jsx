import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HeroSection from '../components/HeroSection'
import CourseTabs from '../components/CourseTabs'
import FeaturesSection from '../components/FeaturesSection'
import FAQSection from '../components/FaqSection'
import ImpactSection from '../components/ImpactSection'
import TestimonialSlider from '../components/TestimonialSlider'
import BlogSection from '../components/BlogSection'

import MiniCard from '../components/MiniCard'
import ContactFormSection from '../components/ContactFormSection'

const Home = () => {
  return (
    <>
    <HomeBanner/>
    <HeroSection/>
    <CourseTabs/> 
    <MiniCard/>
    <FAQSection/> 
    <ImpactSection/>
    <TestimonialSlider/>
    <BlogSection/>
    <ContactFormSection/>
    </>
  )
}

export default Home