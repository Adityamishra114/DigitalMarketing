import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SocialIcons from './components/SocialIcons';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

const App = () => {
  return (
    <>
      <Header /> 
      <SocialIcons/>
      <CallToAction/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/> 
    </>
  );
};

export default App;
