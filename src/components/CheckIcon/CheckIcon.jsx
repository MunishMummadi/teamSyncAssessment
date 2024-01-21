/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckCircle5 } from "../../icons/CheckCircle5";
import { TypeDefaultSize2XlColorSuccess } from "../../icons/TypeDefaultSize2XlColorSuccess";
import { TypeDefaultSizeLgColorPrimary } from "../../icons/TypeDefaultSizeLgColorPrimary";
import { TypeDefaultSizeMdColorGray } from "../../icons/TypeDefaultSizeMdColorGray";
import { TypeDefaultSizeSmColorPrimary } from "../../icons/TypeDefaultSizeSmColorPrimary";
import { TypeDefaultSizeXlColorSuccess } from "../../icons/TypeDefaultSizeXlColorSuccess";
import { TypeDefaultSizeXsColorSuccess } from "../../icons/TypeDefaultSizeXsColorSuccess";
import { TypeFilledSize2XlColorGray } from "../../icons/TypeFilledSize2XlColorGray";
import { TypeFilledSizeLgColorSuccess } from "../../icons/TypeFilledSizeLgColorSuccess";
import { TypeFilledSizeMdColorGray } from "../../icons/TypeFilledSizeMdColorGray";
import { TypeFilledSizeSmColorSuccess } from "../../icons/TypeFilledSizeSmColorSuccess";
import { TypeFilledSizeXlColorPrimary } from "../../icons/TypeFilledSizeXlColorPrimary";
import { TypeFilledSizeXsColorGray } from "../../icons/TypeFilledSizeXsColorGray";

export const CheckIcon = ({ type, size, color, typeLineSizeSmClassName }) => {
  return (
    <>
      {size === "sm" && type === "default" && (
        <TypeDefaultSizeSmColorPrimary
          className="!absolute !w-[24px] !h-[24px] !top-0 !left-0"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "sm" && (
        <TypeFilledSizeSmColorSuccess
          className="!absolute !w-[24px] !h-[24px] !top-0 !left-0"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {type === "line" && (
        <div
          className={`${
            size === "xs"
              ? "w-[20px]"
              : size === "md"
              ? "w-[28px]"
              : size === "lg"
              ? "w-[32px]"
              : size === "xl"
              ? "w-[36px]"
              : size === "two-xl"
              ? "w-[40px]"
              : "w-[24px]"
          } ${["lg", "md", "sm", "xl", "xs"].includes(size) ? "bg-[100%_100%]" : ""} ${
            size === "xs"
              ? "h-[20px]"
              : size === "md"
              ? "h-[28px]"
              : size === "lg"
              ? "h-[32px]"
              : size === "xl"
              ? "h-[36px]"
              : size === "two-xl"
              ? "h-[40px]"
              : "h-[24px]"
          } ${
            size === "sm" && color === "primary"
              ? "bg-[url(/static/img/check-circle-22.svg)]"
              : color === "gray" && size === "sm"
              ? "bg-[url(/static/img/check-circle-21.svg)]"
              : size === "sm" && color === "success"
              ? "bg-[url(/static/img/check-circle-20.svg)]"
              : size === "xs" && color === "primary"
              ? "bg-[url(/static/img/check-circle-19.svg)]"
              : size === "xs" && color === "gray"
              ? "bg-[url(/static/img/check-circle-18.svg)]"
              : size === "xs" && color === "success"
              ? "bg-[url(/static/img/check-circle-17.svg)]"
              : size === "md" && color === "primary"
              ? "bg-[url(/static/img/check-circle-16.svg)]"
              : color === "gray" && size === "md"
              ? "bg-[url(/static/img/check-circle-15.svg)]"
              : size === "md" && color === "success"
              ? "bg-[url(/static/img/check-circle-14.svg)]"
              : size === "lg" && color === "primary"
              ? "bg-[url(/static/img/check-circle-13.svg)]"
              : size === "lg" && color === "gray"
              ? "bg-[url(/static/img/check-circle-12.svg)]"
              : size === "lg" && color === "success"
              ? "bg-[url(/static/img/check-circle-11.svg)]"
              : size === "xl" && color === "primary"
              ? "bg-[url(/static/img/check-circle-7.svg)]"
              : color === "gray" && size === "xl"
              ? "bg-[url(/static/img/check-circle-6.svg)]"
              : size === "xl" && color === "success"
              ? "bg-[url(/static/img/check-circle-5.svg)]"
              : ""
          } ${size === "two-xl" ? "overflow-hidden" : ""} ${
            size === "xs"
              ? "rounded-[10px]"
              : size === "md"
              ? "rounded-[14px]"
              : size === "lg"
              ? "rounded-[16px]"
              : size === "xl"
              ? "rounded-[18px]"
              : size === "two-xl"
              ? "rounded-[20px]"
              : "rounded-[12px]"
          } ${size === "two-xl" ? "relative" : ""} ${typeLineSizeSmClassName}`}
        >
          {size === "two-xl" && (
            <CheckCircle5
              className="!absolute !w-[36px] !h-[36px] !top-[2px] !left-[2px]"
              color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
            />
          )}
        </div>
      )}

      {size === "xs" && type === "default" && (
        <TypeDefaultSizeXsColorSuccess
          className="!absolute !w-[20px] !h-[20px] !top-0 !left-0"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {size === "xs" && type === "filled" && (
        <TypeFilledSizeXsColorGray
          className="!absolute !w-[20px] !h-[20px] !top-0 !left-0"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {size === "md" && type === "default" && (
        <TypeDefaultSizeMdColorGray
          className="!absolute !w-[28px] !h-[28px] !top-0 !left-0"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "md" && (
        <TypeFilledSizeMdColorGray
          className="!absolute !w-[28px] !h-[28px] !top-0 !left-0"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {size === "lg" && type === "default" && (
        <TypeDefaultSizeLgColorPrimary
          className="!absolute !w-[32px] !h-[32px] !top-0 !left-0"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {size === "lg" && type === "filled" && (
        <TypeFilledSizeLgColorSuccess
          className="!absolute !w-[32px] !h-[32px] !top-0 !left-0"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {size === "xl" && type === "default" && (
        <TypeDefaultSizeXlColorSuccess
          className="!absolute !w-[36px] !h-[36px] !top-0 !left-0"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "xl" && (
        <TypeFilledSizeXlColorPrimary
          className="!absolute !w-[36px] !h-[36px] !top-0 !left-0"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {type === "default" && size === "two-xl" && (
        <TypeDefaultSize2XlColorSuccess
          className="!absolute !w-[40px] !h-[40px] !top-0 !left-0"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "two-xl" && (
        <TypeFilledSize2XlColorGray
          className="!absolute !w-[40px] !h-[40px] !top-0 !left-0"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}
    </>
  );
};

CheckIcon.propTypes = {
  type: PropTypes.oneOf(["line", "filled", "default"]),
  size: PropTypes.oneOf(["sm", "xs", "lg", "two-xl", "xl", "md"]),
  color: PropTypes.oneOf(["primary", "gray", "success"]),
};
