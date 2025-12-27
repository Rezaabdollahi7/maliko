import React from "react";

export default function Title({
  children,
  highlightText,
  underlineWidth = 50,
  className = "",
}) {
  return (
    <h5
      className={`text-3xl lg:text-4xl font-semibold mx-auto relative ${className}`}
    >
      {children}{" "}
      <span className="text-primary font-black">{highlightText}</span>
      <div className="absolute w-full h-[5px] bg-[#0e60c933] mt-2 rounded-full"></div>
      <div
        className="absolute h-[5px] bg-primary left-0 mt-2 rounded-full"
        style={{ width: `${underlineWidth}%` }}
      ></div>
    </h5>
  );
}
