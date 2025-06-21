import React from 'react'
import AboutHeroSection from '../components/AboutHeroSection'
import AboutImage from "../assets/Aboutbgacc.webp"
import ContactForm from '../components/ContactFormSection'
import OurClients from '../components/OurClients'
import BannerAll from '../components/BannerAll'
import bannerImg from "../assets/Digital2.jpeg"
const About = () => {
  return (
    <>
    <BannerAll image={bannerImg} />
    <AboutHeroSection />
    <OurClients/> 
    <ContactForm/>
    </>
  )
}

export default About