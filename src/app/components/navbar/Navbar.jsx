// components/Navbar.js

// import Link from 'next/link';
import { Link } from 'react-router-dom';
import About from '../about/About.jsx';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">
            <Link href="/">
              Lucas Portfolio
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className='text-white'>
              Home
            </Link>
            <Link to="/about" className='text-white'>
              About
            </Link>
            <Link to="/tictactoe" className='text-white'>
              Tic Tac Toe Game
            </Link>
            <Link to="/pong-game" className='text-white'>
              Pong Game
            </Link>
            <Link to="/projects" className='text-white'>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
