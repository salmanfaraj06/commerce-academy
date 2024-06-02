import React, { useState, useEffect } from "react";
import arrow from "../assets/images/arrow_down_right.png";

function GetInvolved() {
  const [expanded, setExpanded] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 400) {
      setExpanded(null);
    }
  }, [windowWidth]);

  const handleMouseEnter = (index) => {
    setExpanded(index);
  };

  const handleMouseLeave = () => {
    setExpanded(null);
  };

  const imageContainers = [
    {
      image: "https://via.placeholder.com/150",
      title: "Enroll",
      description:
        "Enroll in our commerce classes and start your journey towards success.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Learn",
      description:
        "Learn from experienced tutors who are experts in the field of commerce.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Achieve",
      description:
        "Achieve your academic goals with our comprehensive study materials and regular tests.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Succeed",
      description:
        "We are committed to your success. Our tutors and staff are here to guide you at every step of your academic journey.",
    },
  ];
  return (
    <div className="my-24 flex flex-col justify-center max-w-6xl mx-2 md:mx-auto font-inter">
      {/* First Row */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full mb-3">
        {/* First Column */}
        <div className="flex items-end">
          <div>
            <h1 className="text-3xl lg:text-5xl">How To Get</h1>
            <h1 className="text-5xl lg:text-7xl font-bold">Involved</h1>
          </div>

          <img
            src={arrow}
            alt="Down Arrow"
            loading="lazy"
            className="w-7 lg:w-10 lg:h-10 ml-6 mb-2"
          />
        </div>

        {/* Second Column */}
        <p className="text-black max-w-[642px] sm:mt-0 sm:ml-3 py-5 sm:px-9 text-justify">
          Join hands with the Ramya Weerakoon Foundation by volunteering,
          participating in events and promoting our causes. Here’s how you could
          become a part of our mission in uplifting the local community
        </p>
      </div>

      <div className="center flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4">
        {imageContainers.map((container, index) => (
          <div
            key={index}
            className="vision_container rounded-3xl pointer w-full lg:w-[80%] h-full lg:h-[460px] text-white flex items-start justify-center transition-all duration-500 relative"
            style={{
              backgroundImage: `url(${container.image})`,
              backgroundSize: "cover",
              backgroundPosition: expanded === index ? "center" : "left",
              backgroundRepeat: "no-repeat",
              ...(window.innerWidth >= 1024
                ? {
                    width:
                      expanded === index || (expanded === null && index === 3)
                        ? "80%"
                        : "15%",
                  }
                : {
                    height:
                      expanded === index || (expanded === null && index === 3)
                        ? "80vh"
                        : "30vh",
                  }),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`${
                expanded === index || (expanded === null && index === 3)
                  ? "bg-gradient-to-r from-black via-gray-800 to-transparent to-95%"
                  : "bg-gradient-to-t from-black to-transparent"
              } w-full h-full absolute top-0 left-0 transition-all duration-500 rounded-3xl z-10`}
            />

            {expanded === index && (
              <div className=" p-4 w-full h-full flex flex-col justify-center space-y-16 transition-opacity duration-500 opacity-100 z-20">
                <h1 className="text-5xl font-bold">{container.title}</h1>
                <p className="text-lg opacity-80">{container.description}</p>
              </div>
            )}

            {expanded === null && index === 3 && (
              <div className=" p-4 w-full h-full flex flex-col justify-center space-y-16 transition-opacity duration-500 opacity-100 z-20">
                <h1 className="text-5xl font-bold">{container.title}</h1>
                <p className="text-lg opacity-80">{container.description}</p>
              </div>
            )}
            {expanded !== index && index !== 3 && (
              <div className="absolute bottom-0 z-30 p-4 w-full transition-opacity duration-500 opacity-100">
                <h1 className="text-xl font-bold text-center">
                  {container.title}
                </h1>
              </div>
            )}

            {(expanded === 0 || expanded === 1 || expanded === 2) &&
              index === 3 && (
                <div className="absolute bottom-0 z-30 p-4 w-full transition-opacity duration-500 opacity-100">
                  <h1 className="text-2xl font-bold text-center">
                    {container.title}
                  </h1>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetInvolved;
