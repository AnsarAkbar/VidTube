import React from "react";
import video from "../assets/video.mp4";
import share from "../assets/share.png";
import save from "../assets/save.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import jack from "../assets/jack.png";
import { Button } from "@mui/material";

const PlayVideo = ({videoId}) => {
  return (
    <div className=" bg-white rounded-lg  w-[70%] basis-[68%]">
      <iframe src={`https://www.youtube.com/embed/jmigBo42low?list=${videoId}`} title="East Side Flow - Sidhu Moose Wala | Official Video | Byg Byrd | Sunny Malton | Juke Dock" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* <video className="rounded w-full" controls autoPlay={true} src={video} /> */}

      <div className="flex justify-between">
        <div>
          <p className="mt-4 text-gray-700 text-xl font-bold font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="text-sm text-gray-500">1493 views . 2 days ago</p>
        </div>

        <div className="flex items-center mt-4 space-x-4">
          <div className="flex items-center space-x-1">
            <img src={like} alt="like icon" className="w-6 h-6" />
            <span>125</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={dislike} alt="dislike icon" className="w-6 h-6" />
            <span>12</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={share} alt="share icon" className="w-6 h-6" />
            <span>share</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={save} alt="save icon" className="w-6 h-6" />
            <span>save</span>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex">
          <img
            src={jack}
            alt="Channel img"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-semibold">Channel name</p>
            <p className="text-sm text-gray-500">2.3M Subscribers</p>
            <div>
              <p className="text-sm text-gray-500 mt-4">Channel discreption</p>
            </div>
          </div>
        </div>
        <Button variant="contained" className="bg-red-600">
          SUBSCRIBE
        </Button>
        {/* <button className="">SUBSCRIBE</button> */}
      </div>
      <hr className="my-4 ml-16" />
      <div className="mx-16">
        <p className="text-sm font-semibold">130 Comments</p>
        <div className="flex items-start mt-4">
          <img
            src={jack}
            alt="User profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="text-sm font-semibold">user name</p>
            <p className="text-sm text-gray-700 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="flex items-center space-x-1">
                <img src={like} alt="like icon" className="w-4 h-4" />
                <span>299</span>
              </span>
              <span className="flex items-center space-x-1">
                <img src={dislike} alt="dislike icon" className="w-4 h-4" />
                <span>1</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
