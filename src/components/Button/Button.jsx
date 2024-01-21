/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Placeholder183 } from "../../icons/Placeholder183";
import { Placeholder206 } from "../../icons/Placeholder206";

export const Button = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  destructive,
  stateProp,
  className,
  textClassName,
  text = "Button CTA",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    hierarchy: hierarchy || "primary",
    icon: icon || "dot-leading",
    destructive: destructive || false,
    state: stateProp || "default",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center justify-center relative ${
        ["primary", "secondary-color", "secondary-gray"].includes(state.hierarchy) ? "border border-solid" : ""
      } ${
        !state.destructive && state.hierarchy === "primary" && ["default", "focused"].includes(state.state)
          ? "border-primary-600"
          : state.destructive && state.hierarchy === "primary" && ["default", "focused"].includes(state.state)
          ? "border-error-600"
          : (!state.destructive && state.hierarchy === "primary" && state.state === "disabled") ||
            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover")
          ? "border-primary-200"
          : (state.destructive && state.hierarchy === "primary" && state.state === "disabled") ||
            (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
            (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled")
          ? "border-error-200"
          : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover")
          ? "border-gray-300"
          : (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover")
          ? "border-error-300"
          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
          ? "border-primary-25"
          : state.destructive && state.state === "disabled" && state.hierarchy === "secondary-color"
          ? "border-error-25"
          : state.hierarchy === "secondary-gray" && state.state === "disabled" && !state.destructive
          ? "border-gray-200"
          : state.hierarchy === "primary" && state.state === "hover" && !state.destructive
          ? "border-primary-700"
          : state.destructive && state.hierarchy === "primary" && state.state === "hover"
          ? "border-error-700"
          : ""
      } ${state.size === "two-xl" && ["default", "dot-leading"].includes(state.icon) ? "gap-[12px]" : "gap-[8px]"} ${
        (state.hierarchy === "primary" && state.state === "default") ||
        (state.hierarchy === "primary" && state.state === "disabled") ||
        (state.hierarchy === "primary" && state.state === "hover") ||
        (state.hierarchy === "secondary-color" && state.state === "default") ||
        (state.hierarchy === "secondary-color" && state.state === "disabled") ||
        (state.hierarchy === "secondary-color" && state.state === "hover") ||
        (state.hierarchy === "secondary-gray" && state.state === "default") ||
        (state.hierarchy === "secondary-gray" && state.state === "disabled") ||
        (state.hierarchy === "secondary-gray" && state.state === "hover")
          ? "shadow-shadow-xs"
          : !state.destructive && state.state === "focused" && ["primary", "secondary-color"].includes(state.hierarchy)
          ? "shadow-shadow-xs-focused-4px-primary-100"
          : (state.destructive && state.hierarchy === "primary" && state.state === "focused") ||
            (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused")
          ? "shadow-shadow-xs-focused-4px-error-100"
          : state.hierarchy === "secondary-gray" && !state.destructive && state.state === "focused"
          ? "shadow-shadow-xs-focused-4px-gray-100"
          : ""
      } ${
        (state.hierarchy === "primary" && state.icon === "default" && state.size === "md") ||
        (state.hierarchy === "primary" && state.icon === "dot-leading" && state.size === "md") ||
        (state.hierarchy === "secondary-color" && state.icon === "default" && state.size === "md") ||
        (state.hierarchy === "secondary-color" && state.icon === "dot-leading" && state.size === "md") ||
        (state.hierarchy === "secondary-gray" && state.icon === "default" && state.size === "md") ||
        (state.hierarchy === "secondary-gray" && state.icon === "dot-leading" && state.size === "md") ||
        (state.hierarchy === "tertiary-color" && state.icon === "default" && state.size === "md") ||
        (state.hierarchy === "tertiary-color" && state.icon === "dot-leading" && state.size === "md") ||
        (state.hierarchy === "tertiary-gray" && state.icon === "default" && state.size === "md") ||
        (state.hierarchy === "tertiary-gray" && state.icon === "dot-leading" && state.size === "md")
          ? "px-[16px] py-[10px]"
          : state.size === "md" && state.icon === "only"
          ? "p-[10px]"
          : (state.hierarchy === "primary" && state.icon === "default" && state.size === "lg") ||
            (state.hierarchy === "primary" && state.icon === "dot-leading" && state.size === "lg") ||
            (state.hierarchy === "secondary-color" && state.icon === "default" && state.size === "lg") ||
            (state.hierarchy === "secondary-color" && state.icon === "dot-leading" && state.size === "lg") ||
            (state.hierarchy === "secondary-gray" && state.icon === "default" && state.size === "lg") ||
            (state.hierarchy === "secondary-gray" && state.icon === "dot-leading" && state.size === "lg") ||
            (state.hierarchy === "tertiary-color" && state.icon === "default" && state.size === "lg") ||
            (state.hierarchy === "tertiary-color" && state.icon === "dot-leading" && state.size === "lg") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "default" && state.size === "lg") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "dot-leading" && state.size === "lg")
          ? "px-[18px] py-[10px]"
          : state.size === "lg" && state.icon === "only"
          ? "p-[12px]"
          : (state.hierarchy === "primary" && state.icon === "default" && state.size === "xl") ||
            (state.hierarchy === "primary" && state.icon === "dot-leading" && state.size === "xl") ||
            (state.hierarchy === "secondary-color" && state.icon === "default" && state.size === "xl") ||
            (state.hierarchy === "secondary-color" && state.icon === "dot-leading" && state.size === "xl") ||
            (state.hierarchy === "secondary-gray" && state.icon === "default" && state.size === "xl") ||
            (state.hierarchy === "secondary-gray" && state.icon === "dot-leading" && state.size === "xl") ||
            (state.hierarchy === "tertiary-color" && state.icon === "default" && state.size === "xl") ||
            (state.hierarchy === "tertiary-color" && state.icon === "dot-leading" && state.size === "xl") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "default" && state.size === "xl") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "dot-leading" && state.size === "xl")
          ? "px-[20px] py-[12px]"
          : (state.hierarchy === "primary" && state.icon === "default" && state.size === "two-xl") ||
            (state.hierarchy === "primary" && state.icon === "dot-leading" && state.size === "two-xl") ||
            (state.hierarchy === "secondary-color" && state.icon === "default" && state.size === "two-xl") ||
            (state.hierarchy === "secondary-color" && state.icon === "dot-leading" && state.size === "two-xl") ||
            (state.hierarchy === "secondary-gray" && state.icon === "default" && state.size === "two-xl") ||
            (state.hierarchy === "secondary-gray" && state.icon === "dot-leading" && state.size === "two-xl") ||
            (state.hierarchy === "tertiary-color" && state.icon === "default" && state.size === "two-xl") ||
            (state.hierarchy === "tertiary-color" && state.icon === "dot-leading" && state.size === "two-xl") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "default" && state.size === "two-xl") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "dot-leading" && state.size === "two-xl")
          ? "px-[28px] py-[16px]"
          : state.size === "xl" && state.icon === "only"
          ? "p-[14px]"
          : state.icon === "only" && state.size === "two-xl"
          ? "p-[16px]"
          : (state.hierarchy === "primary" && state.icon === "default" && state.size === "sm") ||
            (state.hierarchy === "primary" && state.icon === "dot-leading" && state.size === "sm") ||
            (state.hierarchy === "secondary-color" && state.icon === "default" && state.size === "sm") ||
            (state.hierarchy === "secondary-color" && state.icon === "dot-leading" && state.size === "sm") ||
            (state.hierarchy === "secondary-gray" && state.icon === "default" && state.size === "sm") ||
            (state.hierarchy === "secondary-gray" && state.icon === "dot-leading" && state.size === "sm") ||
            (state.hierarchy === "tertiary-color" && state.icon === "default" && state.size === "sm") ||
            (state.hierarchy === "tertiary-color" && state.icon === "dot-leading" && state.size === "sm") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "default" && state.size === "sm") ||
            (state.hierarchy === "tertiary-gray" && state.icon === "dot-leading" && state.size === "sm")
          ? "px-[14px] py-[8px]"
          : state.size === "sm" && state.icon === "only"
          ? "p-[8px]"
          : ""
      } ${
        ["primary", "secondary-color", "secondary-gray", "tertiary-color", "tertiary-gray"].includes(state.hierarchy)
          ? "overflow-hidden"
          : ""
      } ${
        ["primary", "secondary-color", "secondary-gray", "tertiary-color", "tertiary-gray"].includes(state.hierarchy)
          ? "rounded-[8px]"
          : ""
      } ${
        !state.destructive && state.hierarchy === "primary" && ["default", "focused"].includes(state.state)
          ? "bg-primary-600"
          : state.destructive && state.hierarchy === "primary" && ["default", "focused"].includes(state.state)
          ? "bg-error-600"
          : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
          ? "bg-primary-50"
          : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
            (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
          ? "bg-error-50"
          : state.hierarchy === "secondary-gray" && ["default", "disabled", "focused"].includes(state.state)
          ? "bg-basewhite"
          : state.hierarchy === "primary" && state.state === "disabled" && !state.destructive
          ? "bg-primary-200"
          : state.destructive && state.hierarchy === "primary" && state.state === "disabled"
          ? "bg-error-200"
          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
          ? "bg-primary-25"
          : state.destructive && state.state === "disabled" && state.hierarchy === "secondary-color"
          ? "bg-error-25"
          : state.hierarchy === "primary" && state.state === "hover" && !state.destructive
          ? "bg-primary-700"
          : state.destructive && state.hierarchy === "primary" && state.state === "hover"
          ? "bg-error-700"
          : state.hierarchy === "secondary-color" && state.state === "hover" && !state.destructive
          ? "bg-primary-100"
          : state.destructive && state.hierarchy === "secondary-color" && state.state === "hover"
          ? "bg-error-100"
          : !state.destructive &&
            state.state === "hover" &&
            ["secondary-gray", "tertiary-gray"].includes(state.hierarchy)
          ? "bg-gray-50"
          : ""
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.icon === "dot-leading" && (
        <>
          <div className="w-[10px] h-[10px] relative">
            <div
              className={`w-[8px] left-px top-px h-[8px] rounded-[4px] relative ${
                state.hierarchy === "primary"
                  ? "bg-basewhite"
                  : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                  ? "bg-primary-300"
                  : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                    (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                    (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                    (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                    (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                    (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                  ? "bg-error-300"
                  : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                    (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                    (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                    (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                    (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                  ? "bg-gray-300"
                  : "bg-success-500"
              }`}
            />
          </div>
          <div
            className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
              ["lg", "xl"].includes(state.size)
                ? "font-text-md-semibold"
                : state.size === "two-xl"
                ? "font-text-lg-semibold"
                : "font-text-sm-semibold"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "tracking-[var(--text-md-semibold-letter-spacing)]"
                : state.size === "two-xl"
                ? "tracking-[var(--text-lg-semibold-letter-spacing)]"
                : "tracking-[var(--text-sm-semibold-letter-spacing)]"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "text-[length:var(--text-md-semibold-font-size)]"
                : state.size === "two-xl"
                ? "text-[length:var(--text-lg-semibold-font-size)]"
                : "text-[length:var(--text-sm-semibold-font-size)]"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "[font-style:var(--text-md-semibold-font-style)]"
                : state.size === "two-xl"
                ? "[font-style:var(--text-lg-semibold-font-style)]"
                : "[font-style:var(--text-sm-semibold-font-style)]"
            } ${
              state.hierarchy === "primary"
                ? "text-basewhite"
                : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                ? "text-primary-700"
                : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                ? "text-gray-600"
                : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                  (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                ? "text-gray-700"
                : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                ? "text-primary-300"
                : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                ? "text-error-300"
                : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                ? "text-gray-300"
                : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                  (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                ? "text-primary-800"
                : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                ? "text-error-800"
                : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                ? "text-gray-800"
                : "text-error-700"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "font-[number:var(--text-md-semibold-font-weight)]"
                : state.size === "two-xl"
                ? "font-[number:var(--text-lg-semibold-font-weight)]"
                : "font-[number:var(--text-sm-semibold-font-weight)]"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "leading-[var(--text-md-semibold-line-height)]"
                : state.size === "two-xl"
                ? "leading-[var(--text-lg-semibold-line-height)]"
                : "leading-[var(--text-sm-semibold-line-height)]"
            }`}
          >
            {text}
          </div>
        </>
      )}

      {state.icon === "default" && (
        <>
          <>
            {iconLeading && (
              <>
                <>
                  {["lg", "md", "sm", "xl"].includes(state.size) && (
                    <Placeholder206
                      className="!relative !w-[20px] !h-[20px]"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}

                  {state.size === "two-xl" && (
                    <Placeholder183
                      className="!relative !w-[24px] !h-[24px]"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
          <div
            className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
              ["lg", "xl"].includes(state.size)
                ? "font-text-md-semibold"
                : state.size === "two-xl"
                ? "font-text-lg-semibold"
                : "font-text-sm-semibold"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "tracking-[var(--text-md-semibold-letter-spacing)]"
                : state.size === "two-xl"
                ? "tracking-[var(--text-lg-semibold-letter-spacing)]"
                : "tracking-[var(--text-sm-semibold-letter-spacing)]"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "text-[length:var(--text-md-semibold-font-size)]"
                : state.size === "two-xl"
                ? "text-[length:var(--text-lg-semibold-font-size)]"
                : "text-[length:var(--text-sm-semibold-font-size)]"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "[font-style:var(--text-md-semibold-font-style)]"
                : state.size === "two-xl"
                ? "[font-style:var(--text-lg-semibold-font-style)]"
                : "[font-style:var(--text-sm-semibold-font-style)]"
            } ${
              state.hierarchy === "primary"
                ? "text-basewhite"
                : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                ? "text-primary-700"
                : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                ? "text-gray-600"
                : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                  (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                  (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                ? "text-gray-700"
                : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                ? "text-primary-300"
                : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                  (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                ? "text-error-300"
                : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                  (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                ? "text-gray-300"
                : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                  (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                  (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                ? "text-primary-800"
                : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                  (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                ? "text-error-800"
                : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                ? "text-gray-800"
                : "text-error-700"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "font-[number:var(--text-md-semibold-font-weight)]"
                : state.size === "two-xl"
                ? "font-[number:var(--text-lg-semibold-font-weight)]"
                : "font-[number:var(--text-sm-semibold-font-weight)]"
            } ${
              ["lg", "xl"].includes(state.size)
                ? "leading-[var(--text-md-semibold-line-height)]"
                : state.size === "two-xl"
                ? "leading-[var(--text-lg-semibold-line-height)]"
                : "leading-[var(--text-sm-semibold-line-height)]"
            } ${textClassName}`}
          >
            {text}
          </div>
          <>
            {iconTrailing && (
              <>
                <>
                  {["lg", "md", "sm", "xl"].includes(state.size) && (
                    <Placeholder206
                      className="!relative !w-[20px] !h-[20px]"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}

                  {state.size === "two-xl" && (
                    <Placeholder183
                      className="!relative !w-[24px] !h-[24px]"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {((state.icon === "only" && state.size === "lg") ||
        (state.icon === "only" && state.size === "md") ||
        (state.icon === "only" && state.size === "sm") ||
        (state.icon === "only" && state.size === "xl")) && (
        <Placeholder206
          className="!relative !w-[20px] !h-[20px]"
          color={
            state.hierarchy === "primary"
              ? "white"
              : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
              ? "#6941C6"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
              ? "#B42318"
              : !state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                ["default", "focused"].includes(state.state)
              ? "#475467"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#344054"
              : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
              ? "#D6BBFB"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#FDA29B"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#D0D5DD"
              : !state.destructive &&
                state.state === "hover" &&
                ["secondary-color", "tertiary-color"].includes(state.hierarchy)
              ? "#53389E"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#912018"
              : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
              ? "#1D2939"
              : undefined
          }
        />
      )}

      {state.icon === "only" && state.size === "two-xl" && (
        <Placeholder183
          className="!relative !w-[24px] !h-[24px]"
          color={
            state.hierarchy === "primary"
              ? "white"
              : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
              ? "#6941C6"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
              ? "#B42318"
              : !state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                ["default", "focused"].includes(state.state)
              ? "#475467"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#344054"
              : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
              ? "#D6BBFB"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#FDA29B"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#D0D5DD"
              : !state.destructive &&
                state.state === "hover" &&
                ["secondary-color", "tertiary-color"].includes(state.hierarchy)
              ? "#53389E"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#912018"
              : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
              ? "#1D2939"
              : undefined
          }
        />
      )}
    </button>
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

Button.propTypes = {
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["dot-leading", "only", "default"]),
  destructive: PropTypes.bool,
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  text: PropTypes.string,
};
