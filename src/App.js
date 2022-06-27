import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
// import Footer from './components/common/Footer';
import Home from "./components/common/Home";
import ShowVideo from "./components/ShowVideo";
import VideosIndex from "./components/VideosIndex";
import About from './components/common/About';
import Modal from "./components/Modal/Modal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import CreatorCard from "./components/CreatorCard";

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [maxResult, setMaxResult] = useState(5);
  const [show, setShow] = useState(false)
 

  return (
    <div className="App">
      {/* <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="My Modal"show={show} onClose={() => setShow(false)}><p>This is modal body</p></Modal> */}
      <Router>
        <Navbar setSearch={setSearch} setMaxResult={setMaxResult} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home setVideos={setVideos} videos={videos}/>} />
            <Route path="/videos/:search/:maxResult" element={<VideosIndex setVideos={setVideos} videos={videos} />} />
            <Route path="/videos/:id" element={<ShowVideo videos={videos} />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<CreatorCard />} />
          </Routes>
            {/* <Footer/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
