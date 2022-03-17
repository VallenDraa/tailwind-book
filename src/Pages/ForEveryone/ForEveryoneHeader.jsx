import React from 'react';
import Pic1 from '../../assets/img/forEveryone/1.png';
import Pic2 from '../../assets/img/forEveryone/2.png';
import Pic3 from '../../assets/img/forEveryone/3.png';

export default function ForEveryoneHeader() {
  return (
    <section className="pt-52 md:pt-0 pb-52 px-8 md:px-12 lg:px-20   max-w-screen-2xl mx-auto">
      <header className="flex flex-col lg:flex-row gap-2 justify-between">
        <div>
          <p className="text-primary tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-primary before:mr-2 flex items-center text-[12px] sm:text-xs">
            BUKU INI UNTUK SIAPA
          </p>
          <h2 className="font-medium leading-[44px] text-lg sm:text-2xl md:text-[32px] lg:max-w-[473px] tracking-light ">
            Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
            designer!
          </h2>
        </div>
        <div>
          <p className="text-[16px] sm:text-[18px] leading-[32px] font-thin lg:max-w-[575px] text-dark-muted ">
            Buku ini bukan hanya untuk front-end developer yang ingin
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
          </p>
        </div>
      </header>
      <footer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-20 justify-between gap-5 2xl:gap-0">
        <div>
          <img
            src={Pic1}
            alt="Utility First"
            className="w-full sm:w-[372px] mx-auto"
          />
          <h3 className="font-medium text-xl text-center mt-5 mb-3">
            Utility-First Framework
          </h3>
          <p className=" text-dark-muted/80 max-w-[372px] mx-auto text-center text-[16px] leading-[32px]">
            Tailwind hadir dengan konsep utility-first. Utility-first artinya
            banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.
          </p>
        </div>
        <div>
          <img
            src={Pic2}
            alt="Tailind JIT Engine"
            className="w-full sm:w-[372px] mx-auto"
          />
          <h3 className="font-medium text-xl text-center mt-5 mb-3">
            Tailwind JIT Engine
          </h3>
          <p className=" text-dark-muted/80 max-w-[372px] mx-auto text-center text-[16px] leading-[32px]">
            JIT engine akan men-generate utility-class yang kita gunakan saja.
            Ini akan membuat pengalaman pengembangan semakin baik.
          </p>
        </div>
        <div>
          <img
            src={Pic3}
            alt="Unopinionated framework"
            className="w-full sm:w-[372px] mx-auto"
          />
          <h3 className="font-medium text-xl text-center mt-5 mb-3">
            Unopinionated-Framework
          </h3>
          <p className=" text-dark-muted/80 max-w-[372px] mx-auto text-center text-[16px] leading-[32px]">
            Tailwind tidak memiliki pra-desain komponen apapun, ini membuat
            desain website yang kita buat menjadi unik.
          </p>
        </div>
      </footer>
    </section>
  );
}
