/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Plus1 } from "../../icons/Plus1";
import { Plus8 } from "../../icons/Plus8";

export const AvatarAddButton = ({ size, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xs",
    state: stateProp || "default",
  });

  return (
    <div
      className={`border border-dashed ${state.state === "disabled" ? "border-gray-200" : "border-gray-300"} ${
        state.size === "sm" ? "w-[34px]" : state.size === "md" ? "w-[42px]" : "w-[26px]"
      } ${state.state === "focus" ? "shadow-focus-ring-4px-gray-100" : ""} ${
        state.size === "sm" ? "h-[34px]" : state.size === "md" ? "h-[42px]" : "h-[26px]"
      } ${state.state === "focus" ? "overflow-hidden" : ""} ${
        state.size === "sm" ? "rounded-[16px]" : state.size === "md" ? "rounded-[20px]" : "rounded-[12px]"
      } ${["disabled", "hover"].includes(state.state) ? "bg-gray-50" : "bg-basewhite"} ${
        state.state === "hover" ? "relative" : ""
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["default", "disabled", "focus"].includes(state.state) && (
        <div
          className={`inline-flex items-center p-[4px] overflow-hidden rounded-[12px] justify-center relative ${
            state.size === "sm" ? "left-[4px]" : state.size === "md" ? "left-[6px]" : ""
          } ${state.size === "sm" ? "top-[4px]" : state.size === "md" ? "top-[6px]" : ""}`}
        >
          {["sm", "xs"].includes(state.size) && (
            <Plus8
              className="!relative !w-[16px] !h-[16px]"
              color={state.state === "disabled" ? "#EAECF0" : "#98A2B3"}
            />
          )}

          {state.size === "md" && (
            <Plus1
              className="!relative !w-[20px] !h-[20px]"
              color={state.state === "disabled" ? "#EAECF0" : "#98A2B3"}
            />
          )}
        </div>
      )}

      {state.state === "hover" && (
        <>
          <div
            className={`absolute ${state.size === "md" ? "w-[42px]" : "w-[36px]"} ${
              state.size === "sm" ? "left-[4px]" : state.size === "md" ? "left-[6px]" : "left-0"
            } ${state.size === "sm" ? "top-[4px]" : state.size === "md" ? "top-[6px]" : "top-0"} ${
              state.size === "md" ? "h-[38px]" : "h-[32px]"
            }`}
          >
            <div className="left-0 inline-flex items-center top-0 p-[4px] overflow-hidden rounded-[12px] justify-center absolute">
              {["sm", "xs"].includes(state.size) && <Plus8 className="!relative !w-[16px] !h-[16px]" color="#667085" />}

              {state.size === "md" && <Plus1 className="!relative !w-[20px] !h-[20px]" color="#667085" />}
            </div>
            <div
              className={`w-[20px] h-[20px] absolute ${state.size === "md" ? "left-[22px]" : "left-[16px]"} ${
                state.size === "md" ? "top-[18px]" : "top-[12px]"
              }`}
            >
              <div
                className={`w-[19px] bg-[100%_100%] top-px h-[21px] relative ${
                  state.size === "sm"
                    ? "bg-[url(/static/img/shape-1.svg)]"
                    : state.size === "md"
                    ? "bg-[url(/static/img/shape.svg)]"
                    : "bg-[url(/static/img/shape-2.svg)]"
                }`}
              >
                <img className="w-[5px] left-[8px] top-[10px] h-[4px] absolute" alt="Lines" src="/img/lines.svg" />
              </div>
            </div>
          </div>
          <div
            className={`inline-flex flex-col items-center top-[-43px] shadow-shadow-lg absolute ${
              state.size === "sm" ? "left-[-22px]" : state.size === "md" ? "left-[-18px]" : "left-[-26px]"
            }`}
          >
            <div className="w-full flex self-stretch flex-col items-start flex-[0_0_auto] px-[12px] py-[8px] rounded-[8px] bg-gray-900 relative">
              <div
                className={`font-text-xs-semibold w-fit mt-[-1.00px] tracking-[var(--text-xs-semibold-letter-spacing)] text-[length:var(--text-xs-semibold-font-size)] [font-style:var(--text-xs-semibold-font-style)] relative font-[number:var(--text-xs-semibold-font-weight)] text-center whitespace-nowrap leading-[var(--text-xs-semibold-line-height)] ${
                  state.size === "md" ? "text-basewhite" : "text-gray-50"
                }`}
              >
                Add user
              </div>
            </div>
            <img
              className={`w-[16px] mt-[-539.00px] h-[6px] relative ${
                state.size === "sm" ? "ml-[-1305.00px]" : state.size === "md" ? "ml-[-1309.00px]" : "ml-[-1301.50px]"
              }`}
              alt="Tooltip"
              src="/img/tooltip.svg"
            />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.size === "xs" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "xs",
          state: "hover",
        };
    }
  }

  if (state.size === "sm" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "sm",
          state: "hover",
        };
    }
  }

  if (state.size === "md" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "md",
          state: "hover",
        };
    }
  }

  if (state.size === "xs" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "xs",
          state: "hover",
        };
    }
  }

  if (state.size === "sm" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "sm",
          state: "hover",
        };
    }
  }

  if (state.size === "md" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "md",
          state: "hover",
        };
    }
  }

  if (state.size === "xs" && state.state === "hover") {
    switch (action) {
      case "click":
        return {
          size: "xs",
          state: "focus",
        };

      case "mouse_leave":
        return {
          size: "xs",
          state: "default",
        };
    }
  }

  if (state.size === "sm" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "sm",
          state: "default",
        };

      case "click":
        return {
          size: "sm",
          state: "focus",
        };
    }
  }

  if (state.size === "md" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "md",
          state: "default",
        };

      case "click":
        return {
          size: "md",
          state: "focus",
        };
    }
  }

  return state;
}

AvatarAddButton.propTypes = {
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  stateProp: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
};
