import React from 'react';
import ServicesCard from './ServicesCard';
import WhyChooseUsCard from './WhyChooseUs';
import { servicesData } from './ServicesData';
import { FaHandsHelping } from 'react-icons/fa'; // Icon for Why Choose Us card

const ServicesGrid = () => {
  return (
    <div className="my-20 md:py-8 grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-3 md:mx-auto gap-5" id="whyus">
      <WhyChooseUsCard
        icon={FaHandsHelping}
        title="Why Choose Us"
        description="Personalized coaching and mentorship tailored to your individual needs, with flexible scheduling to accommodate international students."
      />
      {servicesData.map((service, index) => (
        <ServicesCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
