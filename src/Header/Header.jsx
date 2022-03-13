import React from 'react';
import headerSVG from '../svg/Header/header.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Rectangle1 from '../svg/Header/Rectangle1.svg';
import Rectangle2 from '../svg/Header/Rectangle2.svg';

export default function Header() {
  return (
    <header className="relative">
      {/* background */}
      <div className="inset-0 absolute z-0">
        <img src={headerSVG} alt=" " className="w-full h-screen" />
      </div>

      {/* navbar */}
      <Navbar />

      {/* jumbotron */}
      <Jumbotron />
    </header>
  );
}
