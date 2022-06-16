import React from 'react'
import './App.css';
import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer';
// import Home from './components/common/Home';
import About from './components/common/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <Router>
    <div className="App">
      {/* <h1>This is our TeleApp</h1> */}
      <Navbar />
      {/* <Routes>
      <Home />
      </Routes>
      <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
