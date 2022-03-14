import React from 'react';
import Check from '../svg/Benefit/check.svg';
import Pic1 from '../img/benefit/1.png';

export default function Benefit() {
  return (
    <section className="bg-light-primary">
      <div className="py-52 px-20 max-w-screen-2xl mx-auto">
        <header className="flex mx-auto justify-between">
          <div className="max-w-[575px]">
            <p className="text-primary tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-primary before:mr-2 flex items-center text-xs">
              MANFAAT BUKU
            </p>
            <h2 className="text-[32px] leading-[44px] mt-[10px]">
              Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
            </h2>
            <p className="mt-5 mb-10 text-[18px] text-dark-muted leading-8">
              "Buku itu seperti cermin: kalau yang berkaca padanya adalah
              seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah
              seorang yang jenius." - J.K Rowling
            </p>
            <ul className="space-y-8">
              <li className="flex items-center ">
                <img src={Check} alt="" className="h-46 w-30 mr-5" />
                <p className="text-dark-muted leading-[30px] text-[16px]">
                  Buku ini cocok untuk seorang yang ingin memperdalam front-end
                  development agar tidak hanya sekadar Bootstrap
                </p>
              </li>
              <li className="flex items-center ">
                <img src={Check} alt="" className="h-46 w-30 mr-5" />
                <p className="text-dark-muted leading-[30px] text-[16px]">
                  Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS
                  langsung, agar meminimalisir terjadinya miskonsepsi
                </p>
              </li>
              <li className="flex items-center ">
                <img src={Check} alt="" className="h-46 w-30 mr-5" />
                <p className="text-dark-muted leading-[30px] text-[16px]">
                  Sangat ramah untuk back-end developer yang phobia terhadap CSS
                  dan mudah dipahami bagi UI designer
                </p>
              </li>
              <li className="flex items-center ">
                <img src={Check} alt="" className="h-46 w-30 mr-5" />
                <p className="text-dark-muted leading-[30px] text-[16px]">
                  Studi kasus membangun sebuah website responsive dengan
                  Tailwind CSS tanpa ngoding CSS
                </p>
              </li>
            </ul>
          </div>
          <section className="w-full relative">
            <img src={Pic1} alt="Book" className="absolute inset-0  z-0" />
          </section>
        </header>
        <section></section>
        <footer></footer>
      </div>
    </section>
  );
}
