import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";

function Hero() {
  return (
    <div className="mx-auto mt-10 w-full max-w-[1250px] flex flex-row md:flex-col gap-x-4">
      {/* Left Column */}
      <div className="flex-1 pr-7 md:pr-2 md:pl-2 mx-auto md:mx-0">
        <div className="relative flex flex-col items-start md:items-center">
          <div className="relative flex rotate-[-55deg] mt-12 items-start md:hidden">
            <Img
              src="images/img_menu.svg"
              alt="menu_one"
              className="mt-[-20px] h-[33px]"
            />
            <Heading
              size="s"
              as="h1"
              className="text-shadow-ts rotate-[16deg]"
            >
              Rukaiya
            </Heading>
          </div>
          <Img
            src="images/img_arrow_07.svg"
            alt="arrowseven_one"
            className="relative h-[165px] w-[183px] -mb-10 md:hidden"
          />
          <Img
            src="images/hero-frame.png"
            alt="image_one"
            className=" h-[540px] w-[500px]"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 mx-auto md:mx-7">
        <Img src="images/pink.png" alt="frame_one" className="md:hidden" />
        <Text size="2xl" className="my-4">
          <span className="whitespace-nowrap">
            Hello! I'm <></> 
          <span className="bg-amber-300">Rukaiya</span>
        </span>
        </Text>
        <Text size="xs" className="mb-3 text-justify">
          A passionate UI/UX designer with a knack for creating intuitive and
          visually appealing digital experiences. With a keen eye for detail and
          a love for problem-solving, I thrive on turning complex concepts into
          simple and elegant designs that delight users.
        </Text>
        <Text size="xs" className="mb-3 text-justify">
          My journey into the world of design began Since then, I've been on a
          mission to continuously hone my craft and stay updated with the latest
          design trends and technologies.
        </Text>
        <div className="flex justify-between py-9">
          <Button
            color="light_blue_100"
            size="md"
            shape="round"
            className="bg-light_blue_100 w-1/2 sm:min-w-[200px] border-8 border-solid border-black-900_01 font-bold sm:text-lg"
          >
            Download CV
          </Button>
          <Img
            src="images/img_clock.svg"
            alt="clock_one"
            className="h-[66px] w-[26%] sm:w-[18%] object-fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;