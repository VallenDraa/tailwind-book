import React from 'react';
import Face from '../../assets/svg/Writer/face.svg';

export default function Writer() {
  return (
    <section className="xl:flex max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-20 pt-28 md:pt-40 xl:pt-52">
      <img
        src={Face}
        alt="Muhammad Nauval Azhar"
        className="xl:relative right-[60px] bottom-[120px] w-full sm:w-[550px] xl:w-[655px] xl:basis-[55%] mx-auto "
      />
      <div className="basis-[45%]">
        <p className="text-primary tracking-widest text-[12px] sm:text-xs">
          PENULIS BUKU
        </p>
        <h2 className="text-lg sm:text-2xl md:text-[32px] leading-[44px] mt-[10px]">
          Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
        </h2>
        <p className="mt-5 mb-20 xl:mb-10 text-[14px] sm:text-[16px] text-dark-muted leading-8">
          “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu.
          Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di
          telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk
          masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer
          yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski
          begitu, saya lebih senang fokus di front-end development, karena
          --menurut saya-- ini lebih sederhana saja. Di front-end development
          pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan
          JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu
          sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”
        </p>
      </div>
    </section>
  );
}
