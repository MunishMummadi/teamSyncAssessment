/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckCircle12 = ({ color = "#475467", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 16L14.0001 20L22.0001 12M29.3334 16C29.3334 23.3638 23.3639 29.3334 16.0001 29.3334C8.63628 29.3334 2.66675 23.3638 2.66675 16C2.66675 8.63622 8.63628 2.66669 16.0001 2.66669C23.3639 2.66669 29.3334 8.63622 29.3334 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.66667"
      />
    </svg>
  );
};

CheckCircle12.propTypes = {
  color: PropTypes.string,
};
