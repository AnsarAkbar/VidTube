import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Feed from "../../Components/Feed";

const Home = () => {
  const [category,setCategory]=useState(0)
  return (
    <div className="flex">
      <Sidebar category={category} setCategory={setCategory}/>
      <Feed category={category} setCategory={setCategory}/>
    </div>
  );
};

export default Home;
