/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronDown3 = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 19 18"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.19183 6.75L9.69183 11.25L14.1918 6.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ChevronDown3.propTypes = {
  color: PropTypes.string,
};
