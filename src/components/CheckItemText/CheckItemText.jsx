/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TypeDefaultSizeLgColorPrimary } from "../../icons/TypeDefaultSizeLgColorPrimary";
import { TypeDefaultSizeMdColorGray } from "../../icons/TypeDefaultSizeMdColorGray";
import { TypeDefaultSizeSmColorPrimary } from "../../icons/TypeDefaultSizeSmColorPrimary";
import { TypeDefaultSizeXlColorSuccess } from "../../icons/TypeDefaultSizeXlColorSuccess";
import { TypeFilledSizeLgColorSuccess } from "../../icons/TypeFilledSizeLgColorSuccess";
import { TypeFilledSizeMdColorGray } from "../../icons/TypeFilledSizeMdColorGray";
import { TypeFilledSizeSmColorSuccess } from "../../icons/TypeFilledSizeSmColorSuccess";
import { TypeFilledSizeXlColorPrimary } from "../../icons/TypeFilledSizeXlColorPrimary";
import { CheckIcon } from "../CheckIcon";

export const CheckItemText = ({
  type,
  size,
  color,
  breakpoint,
  className,
  checkIconTypeLineSizeSmClassName,
  textClassName,
  text = "All features and premium support",
}) => {
  return (
    <div
      className={`flex items-start gap-[12px] relative ${
        breakpoint === "mobile" ? "w-[343px]" : "w-[400px]"
      } ${className}`}
    >
      {type === "default" &&
        ["desktop", "mobile"].includes(breakpoint) &&
        (breakpoint === "desktop" || size === "xl") &&
        (breakpoint === "mobile" || size === "lg") &&
        ["lg", "xl"].includes(size) && (
          <TypeDefaultSizeLgColorPrimary
            className="!relative !w-[32px] !h-[32px]"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
        )}

      {type === "line" && (
        <CheckIcon
          color={color === "success" ? "success" : "primary"}
          size={
            size === "xl" && breakpoint === "desktop"
              ? "xl"
              : size === "md" || (breakpoint === "mobile" && size === "lg")
              ? "md"
              : size === "sm"
              ? "sm"
              : "lg"
          }
          type="line"
          typeLineSizeSmClassName={checkIconTypeLineSizeSmClassName}
        />
      )}

      {((breakpoint === "desktop" && size === "lg" && type === "default") ||
        (breakpoint === "mobile" && size === "xl" && type === "default") ||
        type === "line") && (
        <div
          className={`flex flex-col items-start grow flex-1 relative ${
            size === "xl" && breakpoint === "desktop" ? "pt-[4px] pb-0 px-0" : "pt-[2px] pb-0 px-0"
          }`}
        >
          <p
            className={`self-stretch mt-[-1.00px] text-gray-600 relative ${
              size === "xl" && breakpoint === "desktop"
                ? "font-text-xl-regular"
                : size === "sm" || (breakpoint === "mobile" && size === "md")
                ? "font-text-md-regular"
                : "font-text-lg-regular"
            } ${
              size === "xl" && breakpoint === "desktop"
                ? "tracking-[var(--text-xl-regular-letter-spacing)]"
                : size === "sm" || (breakpoint === "mobile" && size === "md")
                ? "tracking-[var(--text-md-regular-letter-spacing)]"
                : "tracking-[var(--text-lg-regular-letter-spacing)]"
            } ${
              size === "xl" && breakpoint === "desktop"
                ? "text-[length:var(--text-xl-regular-font-size)]"
                : size === "sm" || (breakpoint === "mobile" && size === "md")
                ? "text-[length:var(--text-md-regular-font-size)]"
                : "text-[length:var(--text-lg-regular-font-size)]"
            } ${
              size === "xl" && breakpoint === "desktop"
                ? "[font-style:var(--text-xl-regular-font-style)]"
                : size === "sm" || (breakpoint === "mobile" && size === "md")
                ? "[font-style:var(--text-md-regular-font-style)]"
                : "[font-style:var(--text-lg-regular-font-style)]"
            } ${
              size === "xl" && breakpoint === "desktop"
                ? "font-[number:var(--text-xl-regular-font-weight)]"
                : size === "sm" || (breakpoint === "mobile" && size === "md")
                ? "font-[number:var(--text-md-regular-font-weight)]"
                : "font-[number:var(--text-lg-regular-font-weight)]"
            } ${
              size === "xl" && breakpoint === "desktop"
                ? "leading-[var(--text-xl-regular-line-height)]"
                : size === "sm" || (breakpoint === "mobile" && size === "md")
                ? "leading-[var(--text-md-regular-line-height)]"
                : "leading-[var(--text-lg-regular-line-height)]"
            } ${textClassName}`}
          >
            {text}
          </p>
        </div>
      )}

      {type === "filled" &&
        ["desktop", "mobile"].includes(breakpoint) &&
        (breakpoint === "desktop" || size === "xl") &&
        (breakpoint === "mobile" || size === "lg") &&
        ["lg", "xl"].includes(size) && (
          <>
            <TypeFilledSizeLgColorSuccess
              className="!relative !w-[32px] !h-[32px]"
              color={color === "success" ? "#079455" : "#7F56D9"}
            />
            <div className="flex flex-col items-start grow flex-1 pt-[2px] pb-0 px-0 relative">
              <p
                className={`font-text-lg-regular self-stretch mt-[-1.00px] tracking-[var(--text-lg-regular-letter-spacing)] text-[length:var(--text-lg-regular-font-size)] [font-style:var(--text-lg-regular-font-style)] text-gray-600 font-[number:var(--text-lg-regular-font-weight)] leading-[var(--text-lg-regular-line-height)] relative ${textClassName}`}
              >
                {text}
              </p>
            </div>
          </>
        )}

      {type === "default" && size === "xl" && breakpoint === "desktop" && (
        <>
          <TypeDefaultSizeXlColorSuccess
            className="!relative !w-[36px] !h-[36px]"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
          <div className="flex flex-col items-start grow flex-1 pt-[4px] pb-0 px-0 relative">
            <p
              className={`font-text-xl-regular self-stretch mt-[-1.00px] tracking-[var(--text-xl-regular-letter-spacing)] text-[length:var(--text-xl-regular-font-size)] [font-style:var(--text-xl-regular-font-style)] text-gray-600 font-[number:var(--text-xl-regular-font-weight)] leading-[var(--text-xl-regular-line-height)] relative ${textClassName}`}
            >
              {text}
            </p>
          </div>
        </>
      )}

      {type === "filled" && size === "xl" && breakpoint === "desktop" && (
        <>
          <TypeFilledSizeXlColorPrimary
            className="!relative !w-[36px] !h-[36px]"
            color={color === "success" ? "#079455" : "#7F56D9"}
          />
          <div className="flex flex-col items-start grow flex-1 pt-[4px] pb-0 px-0 relative">
            <p
              className={`font-text-xl-regular self-stretch mt-[-1.00px] tracking-[var(--text-xl-regular-letter-spacing)] text-[length:var(--text-xl-regular-font-size)] [font-style:var(--text-xl-regular-font-style)] text-gray-600 font-[number:var(--text-xl-regular-font-weight)] leading-[var(--text-xl-regular-line-height)] relative ${textClassName}`}
            >
              {text}
            </p>
          </div>
        </>
      )}

      {type === "default" && (breakpoint === "mobile" || size === "md") && ["lg", "md"].includes(size) && (
        <>
          <TypeDefaultSizeMdColorGray
            className="!relative !w-[28px] !h-[28px]"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
          <div
            className={`flex flex-col items-start grow flex-1 relative ${
              breakpoint === "mobile" && size === "md" ? "pt-[2px] pb-0 px-0" : ""
            }`}
          >
            <p
              className={`self-stretch mt-[-1.00px] text-gray-600 relative ${
                breakpoint === "mobile" && size === "md" ? "font-text-md-regular" : "font-text-lg-regular"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "tracking-[var(--text-md-regular-letter-spacing)]"
                  : "tracking-[var(--text-lg-regular-letter-spacing)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "text-[length:var(--text-md-regular-font-size)]"
                  : "text-[length:var(--text-lg-regular-font-size)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "[font-style:var(--text-md-regular-font-style)]"
                  : "[font-style:var(--text-lg-regular-font-style)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "font-[number:var(--text-md-regular-font-weight)]"
                  : "font-[number:var(--text-lg-regular-font-weight)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "leading-[var(--text-md-regular-line-height)]"
                  : "leading-[var(--text-lg-regular-line-height)]"
              } ${textClassName}`}
            >
              {text}
            </p>
          </div>
        </>
      )}

      {type === "filled" && (breakpoint === "mobile" || size === "md") && ["lg", "md"].includes(size) && (
        <>
          <TypeFilledSizeMdColorGray
            className="!relative !w-[28px] !h-[28px]"
            color={color === "success" ? "#079455" : "#7F56D9"}
          />
          <div
            className={`flex flex-col items-start grow flex-1 relative ${
              breakpoint === "mobile" && size === "md" ? "pt-[2px] pb-0 px-0" : ""
            }`}
          >
            <p
              className={`self-stretch mt-[-1.00px] text-gray-600 relative ${
                breakpoint === "mobile" && size === "md" ? "font-text-md-regular" : "font-text-lg-regular"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "tracking-[var(--text-md-regular-letter-spacing)]"
                  : "tracking-[var(--text-lg-regular-letter-spacing)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "text-[length:var(--text-md-regular-font-size)]"
                  : "text-[length:var(--text-lg-regular-font-size)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "[font-style:var(--text-md-regular-font-style)]"
                  : "[font-style:var(--text-lg-regular-font-style)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "font-[number:var(--text-md-regular-font-weight)]"
                  : "font-[number:var(--text-lg-regular-font-weight)]"
              } ${
                breakpoint === "mobile" && size === "md"
                  ? "leading-[var(--text-md-regular-line-height)]"
                  : "leading-[var(--text-lg-regular-line-height)]"
              } ${textClassName}`}
            >
              {text}
            </p>
          </div>
        </>
      )}

      {size === "sm" && type === "default" && (
        <>
          <TypeDefaultSizeSmColorPrimary
            className="!relative !w-[24px] !h-[24px]"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
          <div className="flex flex-col items-start grow flex-1 relative">
            <p
              className={`font-text-md-regular self-stretch mt-[-1.00px] tracking-[var(--text-md-regular-letter-spacing)] text-[length:var(--text-md-regular-font-size)] [font-style:var(--text-md-regular-font-style)] text-gray-600 font-[number:var(--text-md-regular-font-weight)] leading-[var(--text-md-regular-line-height)] relative ${textClassName}`}
            >
              {text}
            </p>
          </div>
        </>
      )}

      {type === "filled" && size === "sm" && (
        <>
          <TypeFilledSizeSmColorSuccess
            className="!relative !w-[24px] !h-[24px]"
            color={color === "success" ? "#079455" : "#7F56D9"}
          />
          <div className="flex flex-col items-start grow flex-1 relative">
            <p
              className={`font-text-md-regular self-stretch mt-[-1.00px] tracking-[var(--text-md-regular-letter-spacing)] text-[length:var(--text-md-regular-font-size)] [font-style:var(--text-md-regular-font-style)] text-gray-600 font-[number:var(--text-md-regular-font-weight)] leading-[var(--text-md-regular-line-height)] relative ${textClassName}`}
            >
              {text}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

CheckItemText.propTypes = {
  type: PropTypes.oneOf(["line", "filled", "default"]),
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  color: PropTypes.oneOf(["primary", "success"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};
