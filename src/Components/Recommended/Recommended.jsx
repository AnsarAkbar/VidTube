import React from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

const thumbnail = [{
src: thumbnail1,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail2,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail3,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail4,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail5,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail6,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail7,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
{
src: thumbnail8,
title: "mashap songe in english",
channel: "GreatStack",
views: "240K Views",
},
];
const Recommended = () => {

  return (
    <div className="w-[30%]">
      {
        thumbnail.map((values,index)=>(
          <div key={index} className="flex justify-between mb-3 cursor-pointer">
            <img src={values.src} alt="video" className="w-[50%] basis-[49%]"/>
            <div className="w-[50%] basis-[49%]">
              <div>
                <p className="text-lg font-medium">{values.title}</p>
                <p>{values.channel}</p>
                <p>{values.views}</p>
              </div>

            </div>
          </div>
        ))
      } 
    </div>
  );
};

export default Recommended;
