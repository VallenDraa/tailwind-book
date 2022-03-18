import React from 'react';
import Bg from '../../assets/svg/Header/bg.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

export default function Header() {
  return (
    <header
      id="top"
      className="relative h-[850px] md:h-[1200px] bg-dark md:bg-transparent"
      style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 90%, 0% 100%)' }}
    >
      {/* background */}
      <div className="inset-0 absolute z-0 hidden md:block ">
        <img src={Bg} alt=" " className="w-full h-[950px]" />
      </div>

      {/* navbar */}
      <Navbar />

      {/* jumbotron */}
      <Jumbotron />
    </header>
  );
}
