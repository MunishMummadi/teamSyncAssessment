/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Calendar1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10.5H3M16 2.5V6.5M8 2.5V6.5M7.8 22.5H16.2C17.8802 22.5 18.7202 22.5 19.362 22.173C19.9265 21.8854 20.3854 21.4265 20.673 20.862C21 20.2202 21 19.3802 21 17.7V9.3C21 7.61984 21 6.77976 20.673 6.13803C20.3854 5.57354 19.9265 5.1146 19.362 4.82698C18.7202 4.5 17.8802 4.5 16.2 4.5H7.8C6.11984 4.5 5.27976 4.5 4.63803 4.82698C4.07354 5.1146 3.6146 5.57354 3.32698 6.13803C3 6.77976 3 7.61984 3 9.3V17.7C3 19.3802 3 20.2202 3.32698 20.862C3.6146 21.4265 4.07354 21.8854 4.63803 22.173C5.27976 22.5 6.11984 22.5 7.8 22.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Calendar1.propTypes = {
  color: PropTypes.string,
};
