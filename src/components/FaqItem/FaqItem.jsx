/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { MinusCircle2 } from "../../icons/MinusCircle2";
import { PlusCircle5 } from "../../icons/PlusCircle5";

export const FaqItem = ({
  icon = true,
  expanded,
  divider,
  breakpoint,
  iconPosition,
  className,
  textClassName,
  text = "Is there a free trial available?",
  supportingTextClassName,
  text1 = "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  textClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    expanded: expanded || true,
    divider: divider || false,
    breakpoint: breakpoint || "desktop",
    iconPosition: iconPosition || "right",
  });

  return (
    <div
      className={`flex flex-col items-center relative ${state.divider ? "border-gray-200" : ""} ${
        state.breakpoint === "mobile" ? "w-[343px]" : "w-[768px]"
      } ${state.divider ? "border-t" : ""} ${state.divider ? "[border-top-style:solid]" : ""} ${
        state.divider ? "pt-[24px] pb-0 px-0" : ""
      } ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div
        className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${
          state.breakpoint === "desktop"
            ? "gap-[24px]"
            : state.iconPosition === "left" && state.breakpoint === "mobile"
            ? "gap-[16px]"
            : "gap-[8px]"
        }`}
      >
        {state.iconPosition === "left" && (
          <>
            <>
              {icon && (
                <div className="inline-flex flex-col items-start flex-[0_0_auto] pt-[2px] pb-0 px-0 relative">
                  {state.expanded && <MinusCircle2 className="!relative !w-[24px] !h-[24px]" color="#98A2B3" />}

                  {!state.expanded && <PlusCircle5 className="!relative !w-[24px] !h-[24px]" color="#98A2B3" />}
                </div>
              )}
            </>
          </>
        )}

        <div className="flex flex-col items-start grow gap-[8px] flex-1 relative">
          <p
            className={`font-text-lg-medium self-stretch mt-[-1.00px] tracking-[var(--text-lg-medium-letter-spacing)] text-[length:var(--text-lg-medium-font-size)] [font-style:var(--text-lg-medium-font-style)] text-gray-900 relative font-[number:var(--text-lg-medium-font-weight)] leading-[var(--text-lg-medium-line-height)] ${
              state.iconPosition === "right" && !state.expanded
                ? textClassNameOverride
                : state.iconPosition === "right" && state.expanded
                ? textClassName
                : undefined
            }`}
          >
            {text}
          </p>
          {state.expanded && (
            <p
              className={`font-text-md-regular self-stretch [font-style:var(--text-md-regular-font-style)] tracking-[var(--text-md-regular-letter-spacing)] text-[length:var(--text-md-regular-font-size)] text-gray-600 font-[number:var(--text-md-regular-font-weight)] leading-[var(--text-md-regular-line-height)] relative ${
                state.iconPosition === "right" ? supportingTextClassName : undefined
              }`}
            >
              {text1}
            </p>
          )}
        </div>
        {state.iconPosition === "right" && (
          <>
            <>
              {icon && (
                <div className="inline-flex flex-col items-start flex-[0_0_auto] pt-[2px] pb-0 px-0 relative">
                  {state.expanded && <MinusCircle2 className="!relative !w-[24px] !h-[24px]" color="#98A2B3" />}

                  {!state.expanded && <PlusCircle5 className="!relative !w-[24px] !h-[24px]" color="#98A2B3" />}
                </div>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  return state;
}

FaqItem.propTypes = {
  icon: PropTypes.bool,
  expanded: PropTypes.bool,
  divider: PropTypes.bool,
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  iconPosition: PropTypes.oneOf(["right", "left"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
