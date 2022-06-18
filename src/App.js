import React from 'react'
import './App.css';
import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer';

import Home from './components/common/Home';
import About from './components/common/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getData } from './api/fetch.js'
import { useState, useEffect } from 'react'
import VideosIndex from './components/VideosIndex';




function App() {
  const [searches , setSearches] = useState([]);

  useEffect(() => {
    getData()
    .then((videos) => setSearches(videos))
    .then((console.log(videos)));
  }, [])

  return (
    <Router>
    <div className="App">

      {/* <h1>This is our TeleApp</h1> */}
      <Navbar />
     <Routes>
     <Route path="/" element= {< Home />} />
     <Route path="/" element={<VideosIndex getData={getData}/>} />
      </Routes>

      {/* <Footer />  */}

 



    </div>
    </Router>
  );
}

export default App;
