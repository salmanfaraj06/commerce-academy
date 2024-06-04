import React, { useState, useEffect } from "react";
import Text from "./Text/index";
import heroImg from "../assets/images/hero.png";

const subjectsCoveredCount = 3; // Subjects covered count
const initialStudentCount = 0; // Initial number of students

const HeroSection = () => {
  const [studentCount, setStudentCount] = useState(initialStudentCount);

  // Animate student count (example: increasing the count)
  useEffect(() => {
    let count = initialStudentCount;
    const countInterval = setInterval(() => {
      if (count > 47) {
        clearInterval(countInterval);
      } else {
        setStudentCount(count);
        count++;
      }
    }, 100);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto md:max-w-3xl lg:max-w-6xl my-24 w-full">
      {/* First Column */}
      <div className="flex flex-col items-start md:w-1/2 w-full text-center md:text-left">
        <Text className=" text-black-900 mb-4 md:text-left" size="mypro">
          Welcome to <span className=" font-bold ">Commerce Academy</span>
        </Text>
        <Text className="text-gray-700 my-8 mx-2" size="s">
          Master Commerce with Confidence at Commerce Academy,
          Empowering students to excel in their Cambridge or Edexcel
          commerce exams, Commerce Academy offers a supportive and flexible
          learning environment. Whether you prefer the convenience of online
          classes or the focus of in-person sessions, our passionate instructors
          are here to guide you towards success in Business Studies, Economics,
          and Accounting.
        </Text>

        <div className="flex flex-row justify-between my-6 w-full md:w-auto ">
          <div className="flex flex-col items-center md:items-start mr-10">
            <Text className="text-sm md:text-lg text-gray-500">
              Subjects Covered
            </Text>
            <Text className="text-2xl md:text-3xl font-bold text-black-900">
              {subjectsCoveredCount}+
            </Text>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Text className="text-sm md:text-lg text-gray-500 ">
              Current Students
            </Text>
            <Text className="text-2xl md:text-3xl font-bold text-black-900">
              {studentCount}+
            </Text>
          </div>
        </div>
      </div>
      {/* Second Column */}
      <div className="flex justify-center md:w-1/2 w-full mt-10 md:mt-0">
        <img
          src={heroImg} // Replace with your actual image path
          alt="Hero"
          className="w-full h-auto max-w-sm lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
