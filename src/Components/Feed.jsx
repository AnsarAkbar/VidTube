import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

// const thumbnails = [
//   {
//     src: thumbnail1,
//     channelName: "mrbest",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "15k views, 2 days ago",
//   },
//   {
//     src: thumbnail2,
//     channelName: "Oriental Star Agencies",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "5k views, 9 days ago",
//   },
//   {
//     src: thumbnail3,
//     channelName: "Nupur",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "12k views, 2 days ago",
//   },
//   {
//     src: thumbnail4,
//     channelName: "Khan Saab",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "15k views, 10 days ago",
//   },
//   {
//     src: thumbnail5,
//     channelName: "Chia or code",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "115k views, 2 weeks ago",
//   },
//   {
//     src: thumbnail6,
//     channelName: "Bilal Saleem",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "152k views, 2 days ago",
//   },
//   {
//     src: thumbnail7,
//     channelName: "Ball Of century",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "150k views, 5 days ago",
//   },
//   {
//     src: thumbnail8,
//     channelName: "Chilli High",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "105k views, 6 days ago",
//   },
//   {
//     src: thumbnail6,
//     channelName: "Bilal Saleem",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     views: "152k views, 2 days ago",
//   },
// ];

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  console.log(category);

  const URL = `https:youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

  const fetchData = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => fetchData, [category]);

  return (
    <div className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((values, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
          <Link to={`video/${values.snippet.categoryId}/${values.id}`}>
            <img
              src={values.snippet.thumbnails.medium.url}
              alt=""
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <h3 className="text-base font-semibold">{values.snippet.title}</h3>
            <p className="text-xs text-gray-600">
              {values.snippet.channelTitle}
            </p>
            <p className="text-xs text-gray-600">
              {value_converter(values.statistics.viewCount)}views{" "}
              {moment(values.snippet.publishedAt).fromNow()}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
