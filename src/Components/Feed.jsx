import React from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const thumbnails = [
  {
    src: thumbnail1,
    channelName: "mrbest",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "15k views, 2 days ago",
  },
  {
    src: thumbnail2,
    channelName: "Oriental Star Agencies",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "5k views, 9 days ago",
  },
  {
    src: thumbnail3,
    channelName: "Nupur",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "12k views, 2 days ago",
  },
  {
    src: thumbnail4,
    channelName: "Khan Saab",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "15k views, 10 days ago",
  },
  {
    src: thumbnail5,
    channelName: "Chia or code",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "115k views, 2 weeks ago",
  },
  {
    src: thumbnail6,
    channelName: "Bilal Saleem",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "152k views, 2 days ago",
  },
  {
    src: thumbnail7,
    channelName: "Ball Of century",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "150k views, 5 days ago",
  },
  {
    src: thumbnail8,
    channelName: "Chilli High",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "105k views, 6 days ago",
  },
  {
    src: thumbnail6,
    channelName: "Bilal Saleem",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    views: "152k views, 2 days ago",
  },
];

const Feed = () => {
  return (
    <div className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {thumbnails.map((values, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
          <Link to={"video/25/4536"}>
            <img src={values.src} alt="" className="w-full h-48 object-cover" />
          </Link>
          <div className="p-4">
            <h3 className="text-base font-semibold">{values.description}</h3>
            <p className="text-xs text-gray-600">{values.channelName}</p>
            <p className="text-xs text-gray-600">{values.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
