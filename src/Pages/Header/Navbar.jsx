import React, { useRef } from 'react';
import Logo from '../../assets/svg/Header/logo.svg';

export default function Navbar() {
  const navbar = useRef(null);
  const menu = useRef(null);

  function openMenu() {
    const classList = menu.current.classList;

    classList.add('h-[300px]');
    classList.replace('hidden', 'flex');
    classList.remove('animate-shrink-fade-out');
    classList.add('animate-grow-fade-in');
  }
  function closeMenu() {
    const classList = menu.current.classList;

    classList.remove('animate-grow-fade-in');
    classList.add('animate-shrink-fade-out');
    setTimeout(() => {
      classList.replace('flex', 'hidden');
      classList.remove('h-[300px]');
    }, 300);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      if (menu.current) {
        menu.current.classList.remove('h-[300px]');
        menu.current.classList.remove('animate-shrink-fade-out');
        menu.current.classList.remove('animate-grow-fade-in');
      }
    } else {
      if (menu.current) {
        menu.current.classList.add('h-[300px]');
      }
    }
  });
  return (
    <nav
      ref={navbar}
      className="relative z-10 flex justify-between items-center pt-8 px-8 md:px-12 lg:px-20 max-w-screen-2xl mx-auto"
    >
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <img src={Logo} alt="M" className="h-8 w-8 sm:w-fit sm:h-fit" />
        <p className="text-white text-[12px] sm:text-[18px] font-bold">
          THE MALAKA
        </p>
      </div>
      {/* Menus */}
      <ul
        ref={menu}
        className="xl:gap-4 p-3 xl:p-0 my-2 xl:m-0 z-20 xl:z-0 absolute inset-0 rounded-xl bg-white xl:bg-transparent xl:static hidden xl:flex flex-col xl:flex-row origin-top-right"
      >
        <div className="mb-2 flex xl:hidden justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-x-2">
            <img
              src={Logo}
              alt="M"
              className="max-h-8 max-w-8 sm:w-fit sm:h-fit"
            />
            <p className="text-dark text-xs font-bold w-[120px]">THE MALAKA</p>
          </div>
          <i
            onClick={closeMenu}
            className="rounded px-2 text-xl fa-solid fa-xmark text-dark-muted duration-300 hover:bg-dark/5"
          />
        </div>
        <li className="w-full xl:w-fit">
          <a
            className="w-full xl:w-fit inline-block p-1 xl:py-0 xl:px-3 text-[16px] text-dark-muted xl:text-white/80 xl:hover:text-white font-thin hover:bg-dark/5 xl:hover:font-bold duration-200 "
            href="#top"
          >
            Top
          </a>
        </li>
        <li className="w-full xl:w-fit">
          <a
            className="w-full xl:w-fit inline-block p-1 xl:py-0 xl:px-3  text-[16px] text-dark-muted xl:text-white/80 xl:hover:text-white font-thin hover:bg-dark/5 xl:hover:font-bold duration-200 "
            href="#for-everyone"
          >
            For Everyone
          </a>
        </li>
        <li className="w-full xl:w-fit">
          <a
            className="w-full xl:w-fit inline-block p-1 xl:py-0 xl:px-3  text-[16px] text-dark-muted xl:text-white/80 xl:hover:text-white font-thin hover:bg-dark/5 xl:hover:font-bold duration-200 "
            href="#benefit"
          >
            Benefit
          </a>
        </li>
        <li className="w-full xl:w-fit">
          <a
            className="w-full xl:w-fit inline-block p-1 xl:py-0 xl:px-3  text-[16px] text-dark-muted xl:text-white/80 xl:hover:text-white font-thin hover:bg-dark/5 xl:hover:font-bold duration-200 "
            href="#preview"
          >
            Preview
          </a>
        </li>
        <li className="w-full xl:w-fit">
          <a
            className="w-full xl:w-fit inline-block p-1 xl:py-0 xl:px-3  text-[16px] text-dark-muted xl:text-white/80 xl:hover:text-white font-thin hover:bg-dark/5 xl:hover:font-bold duration-200 "
            href="#penulis"
          >
            Penulis
          </a>
        </li>
        {/* download button in menu */}
        <li className="h-full w-full xl:w-fit  text-center">
          <a
            className="xl:hidden h-full w-full xl:w-fit p-0 xl:px-3 text-[16px] text-primary xl:text-white/80 xl:hover:text-white font-thin hover:bg-dark/5 xl:hover:font-bold duration-200 flex items-center justify-center"
            href="#"
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
        className="cursor-pointer fa-solid fa-bars text-3xl text-white hover:text-lighter-primary active:text-primary text-dark-muted xl:hidden duration-300"
      />
    </nav>
  );
}
