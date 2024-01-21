/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";

export const FooterLink = ({
  badge,
  color,
  theme,
  stateProp,
  className,
  buttonTextClassName,
  buttonText = "Overview",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    badge: badge || false,
    color: color || "gray",
    theme: theme || "light",
    state: stateProp || "default",
  });

  return (
    <div
      className={`inline-flex items-center gap-[8px] relative ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <Button
        className="!flex-[0_0_auto]"
        destructive={false}
        hierarchy={state.color === "primary" ? "link-color" : "link-gray"}
        icon="default"
        iconLeading={false}
        iconTrailing={false}
        size="lg"
        stateProp={
          (!state.badge && state.color === "gray" && state.state === "hover" && state.theme === "light") ||
          (state.badge && state.state === "hover" && state.theme === "light")
            ? "hover"
            : "default"
        }
        text={!state.badge ? buttonText : "Overview"}
        textClassName={
          state.badge && state.color === "gray" && state.theme === "dark" && state.state === "default"
            ? "!text-gray-200"
            : state.badge && state.state === "default" && state.theme === "dark" && state.color === "primary"
            ? "!text-primary-200"
            : state.badge && state.theme === "dark" && state.state === "hover"
            ? "!text-basewhite"
            : !state.badge
            ? buttonTextClassName
            : undefined
        }
      />
      {state.badge && (
        <div
          className={`inline-flex items-center flex-[0_0_auto] px-[8px] py-[2px] rounded-[16px] relative ${
            state.theme === "light" && state.color === "primary" ? "border-[1.5px] border-solid" : "border border-solid"
          } ${
            state.theme === "light" && state.color === "primary"
              ? "border-primary-600"
              : state.color === "gray" && state.theme === "dark"
              ? "border-gray-200"
              : state.theme === "dark" && state.color === "primary"
              ? "border-primary-200"
              : "border-success-200"
          } ${state.color === "gray" && state.theme === "light" ? "mix-blend-multiply" : ""} ${
            state.color === "gray" && state.theme === "light"
              ? "bg-success-50"
              : state.theme === "dark"
              ? "bg-[#ffffff1a]"
              : ""
          }`}
        >
          <div
            className={`font-text-xs-medium w-fit tracking-[var(--text-xs-medium-letter-spacing)] text-[length:var(--text-xs-medium-font-size)] [font-style:var(--text-xs-medium-font-style)] relative font-[number:var(--text-xs-medium-font-weight)] text-center whitespace-nowrap leading-[var(--text-xs-medium-line-height)] ${
              state.theme === "light" && state.color === "primary" ? "mt-[-1.50px]" : "mt-[-1.00px]"
            } ${
              state.theme === "light" && state.color === "primary"
                ? "text-primary-700"
                : state.theme === "dark"
                ? "text-basewhite"
                : "text-success-700"
            }`}
          >
            New
          </div>
        </div>
      )}
    </div>
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

FooterLink.propTypes = {
  badge: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "gray"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  buttonText: PropTypes.string,
};
