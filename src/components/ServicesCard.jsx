import React from "react";
import PropTypes from "prop-types";

const ServicesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:mx-3 sm:p-6 flex flex-col items-start h-auto sm:h-56">
      <div className="flex items-center mb-2 sm:mb-4">
        <Icon className="text-black text-3xl md:text-5xl w-7 sm:w-9 h-auto" />
      </div>
      <h3 className="text-black text-lg md:text-2xl font-semibold mb-1 sm:mb-2">
        {title}
      </h3>
      {description && (
        <div className="text-black-900 text-sm md:text-base  space-y-1">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

ServicesCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServicesCard;
