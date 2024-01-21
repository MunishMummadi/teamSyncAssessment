/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFilledSizeLgColorSuccess = ({ color = "#079455", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={color} height="32" rx="16" width="32" />
      <path d="M10 16L14 20L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
};

TypeFilledSizeLgColorSuccess.propTypes = {
  color: PropTypes.string,
};
