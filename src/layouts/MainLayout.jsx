import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMosque } from "react-icons/fa";
import { route } from "../utils/route";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { successNotify } from "../utils/helper";

const MainLayout = ({ children, setAuth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogOut() {
    const logout2 = await signOut(auth);
    navigate("/login");
    dispatch(logout());
    setAuth(null);
    successNotify("Logout Berhasil");
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        {/* HEADER */}
        <div className="flex items-center justify-between h-36 lg:hidden">
          <div className="flex items-center gap-3 ml-4">
            <FaMosque color="#272343" size={30} />
            <span className="font-bold text-stroke text-[20px]">Al-IHSAN</span>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="h-full border-none rounded-none btn drawer-button lg:hidden bg-main "
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
        <div className="p-4 lg:py-[70px] lg:px-[59px]">{children}</div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="flex flex-col px-8 w-[232px] py-[79px] h-full bg-stroke text-base-content gap-[103px]">
          <div className="flex items-center justify-center gap-3">
            <FaMosque color="white" size={25} />
            <span className="font-bold text-main text-[20px]">Al-IHSAN</span>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6">
              {route.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    activeClassName="active"
                    className="flex text-white items-center gap-3 py-2 pl-4 rounded-[4px] hover:bg-main hover:text-stroke"
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
            <NavLink
              to="/login"
              onClick={handleLogOut}
              activeClassName="active"
              className="flex text-white items-center gap-3 py-2 pl-4 rounded-[4px] hover:bg-main hover:text-stroke"
            >
              <RiLogoutCircleRLine size={24} />
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
