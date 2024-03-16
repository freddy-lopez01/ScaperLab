import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Imported Pages comprised of multiple components
import Home from './components/pages/Home.js';
import NavBar from './components/NavBar.jsx';



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
