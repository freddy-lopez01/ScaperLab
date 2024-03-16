import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imported Pages comprised of multiple components
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Tools from './components/pages/Tools.js';
import Fertilizing from './components/pages/Fertilizing.js';
import Layouts from './components/pages/Layouts.js';
import NavBar from './components/NavBar.jsx';



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/tools' exact Component={Tools}/>
        <Route path='/fertilizing' exact Component={Fertilizing}/>
        <Route path='/layouts' exact Component={Layouts}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
