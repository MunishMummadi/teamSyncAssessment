/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeDefaultSizeMdColorGray = ({ color = "#F2F4F7", fill = "#667085", className }) => {
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
        clipRule="evenodd"
        d="M19.9459 8.62169L11.5926 16.6834L9.37592 14.315C8.96759 13.93 8.32592 13.9067 7.85925 14.2334C7.40425 14.5717 7.27592 15.1667 7.55592 15.645L10.1809 19.915C10.4376 20.3117 10.8809 20.5567 11.3826 20.5567C11.8609 20.5567 12.3159 20.3117 12.5726 19.915C12.9926 19.3667 21.0076 9.81169 21.0076 9.81169C22.0576 8.73836 20.7859 7.79336 19.9459 8.61002V8.62169Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

TypeDefaultSizeMdColorGray.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
