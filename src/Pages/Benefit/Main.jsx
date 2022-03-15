import React from 'react';
import Pic2 from '../../assets/img/benefit/2.png';
import Layout from '../../assets/svg/Benefit/layout.svg';
import Message from '../../assets/svg/Benefit/message.svg';
import RightArrow from '../../assets/svg/Benefit/right-arrow.svg';

export default function Main() {
  return (
    <section className="flex pb-52">
      <section className="w-full relative">
        <img
          src={Pic2}
          alt="Book"
          className="absolute max-w-max z-0 -left-[70px]"
        />
      </section>
      <div className="max-w-[575px]">
        <p className="text-primary tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-primary before:mr-2 flex items-center text-xs">
          SELAIN ITU
        </p>
        <h2 className="text-[32px] leading-[44px] mt-[10px]">
          Buku dengan studi kasus nyata, juga komunitas yang ramah
        </h2>
        <p className="mt-5 mb-10 text-[18px] text-dark-muted leading-8 ">
          Buku ini diakhiri dengan membangun website yang responsive dengan
          Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk
          bertanya ketika mengalami kesulitan.
        </p>
        <ul class="space-y-8">
          <li
            className="flex bg-white rounded-2xl px-[30px] py-5 gap-x-6"
            style={{ 'box-shadow': '0px 15px 30px rgba(2, 40, 43, 0.1)' }}
          >
            <div>
              <img
                src={Layout}
                alt="layout"
                className="min-h-[30px] min-w-[30px] mt-[5px]"
              />
            </div>
            <div className="flex items-center ">
              <div>
                <h3 className="text-primary font-medium">Live Demo Project</h3>
                <p className="text-dark-muted text-[16px]">
                  Lihat live demo project yang akan kamu buat di akhir buku ini.
                </p>
              </div>
              <a
                href="#"
                className="h-10 w-10 max-w-[40px] max-h-[40px] bg-primary/10 hover:bg-primary/30 active:bg-dark-muted  rounded-full duration-300 flex items-center justify-center"
              >
                <img src={RightArrow} alt="->" className="w-[30px] h-[30px]" />
              </a>
            </div>
          </li>
          <li
            className="flex bg-white rounded-2xl px-[30px] py-5 gap-x-6"
            style={{ 'box-shadow': '0px 15px 30px rgba(2, 40, 43, 0.1)' }}
          >
            <div>
              <img
                src={Message}
                alt="Message"
                className="min-h-[30px] min-w-[30px] mt-[5px]"
              />
            </div>
            <div className="flex items-center ">
              <div>
                <h3 className="text-primary font-medium">Dukungan Komunitas</h3>
                <p className="text-dark-muted text-[16px]">
                  Sebuah server Discord berisi teman-teman yang akan membantu
                  kamu.
                </p>
              </div>
              <a
                href="#"
                className="h-10 w-10 max-w-[40px] max-h-[40px] bg-primary/10 hover:bg-primary/30 active:bg-dark-muted  rounded-full duration-300 flex items-center justify-center"
              >
                <img src={RightArrow} alt="->" className="w-[30px] h-[30px]" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
