import React, { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import quoteVector from "../assets/images/Vector.png";
import profileIconMale from "../assets/images/userMale.png";
import profileIconFemale from "../assets/images/userFemale.png";
import arrow from "../assets/images/arrow_down_right.png";

const testimonialsData = [
  {
    testimonial: "This is an amazing school!",
    profileIcon: profileIconMale,
    name: "John Doe",
    school: "XYZ High School",
  },
  {
    testimonial: "I love the environment and the teachers!",
    profileIcon: profileIconFemale,
    name: "Jane Smith",
    school: "ABC Middle School",
  },
  {
    testimonial: "I love the environment and the teachers!",
    profileIcon: profileIconFemale,
    name: "Jane Smith",
    school: "ABC Middle School",
  },
  {
    testimonial: "I love the environment and the teachers!",
    profileIcon: profileIconFemale,
    name: "Jane Smith",
    school: "ABC Middle School",
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonialsData.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  return (
    <div className="mx-2 md:mx-auto w-full my-20 py-8" id="testimonials">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center my-12 max-w-6xl mx-auto">
        {/* First Column */}
        <div className="flex items-end">
          <div>
            <h2 className="text-3xl lg:text-5xl">Hear It From</h2>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Our Students
            </h2>
          </div>

          <img
            src={arrow}
            alt="Down Arrow"
            loading="lazy"
            className="w-5 h-auto lg:w-10 lg:h-10 ml-4 mb-2"
          />
        </div>

        {/* Second Column */}
        <p className="text-black md:max-w-[642px] mx-2 sm:mt-0 py-5 text-justify">
          Hear from our students about their experiences at our institute, the
          quality of education they received, and how our Cambridge and Edexcel
          curriculums have prepared them for their future in commerce.
        </p>
      </div>
      {/* Testimonials for medium to large screens */}
      <div className="hidden md:flex justify-center">
        {currentTestimonials.map((testimonial, index) => (
          <TestimonialsCard
            key={index}
            quoteVector={quoteVector}
            testimonial={testimonial.testimonial}
            profileIcon={testimonial.profileIcon}
            name={testimonial.name}
            school={testimonial.school}
          />
        ))}
      </div>

      {/* Pagination controls for medium to large screens */}
      <div className="hidden md:flex justify-center items-center space-x-2 mt-4">
        <button
          className="px-4 py-2 border border-gray-700 rounded"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-4 py-2 ${
              currentPage === pageNumber + 1
                ? "bg-gray-900 text-white-A700_01"
                : "border border-gray-700"
            } rounded`}
            onClick={() => setCurrentPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 border border-gray-700 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Testimonials for small screens */}
      <div className="flex md:hidden flex-wrap justify-center space-y-4">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsCard
            key={index}
            quoteVector={quoteVector}
            testimonial={testimonial.testimonial}
            profileIcon={testimonial.profileIcon}
            name={testimonial.name}
            school={testimonial.school}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
