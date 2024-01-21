/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeDefaultSize2XlColorSuccess = ({ color = "#DCFAE6", fill = "#17B26A", className }) => {
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
        clipRule="evenodd"
        d="M28.4939 12.3167L16.5606 23.8334L13.3939 20.45C12.8106 19.9 11.8939 19.8667 11.2273 20.3334C10.5773 20.8167 10.3939 21.6667 10.7939 22.35L14.5439 28.45C14.9106 29.0167 15.5439 29.3667 16.2606 29.3667C16.9439 29.3667 17.5939 29.0167 17.9606 28.45C18.5606 27.6667 30.0106 14.0167 30.0106 14.0167C31.5106 12.4834 29.6939 11.1334 28.4939 12.3V12.3167Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

TypeDefaultSize2XlColorSuccess.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
