/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeDefaultSizeXlColorSuccess = ({ color = "#DCFAE6", fill = "#17B26A", className }) => {
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
        clipRule="evenodd"
        d="M25.6448 11.0851L14.9048 21.4501L12.0548 18.4051C11.5298 17.9101 10.7048 17.8801 10.1048 18.3001C9.51976 18.7351 9.35475 19.5001 9.71475 20.1151L13.0898 25.6051C13.4198 26.1151 13.9898 26.4301 14.6348 26.4301C15.2498 26.4301 15.8348 26.1151 16.1648 25.6051C16.7048 24.9001 27.0098 12.6151 27.0098 12.6151C28.3598 11.2351 26.7248 10.0201 25.6448 11.0701V11.0851Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

TypeDefaultSizeXlColorSuccess.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
