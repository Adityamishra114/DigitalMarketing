import React from 'react'
import AboutHeroSection from '../components/AboutHeroSection'
import AboutImage from "../assets/Aboutbgacc.webp"
import ContactForm from '../components/ContactFormSection'
import OurClients from '../components/OurClients'
import BannerAll from '../components/BannerAll'
import bannerImg from "../assets/Digital2.jpeg"
import AboutInfo from '../components/AboutInfo'
import { bannerContent } from '../../data'
import ImpactSection from '../components/ImpactSection'

const About = () => {
  return (
    <>
   <BannerAll
        image={bannerContent.image}
        heading={bannerContent.heading}
        paragraph={bannerContent.paragraph}
      />
    <AboutInfo />
     <ImpactSection />
    <AboutHeroSection />
    <OurClients/> 
    <ContactForm/>
    </>
  )
}

export default About