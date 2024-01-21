/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFilledSize2XlColorGray = ({ color = "#475467", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={color} height="40" rx="20" width="40" />
      <path
        d="M12.5 20L17.5 25L27.5 15"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.33333"
      />
    </svg>
  );
};

TypeFilledSize2XlColorGray.propTypes = {
  color: PropTypes.string,
};
