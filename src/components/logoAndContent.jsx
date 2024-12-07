import React from "react";
import PageLogo from "../media/icons/ASAFLogo";

const LogoAndContent = () => {
  return (
    <div className="relative  md:right-10 md:pr-[5rem]">
      <PageLogo />
      <div>
        <h4 className="text-center font-kalameh text-white text-2xl ">
          آینده سازان آسایش فردا
        </h4>
        <span className="text-center font-kalameh text-white text-sm sm:pb-[5rem]">Future builders of tomorrow's comfort</span>
      </div>
    </div>
  );
};

export default LogoAndContent;
