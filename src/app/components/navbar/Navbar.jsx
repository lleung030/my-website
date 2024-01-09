// components/Navbar.js

import Link from 'next/link';

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
            <Link href="/" legacyBehavior>
              <a className="text-white">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-white">About</a>
            </Link>
            <Link href="/game" legacyBehavior>
              <a className="text-white">Game</a>
            </Link>
            <Link href="/project" legacyBehavior>
              <a className="text-white">Project</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-white">Contact</a>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
