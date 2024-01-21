/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeDefaultSizeLgColorPrimary = ({ color = "#F4EBFF", fill = "#9E77ED", className }) => {
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
      <path
        clipRule="evenodd"
        d="M22.7953 9.8534L13.2487 19.0667L10.7153 16.3601C10.2487 15.9201 9.51534 15.8934 8.982 16.2667C8.462 16.6534 8.31534 17.3334 8.63534 17.8801L11.6353 22.7601C11.9287 23.2134 12.4353 23.4934 13.0087 23.4934C13.5553 23.4934 14.0753 23.2134 14.3687 22.7601C14.8487 22.1334 24.0087 11.2134 24.0087 11.2134C25.2087 9.98674 23.7553 8.90674 22.7953 9.84007V9.8534Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

TypeDefaultSizeLgColorPrimary.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
