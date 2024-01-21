/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowLeft3 } from "../../icons/ArrowLeft3";
import { ArrowLeft7 } from "../../icons/ArrowLeft7";
import { ArrowRight3 } from "../../icons/ArrowRight3";
import { ArrowRight5 } from "../../icons/ArrowRight5";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronLeft5 } from "../../icons/ChevronLeft5";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { ChevronRight4 } from "../../icons/ChevronRight4";

export const Testiomonial = ({
  size,
  arrow,
  type,
  stateProp,
  sizeLgArrowLeftClassName,
  arrowLeft7Color = "#667085",
  arrowRight5Color = "#667085",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "lg",
    arrow: arrow || "left",
    type: type || "button-chevron",
    state: stateProp || "default",
  });

  return (
    <>
      {["button-arrow", "button-chevron"].includes(state.type) && (
        <div
          className={`flex items-center shadow-background-blur-sm [-webkit-backdrop-filter:blur(8px)_brightness(100%)] relative rounded-[28px] backdrop-blur backdrop-brightness-[100%] gap-[12px] border border-solid justify-center ${
            state.state === "disabled" ? "border-gray-100" : "border-gray-200"
          } ${state.size === "md" ? "w-[48px]" : "w-[56px]"} ${
            state.state === "hover" ? "bg-gray-50" : "bg-[#ffffffe6]"
          } ${state.size === "md" ? "h-[48px]" : "h-[56px]"} ${sizeLgArrowLeftClassName}`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
        >
          {state.size === "lg" && state.arrow === "left" && state.type === "button-chevron" && (
            <ChevronLeft5
              className="!relative !w-[24px] !h-[24px]"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.arrow === "left" && state.size === "md" && state.type === "button-chevron" && (
            <ChevronLeft
              className="!relative !w-[20px] !h-[20px]"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.size === "lg" && state.arrow === "left" && state.type === "button-arrow" && (
            <ArrowLeft7 className="!relative !w-[24px] !h-[24px]" color={arrowLeft7Color} />
          )}

          {state.arrow === "left" && state.size === "md" && state.type === "button-arrow" && (
            <ArrowLeft3
              className="!relative !w-[20px] !h-[20px]"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.size === "lg" && state.arrow === "right" && state.type === "button-chevron" && (
            <ChevronRight4
              className="!relative !w-[24px] !h-[24px]"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.arrow === "right" && state.size === "md" && state.type === "button-chevron" && (
            <ChevronRight1
              className="!relative !w-[20px] !h-[20px]"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.size === "lg" && state.arrow === "right" && state.type === "button-arrow" && (
            <ArrowRight5 className="!relative !w-[24px] !h-[24px]" color={arrowRight5Color} />
          )}

          {state.arrow === "right" && state.size === "md" && state.type === "button-arrow" && (
            <ArrowRight3
              className="!relative !w-[20px] !h-[20px]"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}
        </div>
      )}

      {state.type === "arrow" && (
        <img
          className={`left-0 top-0 absolute ${state.size === "md" ? "w-[40px]" : "w-[48px]"} ${
            state.size === "md" ? "h-[20px]" : "h-[24px]"
          } ${sizeLgArrowLeftClassName}`}
          alt="Size lg arrow left"
          src={
            state.size === "lg" && state.arrow === "left" && state.state === "disabled"
              ? "/img/size-lg-arrow-left-type-arrow-state-disabled.svg"
              : state.size === "lg" && state.arrow === "left" && state.state === "hover"
              ? "/img/size-lg-arrow-left-type-arrow-state-hover.svg"
              : state.state === "default" && state.arrow === "left" && state.size === "md"
              ? "/img/size-md-arrow-left-type-arrow-state-default.svg"
              : state.size === "md" && state.arrow === "left" && state.state === "disabled"
              ? "/img/size-md-arrow-left-type-arrow-state-disabled.svg"
              : state.arrow === "left" && state.size === "md" && state.state === "hover"
              ? "/img/size-md-arrow-left-type-arrow-state-hover.svg"
              : state.state === "default" && state.size === "lg" && state.arrow === "right"
              ? "/img/size-lg-arrow-right-type-arrow-state-default.svg"
              : state.size === "lg" && state.arrow === "right" && state.state === "disabled"
              ? "/img/size-lg-arrow-right-type-arrow-state-disabled.svg"
              : state.size === "lg" && state.arrow === "right" && state.state === "hover"
              ? "/img/size-lg-arrow-right-type-arrow-state-hover.svg"
              : state.state === "default" && state.arrow === "right" && state.size === "md"
              ? "/img/size-md-arrow-right-type-arrow-state-default.svg"
              : state.size === "md" && state.arrow === "right" && state.state === "disabled"
              ? "/img/size-md-arrow-right-type-arrow-state-disabled.svg"
              : state.arrow === "right" && state.size === "md" && state.state === "hover"
              ? "/img/size-md-arrow-right-type-arrow-state-hover.svg"
              : "/img/size-lg-arrow-left-type-arrow-state-default.svg"
          }
        />
      )}
    </>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Testiomonial.propTypes = {
  size: PropTypes.oneOf(["md", "lg"]),
  arrow: PropTypes.oneOf(["right", "left"]),
  type: PropTypes.oneOf(["arrow", "button-arrow", "button-chevron"]),
  stateProp: PropTypes.oneOf(["disabled", "hover", "default"]),
  arrowLeft7Color: PropTypes.string,
  arrowRight5Color: PropTypes.string,
};
