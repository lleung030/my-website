import Image from 'next/image'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from './components/game/TicTacToe';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Router>
        <Routes>
          <Route path='tictactoe' element={<TicTacToe />} />
        </Routes>
      </Router>
    </main>
  )
}
