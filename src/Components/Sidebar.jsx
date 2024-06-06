import React, { useContext } from "react";
import game_icon from "../assets/game_icon.png";
import home from "../assets/home.png";
import automobiles from "../assets/automobiles.png";
import entertainment from "../assets/entertainment.png";
import sports from "../assets/sports.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";
import simon from "../assets/simon.png";
import { Context } from "./Context";

const Sidebar = () => {
  
  const {sidebar}=useContext(Context)
  const sidebarCategories = [
    { src: home, name: "Home" },
    { src: game_icon, name: "Games" },
    { src: automobiles, name: "Automobiles" },
    { src: sports, name: "Sports" },
    { src: entertainment, name: "Entertainment" },
    { src: tech, name: "Technology" },
    { src: music, name: "Music" },
    { src: blogs, name: "Blogs" },
    { src: news, name: "News" },
  ];

  const subscribes = [
    { src: tom, name: "PewDiePie" },
    { src: megan, name: "Mr. Beast" },
    { src: cameron, name: "Justin Bieber" },
    { src: simon, name: "5-Minute Crafts" },
  ];

  return (
    <div className={`p-4 bg-gray-50 border-none  ${sidebar===true? 'w-16':'w-60'}`}>
      {sidebarCategories.map((value, index) => (
        <div className="flex items-center py-2 hover:bg-gray-200 cursor-pointer" key={index}>
          <img src={value.src} alt={value.name} className="w-6 h-6 mr-4" />
          <p className={`text-sm text-gray-800 ${sidebar===true? 'hidden':'block'}`}>{value.name}</p>
        </div>
      ))}
      <hr className="my-4 border-gray-300" />
      <p className={` ${sidebar===true? 'hidden':'text-xs text-gray-600 mb-2'}`}>SUBSCRIBED</p>
      {subscribes.map((value, index) => (
        <div className="flex items-center py-2 hover:bg-gray-200 cursor-pointer" key={index}>
          <img src={value.src} alt={value.name} className="w-6 h-6 mr-4 rounded-full" />
          <p className={`text-sm text-gray-600  ${sidebar===true? 'hidden':'block'}`}>{value.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
