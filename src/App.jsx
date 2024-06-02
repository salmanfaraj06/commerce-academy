import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import HeroSection from "components/Hero";
import Testimonials from "components/Testimonials";
import ServicesGrid from "components/ServicesGrid";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import VisionMission from "components/VisionMission";
import VMSmall from "components/VMSmall";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Commerce</title>
        <meta name="description" content="app description" />
      </Helmet>
      <Navbar />
      <HeroSection />
      {isLargeScreen ? <VisionMission /> : <VMSmall />}
      <ServicesGrid />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
