/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const BackgroundPattern = ({
  backgroundMask = true,
  background,
  size,
  type,
  breakpoint,
  backgroundTrueSizeClassName,
  backgroundTrueSize = "/img/background-true-size-md-type-grid-check-breakpoint-desktop.svg",
}) => {
  return (
    <>
      {background && (
        <img
          className={`left-0 top-0 absolute ${breakpoint === "mobile" ? "w-[960px]" : "w-[1920px]"} ${
            breakpoint === "mobile" ? "h-[960px]" : "h-[1440px]"
          } ${backgroundTrueSizeClassName}`}
          alt="Background true size"
          src={
            size === "md" && breakpoint === "desktop" && type === "grid-check"
              ? backgroundTrueSize
              : size === "md" && breakpoint === "desktop" && type === "grid-dot"
              ? "/img/background-true-size-md-type-grid-dot-breakpoint-desktop.svg"
              : type === "grid" && size === "md" && breakpoint === "desktop"
              ? "/img/background-true-size-md-type-grid-breakpoint-desktop.svg"
              : type === "grid" && size === "sm" && breakpoint === "desktop"
              ? "/img/background-true-size-sm-type-grid-breakpoint-desktop.svg"
              : size === "sm" && breakpoint === "desktop" && type === "grid-check"
              ? "/img/background-true-size-sm-type-grid-check-breakpoint-desktop.svg"
              : size === "sm" && breakpoint === "desktop" && type === "grid-dot"
              ? "/img/background-true-size-sm-type-grid-dot-breakpoint-desktop.svg"
              : breakpoint === "mobile" && size === "md" && type === "grid-check"
              ? "/img/background-true-size-md-type-grid-check-breakpoint-mobile.svg"
              : breakpoint === "mobile" && size === "md" && type === "grid-dot"
              ? "/img/background-true-size-md-type-grid-dot-breakpoint-mobile.svg"
              : type === "grid" && size === "md" && breakpoint === "mobile"
              ? "/img/background-true-size-md-type-grid-breakpoint-mobile.svg"
              : type === "grid" && size === "sm" && breakpoint === "mobile"
              ? "/img/background-true-size-sm-type-grid-breakpoint-mobile.svg"
              : breakpoint === "mobile" && size === "sm" && type === "grid-check"
              ? "/img/background-true-size-sm-type-grid-check-breakpoint-mobile.svg"
              : breakpoint === "mobile" && size === "sm" && type === "grid-dot"
              ? "/img/background-true-size-sm-type-grid-dot-breakpoint-mobile.svg"
              : undefined
          }
        />
      )}

      {type === "empty" && (
        <div
          className={`${breakpoint === "mobile" ? "w-[960px]" : "w-[1920px]"} ${
            breakpoint === "mobile" ? "h-[960px]" : "h-[1440px]"
          } ${backgroundTrueSizeClassName}`}
        />
      )}
    </>
  );
};

BackgroundPattern.propTypes = {
  backgroundMask: PropTypes.bool,
  background: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.oneOf(["grid", "grid-dot", "empty", "grid-check"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  backgroundTrueSize: PropTypes.string,
};
