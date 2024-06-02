import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import arrowMission from "../assets/images/mission.png";
import eyeVision from "../assets/images/eyeVision.png";
import smallEyeVision from "../assets/images/smallEyeVision.png";
import smallArrowMission from "../assets/images/smallArrowMission.png";

function VisionMission() {
  const [expanded, setExpanded] = useState(2);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 400) setExpanded(2);
  }, [windowWidth]);

  const handleMouseEnter = debounce((index) => {
    if (index !== expanded) {
      setExpanded(index);
    }
  }, 100);

  const handleMouseLeave = debounce(() => {
    if (expanded !== 1) {
      setExpanded(2);
    }
  }, 100);

  return (
    <div className=" max-w-6xl flex justify-center mx-2 md:mx-auto flex-col">
      <div className="lg:flex items-center justify-center min-h-screen  space-y-6 lg:space-y-0 lg:space-x-6 ">
        <div
          style={{
            flex: expanded === 0 && "70%",
            transition: "flex 0.5s ease",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="vision_container shadow-xl border-2 border-black-900 rounded-2xl relative h-[60vh] lg:h-[500px] lg:w-[70%] flex flex-col justify-between pointer bg-transparent"
        >
          <img
            className={`absolute top-5 right-5 mix-blend-difference ${
              expanded === 1 ? "hidden" : "w-28"
            } `}
            src={smallEyeVision}
            alt="mission image"
            loading="lazy"
          />
          <img
            className={`absolute top-0 left-0 mix-blend-difference ${
              expanded !== 1 ? "hidden" : "w-[250px]"
            } `}
            src={eyeVision}
            alt="mission image"
            loading="lazy"
          />
          <div className="relative shadow-lg text-black-900 lg:mt-auto flex flex-col justify-between h-fit mt-auto">
            <div className="w-[90%] lg:w-[85%] p-5">
              <h1
                className={`text-[32px] leading-[60px] ${
                  expanded !== 1 ? "lg:text-[64px]" : "lg:text-[54px]"
                } font-thin lg:w-[40%]`}
              >
                <span> Our </span>
                <span className="font-extrabold">Vision</span>
              </h1>
              <p
                className={`text-[14px] lg:text-[20px] mt-auto font-poppins ${
                  expanded === 1 && "hidden"
                }`}
              >
                To be a leading commerce institute, providing exceptional
                education aligned with Cambridge and Edexcel curriculums,
                shaping future leaders in business and finance, and contributing
                to the advancement of global commerce.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: expanded === 1 ? "200%" : "30%",
            transition: "flex 0.5s ease",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className="vision_container shadow-lg border-2 overflow-hidden border-black-900 rounded-2xl relative h-[60vh] lg:h-[500px] lg:w-[30%] flex flex-col justify-between pointer bg-transparent"
        >
          <img
            className={`absolute top-5 right-5 mix-blend-difference ${
              expanded !== 1 ? "hidden" : "w-28"
            } `}
            src={smallArrowMission}
            alt="mission image"
            loading="lazy"
          />
          <img
            className={`absolute -bottom-12 left-0 mix-blend-difference ${
              expanded === 1 ? "hidden" : "w-[335px]"
            } `}
            src={arrowMission}
            alt="mission image"
            loading="lazy"
          />
          <div
            className={`relative text-black-900 p-5 lg:mt-auto w-[90%] lg:w-[85%] flex flex-col justify-between mt-auto ${
              expanded !== 1 && "h-full"
            }`}
          >
            <h1
              className={`text-[32px] leading-[60px] ${
                expanded === 1 ? "lg:text-[64px]" : "lg:text-[54px]"
              }  font-thin lg:w-[40%]`}
            >
              <span>Our </span>
              <span className="font-extrabold">Mission</span>
            </h1>
            <p
              className={`text-[14px] lg:text-[20px] mt-auto font-poppins ${
                expanded === 1 ? "block" : "hidden"
              }`}
            >
              To empower students with comprehensive commerce education,
              tailored to Cambridge and Edexcel curriculums, fostering economic
              understanding, enhancing financial literacy, and promoting
              sustainable and equitable business practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisionMission;
