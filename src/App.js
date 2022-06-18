import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
// import Footer from './components/common/Footer';
import Home from "./components/common/Home";

// import About from './components/common/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
   
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=kidcudi`
    )
      .then((response) => {
        const videoResponse = response.json();
        console.log(videoResponse, response);
     
        return videoResponse;
      })
      .then((data) => {
      
        return setVideos(data)});
  }, []);


  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideosIndex />} />
        </ Routes>
        {/* <Footer /> */}


      </div>
    </Router>
  );
}

export default App;
