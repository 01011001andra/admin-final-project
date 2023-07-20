import React from "react";

const Layout = ({ title, children }) => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <h1 className="text-2xl font-bold uppercase">{title}</h1>
      <div className="w-full h-full flex flex-col gap-[46px]">{children}</div>
    </div>
  );
};

export default Layout;
