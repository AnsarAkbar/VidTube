import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/video/:categoryId/:videoId"} element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
