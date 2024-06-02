import React from 'react';
import PropTypes from 'prop-types';

const TestimonialsCard = ({ quoteVector, testimonial, profileIcon, name, school }) => {
  return (
    <div className="shadow-xl  rounded-xl p-6 m-2 w-[370px] h-80 flex flex-col justify-between">
      <img src={quoteVector} alt="Quote" className="w-8 h-8 mb-4" />
      <p className="text-black-900  text-base mb-4 flex-grow">{testimonial}</p>
      <div className="flex items-center mt-4">
        <img src={profileIcon} alt={name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="text-black-900 font-semibold">{name}</p>
          <p className="text-black-900">{school}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  quoteVector: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  profileIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
};

export default TestimonialsCard;
