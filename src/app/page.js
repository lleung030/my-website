import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/home/Home.jsx'

export default function Home() {
  return (
    <main className="">
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router> */}
      hello world
      <Homepage />
    </main>
  )
}
