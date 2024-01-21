/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFilledSizeXlColorPrimary = ({ color = "#7F56D9", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={color} height="36" rx="18" width="36" />
      <path
        d="M11.25 18L15.75 22.5L24.75 13.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

TypeFilledSizeXlColorPrimary.propTypes = {
  color: PropTypes.string,
};
