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

const Sidebar = ({category,setCategory}) => {
  
  const {sidebar}=useContext(Context)
  const sidebarCategories = [
    { src: home, name: "Home", id:"0"},
    { src: game_icon, name: "Games", id:"20" },
    { src: automobiles, name: "Automobiles" },
    { src: sports, name: "Sports", id: "17" },
    { src: entertainment, name: "Entertainment", id: "24" },
    { src: tech, name: "Technology", id: "28" },
    { src: music, name: "Music", id: "10" },
    { src: blogs, name: "Blogs", id: "15" },
    { src: news, name: "News", id: "25" },
  ];

  const subscribes = [
    { src: tom, name: "PewDiePie" },
    { src: megan, name: "Mr. Beast" },
    { src: cameron, name: "Justin Bieber" },
    { src: simon, name: "5-Minute Crafts" },
  ];
  
  return (
    <div className={`p-4 border-none  ${sidebar===true? 'w-16':'w-60'}`}>
      {sidebarCategories.map((value, index) => (
        <div onClick={()=>setCategory(value.id)} className="flex items-center py-2 hover:bg-gray-200 cursor-pointer" key={index}>
          <img src={value.src} alt={value.name}  className={`w-6 h-6 mr-4 ${category== value.id ? "pb-[2px] border-b-[3px] border-b-red-600 ":""}`} />
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
