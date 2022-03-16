import React from 'react';
import Logo from '../../assets/svg/Header/logo.svg';

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center pt-8 px-20 max-w-screen-2xl mx-auto">
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <img src={Logo} alt="M" />
        <p className="text-white text-[18px] font-bold">THE MALAKA</p>
      </div>
      {/* Menus */}
      <ul className="flex gap-x-4">
        <li>
          <a
            className="px-3 text-[16px] text-white/80 hover:text-white font-thin hover:font-bold duration-200 "
            href="#top"
          >
            Top
          </a>
        </li>
        <li>
          <a
            className="px-3 text-[16px] text-white/80 hover:text-white font-thin hover:font-bold duration-200 "
            href="#for-everyone"
          >
            For Everyone
          </a>
        </li>
        <li>
          <a
            className="px-3 text-[16px] text-white/80 hover:text-white font-thin hover:font-bold duration-200 "
            href="#benefit"
          >
            Benefit
          </a>
        </li>
        <li>
          <a
            className="px-3 text-[16px] text-white/80 hover:text-white font-thin hover:font-bold duration-200 "
            href="#preview"
          >
            Preview
          </a>
        </li>
        <li>
          <a
            className="px-3 text-[16px] text-white/80 hover:text-white font-thin hover:font-bold duration-200 "
            href="#penulis"
          >
            Penulis
          </a>
        </li>
      </ul>
      {/* download */}
      <a
        href="#"
        className="font-bold bg-white hover:bg-white/80 active:bg-primary active:text-white px-5 py-2 rounded-full duration-300"
      >
        Download
      </a>
    </nav>
  );
}
