import React from 'react';
import logo from '../../assets/svg/Footer/logo.svg';

export default function Footer() {
  return (
    <footer className="relative bg-dark md:rounded-tr-[50px] polygon-footer md:polygon-0">
      <div className="max-w-screen-2xl px-8 md:px-12 xl:px-20 mx-auto py-10 md:py-0">
        <header className="py-[50px] flex flex-col xl:flex-row justify-between items-center ">
          {/* left */}
          <div className="mb-8 xl:mb-0">
            <h2 className="font-medium leading-[44px] text-[26px] mt-[10px] tracking-light text-white text-center xl:text-left ">
              Sudah siap meningkatkan skill kamu?
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white/80 leading-[32px] max-w-[575px] mt-[10px] text-center xl:text-left">
              Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
              pertanyaan kamu di halaman bantuan.
            </p>
          </div>
          {/* right */}
          <div className="flex flex-col sm:flex-row gap-[30px] w-full md:w-fit justify-center items-center">
            <a
              href="#"
              className=" flex px-10 py-4 text-dim-gray hover:text-dark-muted active:text-white bg-dark-gray hover:bg-lighter-primary active:bg-primary duration-200 font-bold items-center rounded-[10px] w-full sm:w-fit gap-x-2 h-fit grow xl:grow-0"
            >
              <p className=" xl:text-[16px] mx-auto">Pusat Bantuan</p>
            </a>
            <a
              href="#"
              className=" flex px-10 py-4 text-dim-gray bg-primary shadow-soft hover:shadow-transparent active:bg-primary/60 duration-200 font-bold items-center rounded-[10px] w-full sm:w-fit gap-x-2 h-fit grow xl:grow-0"
            >
              <p className=" xl:text-[16px] mx-auto">Mendaftar</p>
            </a>
          </div>
        </header>
        <footer className="py-[50px] flex flex-col xl:flex-row gap-y-[50px] xl:gap-0 justify-between items-center">
          <div className="text-center xl:text-left">
            <img src={logo} alt="" className="mx-auto xl:mx-0" />
            <p className="text-white text-[18px] font-bold my-[15px]">
              THE MALAKA
            </p>
            <p className="text-[16px] text-white/80 leading-[32px] max-w-[575px] mt-[10px]">
              Malaka adalah situs penyedia kursus ilmu komputer berbahasa
              Indonesia, mulai dari pengembangan hingga desain grafis.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30px] justify-between w-full xl:w-[575px]">
            {/* PRODUCTS */}
            <ul className="w-full xl:w-fit xl:mx-0 text-center xl:text-left">
              <li className="mb-5">
                <p className="font-bold text-[14px] text-white/60 tracking-widest">
                  PRODUCTS
                </p>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Courses
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Books
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Freebies
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Classes
                </a>
              </li>
            </ul>
            {/* COMPANY */}
            <ul className="w-full xl:w-fit xl:mx-0 text-center xl:text-left">
              <li className="mb-5">
                <p className="font-bold text-[14px] text-white/60 tracking-widest">
                  COMPANY
                </p>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Help
                </a>
              </li>
            </ul>
            {/* GET IN TOUCH */}
            <ul className="w-full xl:w-fit xl:mx-0 text-center xl:text-left">
              <li className="mb-5">
                <p className="font-bold text-[14px] text-white/60 tracking-widest">
                  GET IN TOUCH
                </p>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="py-2 text-[16px] text-white/80 hover:text-white"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-[12px] text-white/40 leading-[16px] py-[50px] text-center">
          COPYRIGHT © 2022 — DESIGN NAUVAL & BUILT BY VALLEN
        </p>
      </div>
    </footer>
  );
}
