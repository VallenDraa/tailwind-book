import React from 'react';
import Book from '../../assets/img/header/book.png';
import Buy from '../../assets/svg/Header/buy.svg';
import Sold from '../../assets/svg/Header/sold.svg';
import Technologies from '../../assets/img/header/technologies.png';
import Rectangle1 from '../../assets/svg/Header/Rectangle1.svg';
import Rectangle2 from '../../assets/svg/Header/Rectangle2.svg';

export default function Jumbotron() {
  return (
    <main className="flex relative z-10 w-full px-20 justify-center max-w-screen-2xl mx-auto">
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
      <section className="max-w-xl relative z-10">
        <h1 className="pt-16 text-white text-5xl leading-[62.5px] font-medium">
          Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS
        </h1>
        <p className="py-8 text-white/80 max-w-[470px] text-[16px] leading-[32px]">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
          diakhiri dengan membangun sebuah website yang responsive dengan
          Tailwind CSS.
        </p>
        {/* button & sold amount */}
        <div className="flex gap-x-8">
          {/* buy button */}
          <a
            href="#"
            className=" flex px-10 py-4 text-white bg-primary shadow-soft hover:shadow-transparent active:bg-primary/60 duration-200 font-bold items-center rounded-full w-fit gap-x-2"
          >
            <p className="text-[16px]">Beli Sekarang</p>
            <img src={Buy} alt=" " className="h-5 w-5" />
          </a>
          {/* sold */}
          <div className="text-white gap-x-4 flex ">
            <img src={Sold} alt="" className="h-6 w-6" />
            <div>
              <p className="text-white/60 font-bold text-sm tracking-wide font-inter ">
                SUDAH TERJUAL
              </p>
              <p className="text-2xl font-source">501,234+</p>
            </div>
          </div>
        </div>
        {/* Used technologies */}
        <div className="pt-12">
          <p className="font-bold text-sm tracking-widest text-white/40 pb-4 before:content-[''] before:w-[30px] before:h-[2px] before:bg-white/40 flex items-center before:mr-2">
            TEKNOLOGI YANG DIGUNAKAN
          </p>
          <img
            src={Technologies}
            alt="HTML, CSS, Firefox, Sublime Text, command prompt, node.js, yarn, npm"
          />
        </div>
      </section>
      {/* right side */}
      <section className="w-full relative">
        <img
          src={Book}
          alt="Book"
          className="absolute max-w-max z-0 h-[960px]"
          style={{
            filter: ` drop-shadow(0px 80px 100px rgba(29, 43, 63, 0.4))`,
          }}
        />
      </section>
    </main>
  );
}
