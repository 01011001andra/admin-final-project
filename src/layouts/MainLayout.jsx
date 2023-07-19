import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaMosque } from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between h-28 lg:hidden">
          <div className="flex items-center gap-3 ml-4">
            <FaMosque color="#272343" size={25} />
            <span className="font-bold text-stroke text-[20px]">Al-IHSAN</span>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn  drawer-button rounded-none lg:hidden bg-main h-full w-32 border-none "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-10 h-10 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        {/* MAIN CONTENT */}
        <div className="w-full h-full p-4  lg:py-[70px] lg:px-[59px]">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu px-8 w-[232px] h-full bg-stroke text-base-content">
          <div className="flex items-center gap-3">
            <FaMosque color="white" size={25} />
            <span className="font-bold text-main text-[20px]">Al-IHSAN</span>
          </div>
          <div>
            <li className="bg-main">
              <Link to="/" className="bg-main">
                Dashboard
              </Link>
            </li>
            <li>
              <NavLink>Acara</NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
