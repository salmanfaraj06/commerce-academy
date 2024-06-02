import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="relative bg-white-A700_01 rounded-lg shadow-lg mx-2 my-10 py-8 px-4 sm:px-6 lg:px-8 max-w-6xl md:mx-auto" id="contact">
      {/* Decorative dotted line pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent border-2 border-gray-900 pointer-events-none rounded-lg"></div>
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black-900_01 font-cursive text-center mb-6">Contact Us</h2>
      <p className="text-gray-700 text-center mb-8">Stay connected with us through social media!</p>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
        {/* Instagram Link */}
        <a
          href="https://instagram.com/your_instagram_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors duration-300"
        >
          <FaInstagram className="text-2xl sm:text-3xl" />
          <span className="font-semibold text-base sm:text-lg">@your_instagram_handle</span>
        </a>
        
        {/* WhatsApp Link */}
        <a
          href="https://wa.me/your_whatsapp_number"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors duration-300"
        >
          <FaWhatsapp className="text-2xl sm:text-3xl" />
          <span className="font-semibold text-base sm:text-lg">+1234567890</span>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
