/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { User01 } from "../../icons/User01";
import { User0118 } from "../../icons/User0118";
import { User0127 } from "../../icons/User0127";
import { User0136 } from "../../icons/User0136";
import { User019 } from "../../icons/User019";
import { VerifiedTick17 } from "../../icons/VerifiedTick17";
import { AvatarContrast } from "../AvatarContrast";

export const Avatar = ({
  contrastBorder = true,
  size,
  placeholder,
  text,
  statusIcon,
  stateProp,
  className,
  avatarContrastWeightHeavyClassName,
  overlapGroupClassName,
  text1 = "OR",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xl",
    placeholder: placeholder || false,
    text: text || true,
    statusIcon: statusIcon || "false",
    state: stateProp || "default",
  });

  return (
    <div
      className={`rounded-[200px] ${
        state.state === "focused" && (state.placeholder || state.text)
          ? "border-gray-200"
          : !state.placeholder && !state.text && state.state === "focused"
          ? "border-gray-100"
          : ""
      } ${state.statusIcon === "false" && !state.text && !state.placeholder ? "flex" : ""} ${
        state.statusIcon === "false" && !state.text && !state.placeholder ? "items-center" : ""
      } ${
        (!state.placeholder &&
          state.size === "two-xl" &&
          state.state === "default" &&
          state.statusIcon === "online-indicator" &&
          !state.text) ||
        (!state.placeholder &&
          state.size === "two-xl" &&
          state.state === "hover" &&
          state.statusIcon === "online-indicator" &&
          !state.text) ||
        (!state.placeholder &&
          state.size === "xl" &&
          state.state === "default" &&
          state.statusIcon === "online-indicator" &&
          !state.text) ||
        (!state.placeholder &&
          state.size === "xl" &&
          state.state === "hover" &&
          state.statusIcon === "online-indicator" &&
          !state.text)
          ? "shadow-focus-ring-4px-primary-100"
          : ""
      } ${!state.placeholder && !state.text ? "bg-[50%_50%]" : ""} ${
        state.statusIcon === "false" && !state.text && !state.placeholder ? "relative" : ""
      } ${
        (state.size === "two-xl" && state.state === "default") ||
        (state.size === "two-xl" && state.state === "hover") ||
        (state.size === "xl" && state.state === "focused")
          ? "w-[64px]"
          : state.size === "two-xl" && state.state === "focused"
          ? "w-[72px]"
          : (state.size === "lg" && state.state === "default") ||
            (state.size === "lg" && state.state === "hover") ||
            (state.size === "md" && state.state === "focused")
          ? "w-[48px]"
          : (state.size === "md" && state.state === "default") ||
            (state.size === "md" && state.state === "hover") ||
            (state.size === "sm" && state.state === "focused")
          ? "w-[40px]"
          : (state.size === "sm" && state.state === "default") ||
            (state.size === "sm" && state.state === "hover") ||
            (state.size === "xs" && state.state === "focused")
          ? "w-[32px]"
          : state.size === "xs" && ["default", "hover"].includes(state.state)
          ? "w-[24px]"
          : "w-[56px]"
      } ${state.statusIcon === "false" && !state.text && !state.placeholder ? "flex-col" : ""} ${
        (!state.placeholder &&
          state.size === "xl" &&
          state.state === "default" &&
          state.statusIcon === "online-indicator" &&
          !state.text) ||
        (!state.placeholder &&
          state.size === "xl" &&
          state.state === "hover" &&
          state.statusIcon === "online-indicator" &&
          !state.text)
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-online-indic-1.png)]"
          : (!state.placeholder &&
              state.size === "two-xl" &&
              state.state === "default" &&
              state.statusIcon === "online-indicator" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "two-xl" &&
              state.state === "hover" &&
              state.statusIcon === "online-indicator" &&
              !state.text)
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-online-indi-1.png)]"
          : !state.placeholder &&
            state.size === "xl" &&
            state.state === "focused" &&
            state.statusIcon === "online-indicator" &&
            !state.text
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-online-indic.png)]"
          : state.size === "two-xl" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "online-indicator" &&
            !state.text
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-online-indi.png)]"
          : (!state.placeholder &&
              state.size === "xl" &&
              state.state === "default" &&
              state.statusIcon === "company" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "xl" &&
              state.state === "hover" &&
              state.statusIcon === "company" &&
              !state.text)
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-company-sta-1.png)]"
          : state.size === "xl" && state.statusIcon === "verified" && ["default", "hover"].includes(state.state)
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-verified-st-1.png)]"
          : (!state.placeholder &&
              state.size === "two-xl" &&
              state.state === "default" &&
              state.statusIcon === "company" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "two-xl" &&
              state.state === "hover" &&
              state.statusIcon === "company" &&
              !state.text)
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-company-st-1.png)]"
          : state.size === "two-xl" && state.statusIcon === "verified" && ["default", "hover"].includes(state.state)
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-verified-s-1.png)]"
          : state.statusIcon === "company" &&
            !state.placeholder &&
            state.size === "xl" &&
            state.state === "focused" &&
            !state.text
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-company-sta.png)]"
          : state.statusIcon === "verified" && state.size === "xl" && state.state === "focused"
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-verified-st.png)]"
          : state.statusIcon === "company" &&
            state.size === "two-xl" &&
            !state.placeholder &&
            state.state === "focused" &&
            !state.text
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-company-st.png)]"
          : state.statusIcon === "verified" && state.size === "two-xl" && state.state === "focused"
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-verified-s.png)]"
          : (!state.placeholder &&
              state.size === "lg" &&
              state.state === "default" &&
              state.statusIcon === "online-indicator" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "lg" &&
              state.state === "hover" &&
              state.statusIcon === "online-indicator" &&
              !state.text)
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-online-indic-1.png)]"
          : state.size === "lg" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "online-indicator" &&
            !state.text
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-online-indic.png)]"
          : (!state.placeholder &&
              state.size === "lg" &&
              state.state === "default" &&
              state.statusIcon === "company" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "lg" &&
              state.state === "hover" &&
              state.statusIcon === "company" &&
              !state.text)
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-company-sta-1.png)]"
          : state.size === "lg" && state.statusIcon === "verified" && ["default", "hover"].includes(state.state)
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-verified-st-1.png)]"
          : state.size === "lg" &&
            state.statusIcon === "company" &&
            !state.placeholder &&
            state.state === "focused" &&
            !state.text
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-company-sta.png)]"
          : state.statusIcon === "verified" && state.size === "lg" && state.state === "focused"
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-verified-st.png)]"
          : (!state.placeholder &&
              state.size === "md" &&
              state.state === "default" &&
              state.statusIcon === "online-indicator" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "md" &&
              state.state === "hover" &&
              state.statusIcon === "online-indicator" &&
              !state.text)
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-online-indic-1.png)]"
          : !state.placeholder &&
            state.size === "md" &&
            state.state === "focused" &&
            state.statusIcon === "online-indicator" &&
            !state.text
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-online-indic.png)]"
          : (!state.placeholder &&
              state.size === "md" &&
              state.state === "default" &&
              state.statusIcon === "company" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "md" &&
              state.state === "hover" &&
              state.statusIcon === "company" &&
              !state.text)
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-company-sta-1.png)]"
          : state.size === "md" && state.statusIcon === "verified" && ["default", "hover"].includes(state.state)
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-verified-st-1.png)]"
          : state.statusIcon === "company" &&
            !state.placeholder &&
            state.size === "md" &&
            state.state === "focused" &&
            !state.text
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-company-sta.png)]"
          : state.statusIcon === "verified" && state.size === "md" && state.state === "focused"
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-verified-st.png)]"
          : (!state.placeholder &&
              state.size === "sm" &&
              state.state === "default" &&
              state.statusIcon === "online-indicator" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "sm" &&
              state.state === "hover" &&
              state.statusIcon === "online-indicator" &&
              !state.text)
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-online-indic-1.png)]"
          : !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "online-indicator" &&
            state.size === "sm" &&
            !state.text
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-online-indic.png)]"
          : (!state.placeholder &&
              state.size === "sm" &&
              state.state === "default" &&
              state.statusIcon === "company" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "sm" &&
              state.state === "hover" &&
              state.statusIcon === "company" &&
              !state.text)
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-company-sta-1.png)]"
          : state.size === "sm" && state.statusIcon === "verified" && ["default", "hover"].includes(state.state)
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-verified-st-1.png)]"
          : state.statusIcon === "company" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.size === "sm" &&
            !state.text
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-company-sta.png)]"
          : state.statusIcon === "verified" && state.size === "sm" && state.state === "focused"
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-verified-st.png)]"
          : (!state.placeholder &&
              state.size === "xs" &&
              state.state === "default" &&
              state.statusIcon === "online-indicator" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "xs" &&
              state.state === "hover" &&
              state.statusIcon === "online-indicator" &&
              !state.text)
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-online-indic-1.png)]"
          : state.size === "xs" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "online-indicator" &&
            !state.text
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-online-indic.png)]"
          : (!state.placeholder &&
              state.size === "xs" &&
              state.state === "default" &&
              state.statusIcon === "company" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "xs" &&
              state.state === "hover" &&
              state.statusIcon === "company" &&
              !state.text)
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-company-sta-1.png)]"
          : state.size === "xs" && state.statusIcon === "verified" && ["default", "hover"].includes(state.state)
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-verified-st-1.png)]"
          : state.size === "xs" &&
            state.statusIcon === "company" &&
            !state.placeholder &&
            state.state === "focused" &&
            !state.text
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-company-sta.png)]"
          : state.size === "xs" && state.statusIcon === "verified" && state.state === "focused"
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-verified-st.png)]"
          : (!state.placeholder &&
              state.size === "xl" &&
              state.state === "default" &&
              state.statusIcon === "false" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "xl" &&
              state.state === "hover" &&
              state.statusIcon === "false" &&
              !state.text)
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-false-state-1.png)]"
          : (!state.placeholder &&
              state.size === "two-xl" &&
              state.state === "default" &&
              state.statusIcon === "false" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "two-xl" &&
              state.state === "hover" &&
              state.statusIcon === "false" &&
              !state.text)
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-false-stat-1.png)]"
          : !state.placeholder &&
            state.size === "xl" &&
            state.state === "focused" &&
            state.statusIcon === "false" &&
            !state.text
          ? "bg-[url(/static/img/size-xl-placeholder-false-text-false-status-icon-false-state.png)]"
          : state.size === "two-xl" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "false" &&
            !state.text
          ? "bg-[url(/static/img/size-2xl-placeholder-false-text-false-status-icon-false-stat.png)]"
          : (!state.placeholder &&
              state.size === "lg" &&
              state.state === "default" &&
              state.statusIcon === "false" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "lg" &&
              state.state === "hover" &&
              state.statusIcon === "false" &&
              !state.text)
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-false-state-1.png)]"
          : state.size === "lg" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "false" &&
            !state.text
          ? "bg-[url(/static/img/size-lg-placeholder-false-text-false-status-icon-false-state.png)]"
          : (!state.placeholder &&
              state.size === "md" &&
              state.state === "default" &&
              state.statusIcon === "false" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "md" &&
              state.state === "hover" &&
              state.statusIcon === "false" &&
              !state.text)
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-false-state-1.png)]"
          : !state.placeholder &&
            state.size === "md" &&
            state.state === "focused" &&
            state.statusIcon === "false" &&
            !state.text
          ? "bg-[url(/static/img/size-md-placeholder-false-text-false-status-icon-false-state.png)]"
          : (!state.placeholder &&
              state.size === "sm" &&
              state.state === "default" &&
              state.statusIcon === "false" &&
              !state.text) ||
            (!state.placeholder &&
              state.size === "sm" &&
              state.state === "hover" &&
              state.statusIcon === "false" &&
              !state.text)
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-false-state-1.png)]"
          : !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "false" &&
            state.size === "sm" &&
            !state.text
          ? "bg-[url(/static/img/size-sm-placeholder-false-text-false-status-icon-false-state.png)]"
          : state.size === "xs" &&
            state.state === "default" &&
            !state.placeholder &&
            state.statusIcon === "false" &&
            !state.text
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-false-state-2.png)]"
          : state.size === "xs" &&
            !state.placeholder &&
            state.statusIcon === "false" &&
            !state.text &&
            state.state === "hover"
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-false-state-1.png)]"
          : state.size === "xs" &&
            !state.placeholder &&
            state.state === "focused" &&
            state.statusIcon === "false" &&
            !state.text
          ? "bg-[url(/static/img/size-xs-placeholder-false-text-false-status-icon-false-state.png)]"
          : ""
      } ${!state.placeholder && !state.text ? "bg-cover" : ""} ${
        state.placeholder || state.text ? "bg-gray-100" : ""
      } ${state.state === "focused" ? "border-4 border-solid" : ""} ${
        (state.size === "two-xl" && state.state === "default") ||
        (state.size === "two-xl" && state.state === "hover") ||
        (state.size === "xl" && state.state === "focused")
          ? "h-[64px]"
          : state.size === "two-xl" && state.state === "focused"
          ? "h-[72px]"
          : (state.size === "lg" && state.state === "default") ||
            (state.size === "lg" && state.state === "hover") ||
            (state.size === "md" && state.state === "focused")
          ? "h-[48px]"
          : (state.size === "md" && state.state === "default") ||
            (state.size === "md" && state.state === "hover") ||
            (state.size === "sm" && state.state === "focused")
          ? "h-[40px]"
          : (state.size === "sm" && state.state === "default") ||
            (state.size === "sm" && state.state === "hover") ||
            (state.size === "xs" && state.state === "focused")
          ? "h-[32px]"
          : state.size === "xs" && ["default", "hover"].includes(state.state)
          ? "h-[24px]"
          : "h-[56px]"
      } ${
        (!state.placeholder &&
          state.size === "xs" &&
          state.state === "default" &&
          state.statusIcon === "false" &&
          !state.text) ||
        (!state.placeholder &&
          state.size === "xs" &&
          state.state === "hover" &&
          state.statusIcon === "false" &&
          !state.text) ||
        (!state.placeholder && state.state === "focused" && state.statusIcon === "false" && !state.text)
          ? "overflow-hidden"
          : ""
      } ${state.statusIcon === "false" && !state.text && !state.placeholder ? "justify-center" : ""} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {((state.placeholder && state.statusIcon === "false") ||
        (state.statusIcon === "company" && !state.text) ||
        (state.statusIcon === "online-indicator" && !state.text) ||
        state.statusIcon === "verified" ||
        state.text) && (
        <div
          className={`relative ${
            (state.size === "lg" && state.statusIcon === "false") ||
            (state.size === "lg" && state.statusIcon === "verified") ||
            (state.size === "md" && state.statusIcon === "false") ||
            (state.size === "md" && state.statusIcon === "verified") ||
            (state.size === "two-xl" && state.statusIcon === "false") ||
            (state.size === "two-xl" && state.statusIcon === "verified") ||
            (state.size === "xl" && state.statusIcon === "false") ||
            (state.size === "xl" && state.statusIcon === "verified")
              ? "border-[0.75px] border-solid"
              : (state.size === "sm" && state.statusIcon === "false") ||
                (state.size === "sm" && state.statusIcon === "verified") ||
                (state.size === "xs" && state.statusIcon === "false")
              ? "border-[0.5px] border-solid"
              : ""
          } ${
            (state.size === "lg" && state.statusIcon === "verified") ||
            (state.size === "md" && state.statusIcon === "verified") ||
            (state.size === "sm" && state.statusIcon === "verified") ||
            (state.size === "two-xl" && state.statusIcon === "verified") ||
            (state.size === "xl" && state.statusIcon === "verified") ||
            state.statusIcon === "false"
              ? "border-gray-900"
              : ""
          } ${
            state.size === "xl" && state.state === "focused" && ["false", "verified"].includes(state.statusIcon)
              ? "w-[56px]"
              : state.size === "two-xl" && state.state === "focused" && ["false", "verified"].includes(state.statusIcon)
              ? "w-[64px]"
              : state.size === "xl" && state.statusIcon === "company"
              ? "w-[60px]"
              : state.size === "two-xl" &&
                (!state.placeholder || state.statusIcon === "company") &&
                (!state.text || state.statusIcon === "company") &&
                ["online-indicator", "company"].includes(state.statusIcon)
              ? "w-[68px]"
              : state.statusIcon === "online-indicator" && state.size === "xl"
              ? "w-[58px]"
              : state.size === "two-xl" && state.statusIcon === "online-indicator" && (state.placeholder || state.text)
              ? "w-[66px]"
              : state.size === "lg" && state.state === "focused" && ["false", "verified"].includes(state.statusIcon)
              ? "w-[48px]"
              : state.size === "lg" && state.statusIcon === "company"
              ? "w-[52px]"
              : state.size === "lg" && state.statusIcon === "online-indicator"
              ? "w-[50px]"
              : state.size === "md" && state.state === "focused" && ["false", "verified"].includes(state.statusIcon)
              ? "w-[40px]"
              : state.size === "md" && state.statusIcon === "company"
              ? "w-[44px]"
              : state.statusIcon === "online-indicator" && state.size === "md"
              ? "w-[42px]"
              : state.size === "sm" && state.state === "focused" && ["false", "verified"].includes(state.statusIcon)
              ? "w-[32px]"
              : state.size === "sm" && state.statusIcon === "company"
              ? "w-[36px]"
              : state.statusIcon === "online-indicator" && state.size === "sm"
              ? "w-[34px]"
              : state.size === "xs" && state.statusIcon === "false" && state.state === "focused"
              ? "w-[24px]"
              : state.size === "xs" && state.statusIcon === "company"
              ? "w-[28px]"
              : state.size === "xs" && state.statusIcon === "online-indicator"
              ? "w-[26px]"
              : state.size === "xs" && state.statusIcon === "verified"
              ? "w-[25px]"
              : ""
          } ${
            state.size === "xl" && ["false", "verified"].includes(state.statusIcon)
              ? "h-[56px]"
              : state.size === "two-xl" && ["false", "verified"].includes(state.statusIcon)
              ? "h-[64px]"
              : state.size === "xl" && state.statusIcon === "company"
              ? "h-[60px]"
              : state.statusIcon === "online-indicator" && state.size === "xl"
              ? "h-[58px]"
              : state.size === "two-xl" && state.statusIcon === "online-indicator" && (state.placeholder || state.text)
              ? "h-[66px]"
              : state.size === "lg" && ["false", "verified"].includes(state.statusIcon)
              ? "h-[48px]"
              : state.size === "lg" && state.statusIcon === "company"
              ? "h-[52px]"
              : state.size === "lg" && state.statusIcon === "online-indicator"
              ? "h-[50px]"
              : state.size === "md" && ["false", "verified"].includes(state.statusIcon)
              ? "h-[40px]"
              : state.size === "md" && state.statusIcon === "company"
              ? "h-[44px]"
              : state.statusIcon === "online-indicator" && state.size === "md"
              ? "h-[42px]"
              : state.size === "sm" && ["false", "verified"].includes(state.statusIcon)
              ? "h-[32px]"
              : state.size === "sm" && state.statusIcon === "company"
              ? "h-[36px]"
              : state.statusIcon === "online-indicator" && state.size === "sm"
              ? "h-[34px]"
              : state.size === "xs" && state.statusIcon === "false"
              ? "h-[24px]"
              : state.size === "xs" && state.statusIcon === "company"
              ? "h-[28px]"
              : state.size === "xs" && state.statusIcon === "online-indicator"
              ? "h-[26px]"
              : state.size === "xs" && state.statusIcon === "verified"
              ? "h-[25px]"
              : "h-[68px]"
          } ${
            (state.size === "lg" && state.statusIcon === "verified") ||
            (state.size === "md" && state.statusIcon === "verified") ||
            (state.size === "sm" && state.statusIcon === "verified") ||
            (state.size === "two-xl" && state.statusIcon === "verified") ||
            (state.size === "xl" && state.statusIcon === "verified") ||
            state.statusIcon === "false"
              ? "rounded-[200px]"
              : ""
          } ${overlapGroupClassName}`}
        >
          {(state.statusIcon === "company" ||
            state.statusIcon === "online-indicator" ||
            (state.size === "xs" && state.statusIcon === "verified")) && (
            <>
              <>
                {contrastBorder && (
                  <AvatarContrast
                    className={
                      state.size === "xs"
                        ? "!h-[24px] !absolute !left-0 !w-[24px] !top-0"
                        : state.size === "xl"
                        ? "!h-[56px] !absolute !left-0 !w-[56px] !top-0"
                        : state.size === "lg"
                        ? "!h-[48px] !absolute !left-0 !w-[48px] !top-0"
                        : state.size === "md"
                        ? "!h-[40px] !absolute !left-0 !w-[40px] !top-0"
                        : "!absolute !left-0 !top-0"
                    }
                    weight={["sm", "xs"].includes(state.size) ? "light" : "regular"}
                  />
                )}
              </>
            </>
          )}

          {state.text && (
            <div
              className={`text-gray-600 absolute text-center ${
                state.size === "two-xl"
                  ? "font-display-xs-semibold"
                  : state.size === "lg"
                  ? "font-text-lg-semibold"
                  : state.size === "md"
                  ? "font-text-md-semibold"
                  : state.size === "sm"
                  ? "font-text-sm-semibold"
                  : state.size === "xs"
                  ? "font-text-xs-semibold"
                  : "font-text-xl-semibold"
              } ${
                state.size === "two-xl"
                  ? "w-[64px]"
                  : state.size === "lg"
                  ? "w-[48px]"
                  : state.size === "md"
                  ? "w-[40px]"
                  : state.size === "sm"
                  ? "w-[32px]"
                  : state.size === "xs"
                  ? "w-[24px]"
                  : "w-[56px]"
              } ${
                state.statusIcon === "company" ||
                state.statusIcon === "online-indicator" ||
                (state.size === "sm" && state.statusIcon === "false") ||
                (state.size === "xs" && state.statusIcon === "false")
                  ? "left-0"
                  : (state.size === "lg" && state.statusIcon === "false") ||
                    (state.size === "md" && state.statusIcon === "false") ||
                    (state.size === "two-xl" && state.statusIcon === "false") ||
                    (state.size === "xl" && state.statusIcon === "false")
                  ? "-left-px"
                  : ""
              } ${
                state.size === "two-xl"
                  ? "tracking-[var(--display-xs-semibold-letter-spacing)]"
                  : state.size === "lg"
                  ? "tracking-[var(--text-lg-semibold-letter-spacing)]"
                  : state.size === "md"
                  ? "tracking-[var(--text-md-semibold-letter-spacing)]"
                  : state.size === "sm"
                  ? "tracking-[var(--text-sm-semibold-letter-spacing)]"
                  : state.size === "xs"
                  ? "tracking-[var(--text-xs-semibold-letter-spacing)]"
                  : "tracking-[var(--text-xl-semibold-letter-spacing)]"
              } ${
                state.size === "two-xl"
                  ? "[font-style:var(--display-xs-semibold-font-style)]"
                  : state.size === "lg"
                  ? "[font-style:var(--text-lg-semibold-font-style)]"
                  : state.size === "md"
                  ? "[font-style:var(--text-md-semibold-font-style)]"
                  : state.size === "sm"
                  ? "[font-style:var(--text-sm-semibold-font-style)]"
                  : state.size === "xs"
                  ? "[font-style:var(--text-xs-semibold-font-style)]"
                  : "[font-style:var(--text-xl-semibold-font-style)]"
              } ${
                state.size === "two-xl"
                  ? "text-[length:var(--display-xs-semibold-font-size)]"
                  : state.size === "lg"
                  ? "text-[length:var(--text-lg-semibold-font-size)]"
                  : state.size === "md"
                  ? "text-[length:var(--text-md-semibold-font-size)]"
                  : state.size === "sm"
                  ? "text-[length:var(--text-sm-semibold-font-size)]"
                  : state.size === "xs"
                  ? "text-[length:var(--text-xs-semibold-font-size)]"
                  : "text-[length:var(--text-xl-semibold-font-size)]"
              } ${
                state.size === "xl" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "top-[13px]"
                  : state.size === "two-xl" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "top-[16px]"
                  : state.size === "lg" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "top-[10px]"
                  : state.size === "md" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "top-[8px]"
                  : state.size === "sm"
                  ? "top-[6px]"
                  : state.size === "xs" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "top-[3px]"
                  : state.statusIcon === "false" && state.size === "xl"
                  ? "top-[12px]"
                  : state.statusIcon === "false" && state.size === "two-xl"
                  ? "top-[15px]"
                  : state.size === "lg" && state.statusIcon === "false"
                  ? "top-[9px]"
                  : state.statusIcon === "false" && state.size === "md"
                  ? "top-[7px]"
                  : state.size === "xs" && state.statusIcon === "false"
                  ? "top-[2px]"
                  : ""
              } ${
                state.size === "two-xl"
                  ? "font-[number:var(--display-xs-semibold-font-weight)]"
                  : state.size === "lg"
                  ? "font-[number:var(--text-lg-semibold-font-weight)]"
                  : state.size === "md"
                  ? "font-[number:var(--text-md-semibold-font-weight)]"
                  : state.size === "sm"
                  ? "font-[number:var(--text-sm-semibold-font-weight)]"
                  : state.size === "xs"
                  ? "font-[number:var(--text-xs-semibold-font-weight)]"
                  : "font-[number:var(--text-xl-semibold-font-weight)]"
              } ${
                state.size === "two-xl"
                  ? "leading-[var(--display-xs-semibold-line-height)]"
                  : state.size === "lg"
                  ? "leading-[var(--text-lg-semibold-line-height)]"
                  : state.size === "md"
                  ? "leading-[var(--text-md-semibold-line-height)]"
                  : state.size === "sm"
                  ? "leading-[var(--text-sm-semibold-line-height)]"
                  : state.size === "xs"
                  ? "leading-[var(--text-xs-semibold-line-height)]"
                  : "leading-[var(--text-xl-semibold-line-height)]"
              }`}
            >
              {text1}
            </div>
          )}

          {state.placeholder && ["two-xl", "xl"].includes(state.size) && (
            <User0136
              className={
                state.size === "xl" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "!absolute !w-[32px] !h-[32px] !top-[12px] !left-[12px]"
                  : state.size === "two-xl" && ["company", "online-indicator"].includes(state.statusIcon)
                  ? "!absolute !w-[32px] !h-[32px] !top-[16px] !left-[16px]"
                  : state.statusIcon === "false" && state.size === "xl"
                  ? "!absolute !w-[32px] !h-[32px] !top-[11px] !left-[11px]"
                  : state.statusIcon === "false" && state.size === "two-xl"
                  ? "!absolute !w-[32px] !h-[32px] !top-[15px] !left-[15px]"
                  : undefined
              }
            />
          )}

          {((!state.placeholder && state.statusIcon === "company") ||
            (!state.placeholder && state.statusIcon === "online-indicator") ||
            (state.placeholder && state.size === "two-xl" && state.statusIcon === "company") ||
            (state.placeholder && state.size === "two-xl" && state.statusIcon === "online-indicator") ||
            (state.placeholder && state.size === "xl" && state.statusIcon === "company") ||
            (state.placeholder && state.size === "xl" && state.statusIcon === "online-indicator")) && (
            <div
              className={`border-basewhite absolute ${
                state.statusIcon === "company" && state.size === "two-xl"
                  ? "border-[1.67px] border-solid"
                  : "border-[1.5px] border-solid"
              } ${
                ["lg", "two-xl"].includes(state.size) &&
                (state.size === "lg" || state.statusIcon === "online-indicator") &&
                (state.size === "two-xl" || state.statusIcon === "company") &&
                ["company", "online-indicator"].includes(state.statusIcon)
                  ? "w-[19px]"
                  : state.size === "xl" && state.statusIcon === "company"
                  ? "w-[21px]"
                  : state.statusIcon === "company" && state.size === "two-xl"
                  ? "w-[23px]"
                  : ["lg", "sm"].includes(state.size) &&
                    (state.size === "lg" || state.statusIcon === "company") &&
                    (state.size === "sm" || state.statusIcon === "online-indicator") &&
                    ["online-indicator", "company"].includes(state.statusIcon)
                  ? "w-[15px]"
                  : ["md", "xs"].includes(state.size) &&
                    (state.size === "md" || state.statusIcon === "company") &&
                    (state.size === "xs" || state.statusIcon === "online-indicator") &&
                    ["online-indicator", "company"].includes(state.statusIcon)
                  ? "w-[13px]"
                  : state.statusIcon === "online-indicator" && state.size === "sm"
                  ? "w-[11px]"
                  : state.size === "xs" && state.statusIcon === "online-indicator"
                  ? "w-[9px]"
                  : "w-[17px]"
              } ${
                state.statusIcon === "online-indicator" && state.size === "xl"
                  ? "left-[40px]"
                  : !state.placeholder &&
                    state.statusIcon === "online-indicator" &&
                    !state.text &&
                    state.size === "two-xl"
                  ? "left-[48px]"
                  : state.size === "xl" && state.statusIcon === "company"
                  ? "left-[38px]"
                  : state.statusIcon === "company" && state.size === "two-xl"
                  ? "left-[44px]"
                  : state.size === "lg" && state.statusIcon === "online-indicator"
                  ? "left-[34px]"
                  : state.size === "lg" && state.statusIcon === "company"
                  ? "left-[32px]"
                  : state.statusIcon === "online-indicator" && state.size === "md"
                  ? "left-[28px]"
                  : state.size === "md" && state.statusIcon === "company"
                  ? "left-[26px]"
                  : state.statusIcon === "online-indicator" && state.size === "sm"
                  ? "left-[22px]"
                  : state.size === "sm" && state.statusIcon === "company"
                  ? "left-[20px]"
                  : state.size === "xs" && state.statusIcon === "online-indicator"
                  ? "left-[16px]"
                  : state.size === "xs" && state.statusIcon === "company"
                  ? "left-[14px]"
                  : "left-[46px]"
              } ${
                state.statusIcon === "online-indicator" && state.size === "xl"
                  ? "top-[40px]"
                  : !state.placeholder &&
                    state.statusIcon === "online-indicator" &&
                    !state.text &&
                    state.size === "two-xl"
                  ? "top-[48px]"
                  : state.size === "xl" && state.statusIcon === "company"
                  ? "top-[38px]"
                  : state.statusIcon === "company" && state.size === "two-xl"
                  ? "top-[44px]"
                  : state.size === "lg" && state.statusIcon === "online-indicator"
                  ? "top-[34px]"
                  : state.size === "lg" && state.statusIcon === "company"
                  ? "top-[32px]"
                  : state.statusIcon === "online-indicator" && state.size === "md"
                  ? "top-[28px]"
                  : state.size === "md" && state.statusIcon === "company"
                  ? "top-[26px]"
                  : state.statusIcon === "online-indicator" && state.size === "sm"
                  ? "top-[22px]"
                  : state.size === "sm" && state.statusIcon === "company"
                  ? "top-[20px]"
                  : state.size === "xs" && state.statusIcon === "online-indicator"
                  ? "top-[16px]"
                  : state.size === "xs" && state.statusIcon === "company"
                  ? "top-[14px]"
                  : "top-[46px]"
              } ${state.statusIcon === "company" ? "bg-cover" : ""} ${
                ["lg", "two-xl"].includes(state.size) &&
                (state.size === "lg" || state.statusIcon === "online-indicator") &&
                (state.size === "two-xl" || state.statusIcon === "company") &&
                ["company", "online-indicator"].includes(state.statusIcon)
                  ? "h-[19px]"
                  : state.size === "xl" && state.statusIcon === "company"
                  ? "h-[21px]"
                  : state.statusIcon === "company" && state.size === "two-xl"
                  ? "h-[23px]"
                  : ["lg", "sm"].includes(state.size) &&
                    (state.size === "lg" || state.statusIcon === "company") &&
                    (state.size === "sm" || state.statusIcon === "online-indicator") &&
                    ["online-indicator", "company"].includes(state.statusIcon)
                  ? "h-[15px]"
                  : ["md", "xs"].includes(state.size) &&
                    (state.size === "md" || state.statusIcon === "company") &&
                    (state.size === "xs" || state.statusIcon === "online-indicator") &&
                    ["online-indicator", "company"].includes(state.statusIcon)
                  ? "h-[13px]"
                  : state.statusIcon === "online-indicator" && state.size === "sm"
                  ? "h-[11px]"
                  : state.size === "xs" && state.statusIcon === "online-indicator"
                  ? "h-[9px]"
                  : "h-[17px]"
              } ${
                state.statusIcon === "company" && state.size === "two-xl"
                  ? "bg-[url(/static/img/avatar-company-icon-12.png)]"
                  : state.size === "lg" && state.statusIcon === "company"
                  ? "bg-[url(/static/img/avatar-company-icon-9.png)]"
                  : state.size === "md" && state.statusIcon === "company"
                  ? "bg-[url(/static/img/avatar-company-icon-6.png)]"
                  : state.size === "sm" && state.statusIcon === "company"
                  ? "bg-[url(/static/img/avatar-company-icon-3.png)]"
                  : state.size === "xs" && state.statusIcon === "company"
                  ? "bg-[url(/static/img/avatar-company-icon.png)]"
                  : "bg-[url(/static/img/avatar-company-icon-13.png)]"
              } ${
                state.statusIcon === "online-indicator" && state.size === "xl"
                  ? "rounded-[7px]"
                  : state.statusIcon === "online-indicator" && state.size === "two-xl"
                  ? "rounded-[8px]"
                  : state.statusIcon === "company" && state.size === "two-xl"
                  ? "rounded-[13.33px]"
                  : state.size === "lg" && state.statusIcon === "online-indicator"
                  ? "rounded-[6px]"
                  : state.statusIcon === "online-indicator" && state.size === "md"
                  ? "rounded-[5px]"
                  : state.statusIcon === "online-indicator" && state.size === "sm"
                  ? "rounded-[4px]"
                  : state.size === "xs" && state.statusIcon === "online-indicator"
                  ? "rounded-[3px]"
                  : "rounded-[12px]"
              } ${state.statusIcon === "company" ? "bg-[50%_50%]" : ""} ${
                state.statusIcon === "online-indicator" ? "bg-success-500" : ""
              }`}
            />
          )}

          {state.size === "lg" && state.placeholder && (
            <User0127
              className={
                state.statusIcon === "false"
                  ? "!absolute !w-[28px] !h-[28px] !top-[9px] !left-[9px]"
                  : ["company", "online-indicator"].includes(state.statusIcon)
                  ? "!absolute !w-[28px] !h-[28px] !top-[10px] !left-[10px]"
                  : undefined
              }
            />
          )}

          {state.placeholder && state.size === "lg" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div
              className={`border-[1.5px] border-solid border-basewhite absolute ${
                state.statusIcon === "online-indicator" ? "w-[15px]" : "w-[19px]"
              } ${state.statusIcon === "online-indicator" ? "left-[34px]" : "left-[32px]"} ${
                state.statusIcon === "online-indicator" ? "top-[34px]" : "top-[32px]"
              } ${state.statusIcon === "company" ? "bg-cover" : ""} ${
                state.statusIcon === "online-indicator" ? "h-[15px]" : "h-[19px]"
              } ${state.statusIcon === "company" ? "bg-[url(/static/img/avatar-company-icon-9.png)]" : ""} ${
                state.statusIcon === "online-indicator" ? "rounded-[6px]" : "rounded-[12px]"
              } ${state.statusIcon === "company" ? "bg-[50%_50%]" : ""} ${
                state.statusIcon === "online-indicator" ? "bg-success-500" : ""
              }`}
            />
          )}

          {state.size === "md" && state.placeholder && (
            <User0118
              className={
                ["company", "online-indicator"].includes(state.statusIcon)
                  ? "!absolute !w-[24px] !h-[24px] !top-[8px] !left-[8px]"
                  : state.statusIcon === "false"
                  ? "!absolute !w-[24px] !h-[24px] !top-[7px] !left-[7px]"
                  : undefined
              }
            />
          )}

          {state.placeholder && state.size === "md" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div
              className={`border-[1.5px] border-solid border-basewhite absolute ${
                state.statusIcon === "online-indicator" ? "w-[13px]" : "w-[17px]"
              } ${state.statusIcon === "online-indicator" ? "left-[28px]" : "left-[26px]"} ${
                state.statusIcon === "online-indicator" ? "top-[28px]" : "top-[26px]"
              } ${state.statusIcon === "company" ? "bg-cover" : ""} ${
                state.statusIcon === "online-indicator" ? "h-[13px]" : "h-[17px]"
              } ${state.statusIcon === "company" ? "bg-[url(/static/img/avatar-company-icon-6.png)]" : ""} ${
                state.statusIcon === "online-indicator" ? "rounded-[5px]" : "rounded-[12px]"
              } ${state.statusIcon === "company" ? "bg-[50%_50%]" : ""} ${
                state.statusIcon === "online-indicator" ? "bg-success-500" : ""
              }`}
            />
          )}

          {state.placeholder && state.size === "sm" && (
            <User019 className="!absolute !w-[20px] !h-[20px] !top-[6px] !left-[6px]" />
          )}

          {state.placeholder && state.size === "sm" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div
              className={`border-[1.5px] border-solid border-basewhite absolute ${
                state.statusIcon === "online-indicator" ? "w-[11px]" : "w-[15px]"
              } ${state.statusIcon === "online-indicator" ? "left-[22px]" : "left-[20px]"} ${
                state.statusIcon === "online-indicator" ? "top-[22px]" : "top-[20px]"
              } ${state.statusIcon === "company" ? "bg-cover" : ""} ${
                state.statusIcon === "online-indicator" ? "h-[11px]" : "h-[15px]"
              } ${state.statusIcon === "company" ? "bg-[url(/static/img/avatar-company-icon-3.png)]" : ""} ${
                state.statusIcon === "online-indicator" ? "rounded-[4px]" : "rounded-[12px]"
              } ${state.statusIcon === "company" ? "bg-[50%_50%]" : ""} ${
                state.statusIcon === "online-indicator" ? "bg-success-500" : ""
              }`}
            />
          )}

          {state.size === "xs" && state.placeholder && (
            <User01 className="!absolute !w-[16px] !h-[16px] !top-[4px] !left-[4px]" />
          )}

          {state.placeholder && state.size === "xs" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div
              className={`border-[1.5px] border-solid border-basewhite absolute ${
                state.statusIcon === "online-indicator" ? "w-[9px]" : "w-[13px]"
              } ${state.statusIcon === "online-indicator" ? "left-[16px]" : "left-[14px]"} ${
                state.statusIcon === "online-indicator" ? "top-[16px]" : "top-[14px]"
              } ${state.statusIcon === "company" ? "bg-cover" : ""} ${
                state.statusIcon === "online-indicator" ? "h-[9px]" : "h-[13px]"
              } ${state.statusIcon === "company" ? "bg-[url(/static/img/avatar-company-icon.png)]" : ""} ${
                state.statusIcon === "online-indicator" ? "rounded-[3px]" : "rounded-[12px]"
              } ${state.statusIcon === "company" ? "bg-[50%_50%]" : ""} ${
                state.statusIcon === "online-indicator" ? "bg-success-500" : ""
              }`}
            />
          )}

          {state.statusIcon === "verified" && (
            <VerifiedTick17
              className={
                state.size === "xl"
                  ? "!absolute !w-[18px] !h-[18px] !top-[37px] !left-[37px]"
                  : state.size === "two-xl"
                  ? "!absolute !w-[20px] !h-[20px] !top-[43px] !left-[43px]"
                  : state.size === "lg"
                  ? "!absolute !w-[16px] !h-[16px] !top-[31px] !left-[31px]"
                  : state.size === "md"
                  ? "!absolute !w-[14px] !h-[14px] !top-[25px] !left-[25px]"
                  : state.size === "sm"
                  ? "!absolute !w-[12px] !h-[12px] !top-[20px] !left-[20px]"
                  : "!absolute !w-[10px] !h-[10px] !top-[15px] !left-[15px]"
              }
            />
          )}
        </div>
      )}

      {state.statusIcon === "false" && !state.text && !state.placeholder && (
        <>
          <>
            {contrastBorder && (
              <AvatarContrast
                className={avatarContrastWeightHeavyClassName}
                weight={["sm", "xs"].includes(state.size) ? "light" : "regular"}
              />
            )}
          </>
        </>
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

Avatar.propTypes = {
  contrastBorder: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "xs", "lg", "two-xl", "sm", "md"]),
  placeholder: PropTypes.bool,
  text: PropTypes.bool,
  statusIcon: PropTypes.oneOf(["company", "false", "verified", "online-indicator"]),
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
  text1: PropTypes.string,
};
