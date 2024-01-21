/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import { AvatarAddButton } from "../AvatarAddButton";

export const AvatarGroup = ({
  addMoreButton = true,
  moreUsers = true,
  size,
  className,
  avatarSizeXlPlaceholderClassName,
  avatarAvatarContrastWeightHeavyClassName,
  avatarSizeXlPlaceholderClassNameOverride,
  avatarAvatarContrastWeightHeavyClassNameOverride,
  avatarSizePlaceholderClassName,
  avatarAvatarContrastWeightRegularClassName,
  avatarSizePlaceholderClassNameOverride,
  avatarAvatarContrastWeightRegularClassNameOverride,
  avatarSizeLgPlaceholderClassName,
  avatarAvatarContrastWeightLightClassName,
  visible = true,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
}) => {
  return (
    <div className={`inline-flex items-start gap-[8px] relative ${className}`}>
      <div className="inline-flex items-start flex-[0_0_auto] relative">
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightHeavyClassName}
          className={avatarSizeXlPlaceholderClassName}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightHeavyClassNameOverride}
          className={avatarSizeXlPlaceholderClassNameOverride}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightRegularClassName}
          className={avatarSizePlaceholderClassName}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightRegularClassNameOverride}
          className={avatarSizePlaceholderClassNameOverride}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightLightClassName}
          className={avatarSizeLgPlaceholderClassName}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        {visible && (
          <Avatar
            avatarContrastWeightHeavyClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-full"
            className={
              size === "sm"
                ? "!border-basewhite !h-[35px] !mt-[-1.50px] !ml-[-8px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-20.png)] !w-[35px]"
                : size === "md"
                ? "!border-basewhite !h-[43px] !mt-[-1.50px] !ml-[-12px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-10.png)] !w-[43px]"
                : "!border-basewhite !h-[27px] !mt-[-1.50px] !ml-[-4px] !mb-[-1.50px] !border-[1.5px] !border-solid !w-[27px]"
            }
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible1 && (
          <Avatar
            avatarContrastWeightHeavyClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-full"
            className={
              size === "sm"
                ? "!border-basewhite !h-[35px] !mt-[-1.50px] !ml-[-8px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-19.png)] !w-[35px]"
                : size === "md"
                ? "!border-basewhite !h-[43px] !mt-[-1.50px] !ml-[-12px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-9.png)] !w-[43px]"
                : "!border-basewhite !h-[27px] !mt-[-1.50px] !ml-[-4px] !mb-[-1.50px] !border-[1.5px] !border-solid !w-[27px]"
            }
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible2 && (
          <Avatar
            avatarContrastWeightHeavyClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-full"
            className={
              size === "sm"
                ? "!border-basewhite !h-[35px] !mt-[-1.50px] !ml-[-8px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-18.png)] !w-[35px]"
                : size === "md"
                ? "!border-basewhite !h-[43px] !mt-[-1.50px] !ml-[-12px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-8.png)] !w-[43px]"
                : "!border-basewhite !h-[27px] !mt-[-1.50px] !ml-[-4px] !mb-[-1.50px] !border-[1.5px] !border-solid !w-[27px]"
            }
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible3 && (
          <Avatar
            avatarContrastWeightHeavyClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-full"
            className={
              size === "sm"
                ? "!border-basewhite !h-[35px] !mt-[-1.50px] !ml-[-8px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-17.png)] !w-[35px]"
                : size === "md"
                ? "!border-basewhite !h-[43px] !mt-[-1.50px] !ml-[-12px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-7.png)] !w-[43px]"
                : "!border-basewhite !h-[27px] !mt-[-1.50px] !ml-[-4px] !mb-[-1.50px] !border-[1.5px] !border-solid !w-[27px]"
            }
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible4 && (
          <Avatar
            avatarContrastWeightHeavyClassName="!self-stretch !h-[unset] !flex-1 !relative !grow !w-full"
            className={
              size === "sm"
                ? "!border-basewhite !h-[35px] !mt-[-1.50px] !ml-[-8px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-16.png)] !w-[35px]"
                : size === "md"
                ? "!border-basewhite !h-[43px] !mt-[-1.50px] !ml-[-12px] !mb-[-1.50px] !border-[1.5px] !border-solid bg-[url(/static/img/avatar-6.png)] !w-[43px]"
                : "!border-basewhite !h-[27px] !mt-[-1.50px] !ml-[-4px] !mb-[-1.50px] !border-[1.5px] !border-solid !w-[27px]"
            }
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {moreUsers && (
          <Avatar
            className={
              size === "sm"
                ? "!border-basewhite !h-[36px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-8px] !mb-[-2.00px] !border-2 !border-solid !relative !w-[36px]"
                : size === "md"
                ? "!border-basewhite !h-[44px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-12px] !mb-[-2.00px] !border-2 !border-solid !relative !w-[44px]"
                : "!border-basewhite !h-[28px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-4px] !mb-[-2.00px] !border-2 !border-solid !relative !w-[28px]"
            }
            overlapGroupClassName={size === "sm" ? "!w-[32px]" : size === "md" ? "!w-[40px]" : "!w-[24px]"}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text
            text1="+5"
          />
        )}
      </div>
      {addMoreButton && (
        <AvatarAddButton
          className="!mr-[-1.00px] !mt-[-1.00px] !mb-[-1.00px] !relative"
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
        />
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  addMoreButton: PropTypes.bool,
  moreUsers: PropTypes.bool,
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
};
