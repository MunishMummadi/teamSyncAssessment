/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StarIcon = ({ fill, color, className }) => {
  return (
    <div className={`w-[20px] h-[20px] ${fill === "zero" ? "relative" : ""} ${className}`}>
      {(fill === "eighty" ||
        fill === "fifty" ||
        fill === "forty" ||
        fill === "ninety" ||
        fill === "one-hundred" ||
        fill === "seventy" ||
        fill === "sixty" ||
        fill === "ten" ||
        fill === "thirty" ||
        fill === "twenty") && (
        <div
          className={`h-[20px] relative ${
            fill === "eighty" ||
            fill === "fifty" ||
            fill === "forty" ||
            fill === "ninety" ||
            fill === "seventy" ||
            fill === "sixty" ||
            fill === "ten" ||
            fill === "thirty" ||
            fill === "twenty"
              ? "w-[19px]"
              : ""
          }`}
        >
          <img
            className="w-[18px] left-px top-px h-[17px] absolute"
            alt="Star background"
            src="/img/star-background-5.svg"
          />
          <div
            className={`left-0 top-0 h-[20px] absolute ${
              fill === "twenty"
                ? "w-[5px]"
                : fill === "thirty"
                ? "w-[7px]"
                : fill === "forty"
                ? "w-[9px]"
                : fill === "fifty"
                ? "w-[10px]"
                : fill === "sixty"
                ? "w-[11px]"
                : fill === "seventy"
                ? "w-[13px]"
                : fill === "eighty"
                ? "w-[15px]"
                : fill === "ninety"
                ? "w-[17px]"
                : fill === "one-hundred"
                ? "w-[20px]"
                : "w-[3px]"
            }`}
          >
            <img
              className={`left-px top-px h-[17px] absolute ${
                fill === "twenty"
                  ? "w-[4px]"
                  : fill === "thirty"
                  ? "w-[6px]"
                  : fill === "forty"
                  ? "w-[8px]"
                  : fill === "fifty"
                  ? "w-[9px]"
                  : fill === "sixty"
                  ? "w-[10px]"
                  : fill === "seventy"
                  ? "w-[12px]"
                  : fill === "eighty"
                  ? "w-[14px]"
                  : fill === "ninety"
                  ? "w-[16px]"
                  : fill === "one-hundred"
                  ? "w-[18px]"
                  : "w-[2px]"
              }`}
              alt="Star"
              src={
                fill === "ten" && color === "gray"
                  ? "/img/star-25.svg"
                  : color === "yellow" && fill === "twenty"
                  ? "/img/star-22.svg"
                  : color === "gray" && fill === "twenty"
                  ? "/img/star-21.svg"
                  : color === "yellow" && fill === "thirty"
                  ? "/img/star-20.svg"
                  : color === "gray" && fill === "thirty"
                  ? "/img/star-19.svg"
                  : color === "yellow" && fill === "forty"
                  ? "/img/star-18.svg"
                  : color === "gray" && fill === "forty"
                  ? "/img/star-17.svg"
                  : fill === "fifty" && color === "yellow"
                  ? "/img/star-16.svg"
                  : color === "gray" && fill === "fifty"
                  ? "/img/star-15.svg"
                  : color === "yellow" && fill === "sixty"
                  ? "/img/star-14.svg"
                  : color === "gray" && fill === "sixty"
                  ? "/img/star-13.svg"
                  : color === "yellow" && fill === "seventy"
                  ? "/img/star-12.svg"
                  : color === "gray" && fill === "seventy"
                  ? "/img/star-11.svg"
                  : fill === "eighty" && color === "yellow"
                  ? "/img/star-10.svg"
                  : color === "gray" && fill === "eighty"
                  ? "/img/star-9.svg"
                  : fill === "ninety" && color === "yellow"
                  ? "/img/star-8.svg"
                  : fill === "ninety" && color === "gray"
                  ? "/img/star-7.svg"
                  : color === "yellow" && fill === "one-hundred"
                  ? "/img/star-6.svg"
                  : color === "gray" && fill === "one-hundred"
                  ? "/img/star-5.svg"
                  : "/img/star-26.svg"
              }
            />
          </div>
        </div>
      )}

      {fill === "zero" && (
        <>
          <img
            className="w-[18px] left-px top-px h-[17px] absolute"
            alt="Star background"
            src="/img/star-background-5.svg"
          />
          <div className="w-px left-0 top-0 h-[20px] overflow-hidden absolute">
            <img
              className="w-[20px] left-[-4107px] top-[-586px] h-[20px] absolute"
              alt="Star"
              src={color === "gray" ? "/img/star-23.svg" : "/img/star-24.svg"}
            />
          </div>
        </>
      )}
    </div>
  );
};

StarIcon.propTypes = {
  fill: PropTypes.oneOf([
    "sixty",
    "zero",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "ten",
    "fifty",
    "forty",
    "ninety",
    "seventy",
  ]),
  color: PropTypes.oneOf(["yellow", "gray"]),
};
