import { useState, useEffect } from "react";
import share from "../assets/share.png";
import save from "../assets/save.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import jack from "../assets/jack.png";
import { Button } from "@mui/material";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData,setChannelData]=useState(null)
  // videoDetail api
  const fetchApiData = async () => {
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetail_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };
  //  channelData api
  const fetchChannelData=async ()=>{
    const channelDetail_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData[0].snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetail_url)
      .then((response) => response.json())
      .then((value) => setChannelData(value.items[0]));
  }

  useEffect(() => fetchApiData, []);
  useEffect(()=>fetchChannelData, [apiData])

  // console.log(channelData.snippet.thumbnails.default.url);
  console.log(channelData)
  console.log(apiData)

  return (
    <div className=" bg-white rounded-lg  w-[70%] basis-[68%]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        className="w-full h-[37vw] "
        title="East Side Flow - Sidhu Moose Wala | Official Video | Byg Byrd | Sunny Malton | Juke Dock"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between items-start gap-2">
        <div>
          <p className="mt-4 text-gray-700 text-xl font-bold font-serif">
            {apiData ? apiData[0].snippet.title : "data not found"}
          </p>
          <p className="text-sm text-gray-500">
            {apiData
              ? value_converter(apiData[0].statistics.viewCount)
              : "Views can't found"}{" "}
            views .{" "}
            {apiData ? moment(apiData[0].snippet.publishedAt).fromNow() : ""}{" "}
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <span className="flex items-center space-x-1">
            <img src={like} alt="like icon" className="w-6 h-6" />
            {apiData ? value_converter(apiData[0].statistics.likeCount) : ""}
          </span>
          <span className="flex items-center space-x-1">
            <img src={dislike} alt="dislike icon" className="w-6 h-6" />
          </span>
          <span className="flex items-center space-x-1">
            <img src={share} alt="share icon" className="w-6 h-6" />
            share
          </span>
          <span className="flex items-center space-x-1">
            <img src={save} alt="save icon" className="w-6 h-6" />
            save
          </span>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex">
          <img
            src={channelData.snippet.thumbnails.default.url}
            alt="Channel thumbnails"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-semibold">
              {apiData ? apiData[0].snippet.channelTitle : ""}
            </p>
            {/* <p className="text-sm text-gray-500">{channelData.statistics.subscriberCount}</p> */}
          </div>
        </div>
        <Button variant="contained" className="bg-red-600">
          SUBSCRIBE
        </Button>
        {/* <button className="">SUBSCRIBE</button> */}
      </div>
      <div className="mx-16">
        <div>
          <hr className="my-4 " />
          <p className="text-sm text-gray-500 mt-4">
            {apiData ? apiData[0].snippet.description.slice(0,250) : ""}
          </p>
        </div>
        <p className="text-sm font-semibold my-4">{apiData ?value_converter(apiData[0].statistics.commentCount): ""} Comments</p>
        <div className="flex items-start mt-4">
          <img
            src={jack}
            alt="User profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="text-sm font-semibold">user name</p>
            <p className="text-sm text-gray-700 mt-1">
              Lo ipsum dolor sit amet consectetur adipisicing elit.
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
