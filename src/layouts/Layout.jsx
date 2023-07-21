import React from "react";

const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <h1 className="text-2xl font-bold uppercase">{title}</h1>
      <div className="w-full h-full flex flex-col lg:gap-[46px] gap-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
