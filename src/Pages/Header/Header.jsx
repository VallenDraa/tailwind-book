import React from 'react';
import Bg from '../../assets/svg/Header/bg.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

export default function Header() {
  return (
    <header className="relative">
      {/* background */}
      <div className="inset-0 absolute z-0">
        <img src={Bg} alt=" " className="w-full h-[950px]" />
      </div>

      {/* navbar */}
      <Navbar />

      {/* jumbotron */}
      <Jumbotron />
    </header>
  );
}
