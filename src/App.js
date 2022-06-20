import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/common/Home";
import VideosIndex from "./components/VideosIndex";
// import Footer from './components/common/Footer';
import About from './components/common/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Adnan from "./components/Creators/Adnan";

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('')
  const [maxResult, setMaxResult] = useState(5)

  useEffect(() => {
   
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=${maxResult}` 
    ) 
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [search, maxResult]);



  return (
    <Router>
      <div className="App">
        <Navbar setSearch={setSearch} setMaxResult={setMaxResult}/>
        <Routes>
          <Route path="/adnan" element={<Adnan/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideosIndex videos={videos}/>} />
          <Route path="/about" element={<About/>}/>
        </ Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
