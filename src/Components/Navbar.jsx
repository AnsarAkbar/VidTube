import React from "react";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import upload from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import profile_img from "../assets/jack.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-[1920px] px-4 py-2 bg-white">
      <div className="flex items-center space-x-4">
        <img src={menu} alt="Menu Icon" className="w-8 h-8" />
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex items-center flex-grow max-w-lg relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-4 border border-gray-300 rounded-full focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-transparent">
          <img src={search} alt="Search Icon" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <img src={upload} alt="Upload Icon" className="w-7 h-7" />
        <img src={more} alt="More Icon" className="w-7 h-7" />
        <img src={notification} alt="Notification Icon" className="w-7 h-7" />
        <img src={profile_img} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
