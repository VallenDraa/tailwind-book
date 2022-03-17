import React, { useRef } from 'react';
import Logo from '../../assets/svg/Header/logo.svg';

export default function Navbar() {
  const menu = useRef(null);

  function openMenu() {
    const classList = menu.current.classList;

    if (classList) {
      classList.contains('hidden')
        ? classList.replace('hidden', 'flex')
        : classList.replace('flex', 'hidden');
    }
  }

  return (
    <nav className="relative z-10 flex justify-between items-center pt-8 px-8 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <img src={Logo} alt="M" className="h-8 w-8 sm:w-fit sm:h-fit" />
        <p className="text-white text-[12px] sm:text-[18px] font-bold">
          THE MALAKA
        </p>
      </div>
      {/* Menus */}
      <ul ref={menu} className="gap-x-4 absolute xl:static hidden xl:flex ">
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
        {/* download button in menu */}
        <li>
          <a
            className="inline xl:hidden px-3 text-[16px] text-white/80 hover:text-white font-thin hover:font-bold duration-200 "
            href="#penulis"
          >
            Download
          </a>
        </li>
      </ul>
      {/* download */}
      <a
        href="#"
        className="hidden xl:block font-bold bg-white hover:bg-white/80 active:bg-primary active:text-white px-5 py-2 rounded-full duration-300"
      >
        Download
      </a>
      {/* hamburger menu */}
      <i
        onClick={openMenu}
        className="cursor-pointer fa-solid fa-bars text-3xl sm:text-4xl text-white hover:text-lighter-primary active:text-primary text-dark-muted xl:hidden duration-300"
      />
    </nav>
  );
}
