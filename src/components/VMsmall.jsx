import smallEyeVision from "../assets/images/smallEyeVision.png";
import smallArrowMission from "../assets/images/smallArrowMission.png";

function VisionMissionSmall() {
  return (
    <div className="min-h-screen bg-white px-[5%] md:px-[10%] flex flex-col space-y-8 pt-16 pb-16">
      <div className="border border-black-900 rounded-2xl relative h-[60vh] md:h-[70vh] flex flex-col justify-between bg-transparent p-5">
        <img
          className="absolute top-5 right-5 w-28 md:w-32"
          src={smallEyeVision}
          alt="vision image"
          loading="lazy"
        />
        <div className="relative text-black-900 mt-auto">
          <div className="w-full">
            <h1 className="text-[24px] md:text-[28px] leading-[40px] md:leading-[48px] font-thin">
              <span> Our </span>
              <span className="font-extrabold">Vision</span>
            </h1>
            <p className="text-[12px] md:text-[14px] mt-auto font-poppins">
              To be an exemplary CSR Foundation helping to alleviate poverty,
              support environmental conservation, and advocate for social
              justice to contribute to the greater good of society.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-black-900 rounded-2xl relative h-[60vh] md:h-[70vh] flex flex-col justify-between bg-transparent p-5">
        <img
          className="absolute top-5 right-5 w-28 md:w-32"
          src={smallArrowMission}
          alt="mission image"
          loading="lazy"
        />
        <div className="relative text-black-900 mt-auto">
          <div className="w-full">
            <h1 className="text-[24px] md:text-[28px] leading-[40px] md:leading-[48px] font-thin">
              <span>Our </span>
              <span className="font-extrabold">Mission</span>
            </h1>
            <p className="text-[12px] md:text-[14px] mt-auto font-poppins">
              To strive to create opportunities for economic independence,
              enhancing education and healthcare, and promoting sustainable and
              equitable development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionSmall;