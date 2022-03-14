import React from 'react';
import headerSVG from '../svg/Header/header.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

export default function Header() {
  return (
    <header className="relative">
      {/* background */}
      <div className="inset-0 absolute z-0">
        <img
          src={headerSVG}
          alt=" "
          className="w-full h-screen max-h-[1000px]"
        />
      </div>

      {/* navbar */}
      <Navbar />

      {/* jumbotron */}
      <Jumbotron />
    </header>
  );
}
