import React from 'react';
import PropTypes from 'prop-types';

const WhyChooseUsCard = ({ icon: Icon, title, description }) => {
  return (
    <div className=" md:mx-3 relative bg-gradient-to-br from-black-900 via-gray-900 to-black-900_01 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-2xl p-6 flex flex-col items-start col-span-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white-300 to-transparent opacity-10 rounded-lg pointer-events-none"></div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center space-x-4">
          <Icon className="text-white-A700_01 text-5xl w-9 h-auto" />
          <h3 className="text-white-A700_01 text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-200 text-base mt-4">{description}</p>
      </div>
    </div>
  );
};

WhyChooseUsCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WhyChooseUsCard;
