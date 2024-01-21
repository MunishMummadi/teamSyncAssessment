/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFilledSizeMdColorGray = ({ color = "#475467", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={color} height="28" rx="14" width="28" />
      <path
        d="M8.75 14L12.25 17.5L19.25 10.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.33333"
      />
    </svg>
  );
};

TypeFilledSizeMdColorGray.propTypes = {
  color: PropTypes.string,
};
