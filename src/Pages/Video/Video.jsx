import React from "react";
import PlayVideo from "../../Components/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const {categoryId,videoId}=useParams()
  // console.log(categoryId,videoId)
  return (
    <div className="flex justify-between px-[4%]">
      <PlayVideo videoId={videoId}/>
      <Recommended />
    </div>
  );
};

export default Video;
