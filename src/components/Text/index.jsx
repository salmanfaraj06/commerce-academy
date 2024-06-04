import React from "react";

const sizes = {
  xs: "text-[20px] ",
  lg: "text-[36px] font-normal md:text-3xl sm:text-[29px]",
  s: "lg:text-[20px] font-medium md:text-[18px] text-[16px]",
  "2xl": "lg:text-4xl font-medium md:text-[33px] text-[28px]",
  "3xl": "text-[72px] font-medium  md:text-[46px]",
  xl: "text-4xl font-bold md:text-[22px] sm:text-[18px]",
  md: "text-[28px] font-medium md:text-[26px] sm:text-[24px]",
  mypro: " text-center lg:text-[52px] font-medium md:text-[36px] text-[30px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`font-open-sans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
