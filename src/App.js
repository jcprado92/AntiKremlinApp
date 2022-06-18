import React from 'react'
import './App.css';
import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer';
import Home from './components/common/Home';
// import About from './components/common/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getData } from './api/fetch.js'
import { useEffect } from 'react'




function App() {

  useEffect(() => {
    getData()
  }, [])

  return (
    <Router>
    <div className="App">  
      {/* <h1>This is our TeleApp</h1> */}
      <Navbar />
     <Routes>
     <Route path="/" element= {< Home />} />
      </Routes>

      {/* <Footer />  */}

 



    </div>
    </Router>
  );
}

export default App;
