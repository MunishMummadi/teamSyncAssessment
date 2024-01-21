/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeDefaultSizeXsColorSuccess = ({ color = "#DCFAE6", fill = "#17B26A", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={color} height="20" rx="10" width="20" />
      <path
        clipRule="evenodd"
        d="M14.2471 6.15838L8.28042 11.9167L6.69709 10.2251C6.40542 9.95005 5.94709 9.93338 5.61375 10.1667C5.28875 10.4084 5.19709 10.8334 5.39709 11.1751L7.27209 14.2251C7.45542 14.5084 7.77209 14.6834 8.13042 14.6834C8.47209 14.6834 8.79709 14.5084 8.98042 14.2251C9.28042 13.8334 15.0054 7.00838 15.0054 7.00838C15.7554 6.24172 14.8471 5.56672 14.2471 6.15005V6.15838Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

TypeDefaultSizeXsColorSuccess.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
