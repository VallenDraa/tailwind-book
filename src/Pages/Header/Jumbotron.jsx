import React from 'react';
import Book from '../../assets/img/header/book.png';
import Buy from '../../assets/svg/Header/buy.svg';
import Sold from '../../assets/svg/Header/sold.svg';
import Technologies from '../../assets/img/header/technologies.png';
import Rectangle1 from '../../assets/svg/Header/Rectangle1.svg';
import Rectangle2 from '../../assets/svg/Header/Rectangle2.svg';

export default function Jumbotron() {
  return (
    <main className=" flex relative z-0 xl:z-10 w-full px-8 md:px-12 lg:px-20 justify-center max-w-screen-2xl mx-auto">
      {/* rectangles on the background */}
      <div className="absolute top-0 w-full h-full">
        <div className="relative w-full h-full">
          <img src={Rectangle1} alt=" " className="absolute top-[200px]" />
          <img
            src={Rectangle2}
            alt=" "
            className="absolute top-[130px] left-[25px]"
          />
        </div>
      </div>
      {/* left side */}
      <section className="w-full xl:max-w-xl relative z-10 grid justify-items-center xl:justify-items-start">
        <h1 className="text-center xl:text-left pt-12 md:pt-20 xl:pt-16 text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[62.5px] font-medium">
          Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS
        </h1>
        <p className="py-8 text-white/80 max-w-[470px] text-[14px] sm:text-[16px] leading-[32px] text-center xl:text-left">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
          diakhiri dengan membangun sebuah website yang responsive dengan
          Tailwind CSS.
        </p>
        {/* button & sold amount */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 md:gap-8 items-center">
          {/* buy button */}
          <a
            href="#"
            className=" flex px-8 md:px-10 py-4 text-white bg-primary shadow-soft hover:shadow-transparent active:bg-primary/60 duration-200 font-bold items-center rounded-full w-fit"
          >
            <p className="text-[16px]">Beli Sekarang</p>
            <img src={Buy} alt=" " className="h-5 w-5 ml-2" />
          </a>
          {/* sold */}
          <div className="text-white gap-x-4 flex ">
            <img src={Sold} alt="" className="h-6 w-6" />
            <div>
              <p className="text-white/60 font-bold text-xs md:text-sm tracking-wide font-inter ">
                SUDAH TERJUAL
              </p>
              <p className="text-xl md:text-2xl font-source">501,234+</p>
            </div>
          </div>
        </div>
        {/* Used technologies */}
        <div className="pt-8 md:pt-12">
          <p className="font-bold text-[10px] sm:text-[12px] md:text-sm tracking-widest text-white/40 pb-2 sm:pb-4 before:content-[''] before:w-[30px] before:h-[2px] before:bg-white/40 flex items-center before:mr-2">
            TEKNOLOGI YANG DIGUNAKAN
          </p>
          <img
            src={Technologies}
            alt="HTML, CSS, Firefox, Sublime Text, command prompt, node.js, yarn, npm"
          />
        </div>
      </section>
      {/* right side */}
      <section className="opacity-50 xl:opacity-100 w-full absolute top-[10%] md:top-0 xl:relative flex items-center justify-center md:block">
        <img
          src={Book}
          alt="Book"
          className="xl:absolute w-full md:w-[712px] md:max-w-max z-0 md:h-[960px] mx-auto"
          style={{
            filter: `drop-shadow(0px 80px 100px rgba(29, 43, 63, 0.4))`,
          }}
        />
      </section>
    </main>
  );
}
