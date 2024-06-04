import React, { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import quoteVector from "../assets/images/Vector.png";
import profileIconMale from "../assets/images/userMale.png";
import profileIconFemale from "../assets/images/userFemale.png";
import arrow from "../assets/images/arrow_down_right.png";

const testimonialsData = [
  {
    testimonial:
      "Hello miss, just wanted to let you know that learning with you has been so good that I regret not joining sooner... Now my mind is more broadened and I can easily understand the definitions. I hope that in the future upcoming tests I will be able to gain unexpected results. Thank you so much Miss Amnaa ❤✨",
    profileIcon: profileIconFemale, // Assuming profileIconFemale for Shearan
    name: "Shearan",
    school: "Private Candidate",
  },
  {
    testimonial:
      "From Accounting Struggles to Success... Despite years of struggling and frequent failures in accounting, I discovered an extraordinary tutor... her remarkably clear teaching style, making what once seemed insurmountable now manageable and even enjoyable.",
    profileIcon: profileIconMale, // Assuming profileIconMale for Abdullah
    name: "Abdullah",
    school: "Srilankan International School Jeddah",
  },
  {
    testimonial:
      "Hi Miss, Before starting the tuition classes I really struggled with the theory of the Business subject... And most importantly it has really helped me in better time management of past paper practices and helped me to develop my Analysis and Evaluation skills when answering the questions. Additionally the class timings were flexible.",
    profileIcon: profileIconFemale, // Assuming profileIconFemale for Zainab
    name: "Zainab Murshid",
    school: "Arab Unity School Dubai",
  },
  {
    testimonial:
      "Dear Miss Amnaa thankyou for the time and effort you put toward my lessons every session... We have a long way to acheive and we're getting they're gradually. I must add your optimistic vibe is the biggest reason for my eminent improvement even without attending school. Jazakallah Khair for opening my eyes to great potential and insha'Allah we'll crush the O/L exams",
    profileIcon: profileIconFemale, // Assuming profileIconFemale for Rafeeda
    name: "Rafeeda Riyaz",
    school: "UAE, Private Candidate",
  },
  {
    testimonial:
      "I sincerely thank you for your precious time,support and guidance given to me even though it was the last moment. Alhamdullillah, I was able to improve my answer standards very well. And not only improved, I also gained so much by learning Economics and Business Studies through you.",
    profileIcon: profileIconFemale, // Assuming profileIconFemale for Aaliyah
    name: "Aaliyah Ashraff Shafi",
    school: "Ilma International School",
  },
  {
    testimonial:
      "I was a student who was scoring low marks in my commerce exams in grade 9 -10 and then I was struggling to focus on my exams .Amnaa teacher explained me that commerce was an easy subject. I joined 5 months before my ordinary level exam and revised all the syllabus which I’ve missed. Whereas I practiced past papers which made me to Improve my failure into success ",
    profileIcon: profileIconMale, // Assuming profileIconMale for Aasif
    name: "Aasif Bary",
    school: "Lyceum International School Panadura",
  },
  {
    testimonial:
      "I was very weak in my business studies and economics subjects ,as finding it very difficult to learn I used to get very low marks also like 20s and 40s... I thank you alot for improving my knowledge and strengthen my interest towards my studies and continuing the classes for ALs too .",
    profileIcon: profileIconMale, // Assuming profileIconMale for Raashid
    name: "Raashid Ali",
    school: "Lyceum International School Panadura",
  },
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
      <div className="hidden md:flex justify-center items-center space-x-2 mt-6">
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
