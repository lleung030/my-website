'use client'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import PongGame from './components/game/PongGame.jsx'

export default function Home() {
  return (
    <Router>

    <main className="">
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pong-game" element={<PongGame />} />
      </Routes>
    </main>
    </Router>
  )
}
