import React, { memo } from "react";

const SearchItem = ({
  children,
  text,
  bgColor,
  textColor,
  fontWeight,
  IcBefore,
  IcAfter,
  justifyCenter,
  defaultText,
}) => {
  return (
    <div
      className={`${
        bgColor || "bg-white"
      } p-2 rounded-md text-[#909ab0] text-sm ${
        text && "font-semibold"
      } w-full flex items-center ${
        justifyCenter ? "justify-center" : ""
      } gap-2 cursor-pointer relative hover:opacity-90 transition-all duration-300`}
    >
      {IcBefore && <IcBefore />}
      <span
        className={`cr-truncate-1 ${
          text ? "text-secondary" : "text-[#909ab0]"
        }`}
      >
        {text || defaultText}
      </span>
      {IcAfter && <IcAfter className="absolute right-2"></IcAfter>}
      {children}
    </div>
  );
};

export default memo(SearchItem);
