import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";

const navItem = ["Demos", "Categories", "Post", "Contact us", "Login"];

const Header = () => {
  return (
    <header className="md:p-16 p-4 md z-10 ">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm  p-4 mx-auto md:max-w-screen-2xl">
        <div className="flex items-center gap-4">
          <div>
            <img className="cursor-pointer" src={logo} alt="logo" />
          </div>
          <div className="hidden lg:flex items-center ml-4">
            <ul className="flex items-center gap-6 text-sm font-medium tracking-tight">
              {navItem.map((nav, i) => (
                <li className="cursor-pointer hover:text-[#2d5de0]" key={i}>
                  {" "}
                  {nav}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <div className="xl:flex hidden items-center gap-10 ">
              <p className="text-[#67717a] text-xs font-bold  tracking-tight">
                Welcome to Tomorrow's Tech Wonders!
              </p>
              <span className="border-r h-8"></span>
            </div>

            <div className="hidden md:flex items-center gap-2  text-[#2F323D] hover:text-[#2d5de0] cursor-pointer">
              {" "}
              <span className="text-sm font-medium  ">
                <i className="fa-sharp fa-solid fa-bolt"></i> Features
              </span>
            </div>
            <i className="fa-solid fa-moon hover:opacity-70 cursor-pointer"></i>
            <i className="fa-solid fa-magnifying-glass bg-[#f8f9fa] p-3 rounded-md cursor-pointer"></i>
            <div className="h-10 w-10 overflow-hidden rounded-full cursor-pointer">
              <img src={avatar} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
