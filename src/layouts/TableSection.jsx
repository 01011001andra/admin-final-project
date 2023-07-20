import React from "react";

const TableSection = ({ children, title, description }) => {
  return (
    <div className="lg:flex-row flex flex-col w-full justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-[18px] font-semibold">{title}</h1>
        <span>{description}</span>
      </div>
      {children}
    </div>
  );
};

export default TableSection;
