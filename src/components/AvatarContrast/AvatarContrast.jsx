/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AvatarContrast = ({ weight, className }) => {
  return (
    <div
      className={`border-gray-900 opacity-[0.08] rounded-[200px] ${
        weight === "regular"
          ? "border-[0.75px] border-solid"
          : weight === "light"
          ? "border-[0.5px] border-solid"
          : "border border-solid"
      } ${weight === "regular" ? "w-[64px]" : weight === "light" ? "w-[32px]" : "w-[96px]"} ${
        weight === "regular" ? "h-[64px]" : weight === "light" ? "h-[32px]" : "h-[96px]"
      } ${className}`}
    />
  );
};

AvatarContrast.propTypes = {
  weight: PropTypes.oneOf(["regular", "heavy", "light"]),
};
