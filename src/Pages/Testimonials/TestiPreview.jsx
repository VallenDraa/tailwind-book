import React from 'react';
import Testimony from './Testimony';
import Arrow from '../../assets/svg/Testimonials/right-arrow.svg';
import Pic1 from '../../assets/img/Testimonials/1.png';
import Pic2 from '../../assets/img/Testimonials/2.png';
import Pic3 from '../../assets/img/Testimonials/3.png';

export default function TestiPreview() {
  return (
    <div className=" absolute inset-x-0 mt-6 lg:mt-16 ">
      {/* buttons */}
      <a
        href="#"
        className="absolute left-[10px] 2xl:-left-[25px] top-[120px] md:top-[100px] z-20 h-10 w-10 max-w-[50px] max-h-[50px]  bg-primary hover:bg-primary/50 active:bg-primary/70  rounded-full duration-300 flex items-center justify-center"
        style={{
          filter: 'drop-shadow(0px 15px 30px rgba(0, 186, 199, 0.3))',
        }}
      >
        <img src={Arrow} alt="<-" className="w-[20px] h-[20px] " />
      </a>
      <a
        href="#"
        className="absolute right-[10px] 2xl:-right-[25px] top-[120px] md:top-[100px] z-20 h-10 w-10 max-w-[50px] max-h-[50px]  bg-primary hover:bg-primary/50 active:bg-primary/70  rounded-full duration-300 flex items-center justify-center transform rotate-180"
        style={{
          filter: 'drop-shadow(0px 15px 30px rgba(0, 186, 199, 0.3))',
        }}
      >
        <img src={Arrow} alt="<-" className="w-[20px] h-[20px]  " />
      </a>
      <div className="flex gap-x-[30px] justify-evenly w-full relative ">
        {/* <div className="inset-0 absolute z-10"></div> */}
        <Testimony
          msg="Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)"
          pic={Pic1}
          name="Ahmad Saugi"
          occupation="Mahasiswa"
        />
        <Testimony
          msg="Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail."
          pic={Pic2}
          name="Dedik Sugiharto"
          occupation="Front-End Engineer"
        />
        <Testimony
          msg="Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami."
          pic={Pic3}
          name="Lutfi Hanafiah Ramadhan"
          occupation="IT Support"
        />
      </div>
      {/* page */}
      <div className="w-fit flex justify-center space-x-2 mt-8 md:mt-12 mx-auto">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <div className="h-2 w-2 rounded-full bg-lighter-primary"></div>
        <div className="h-2 w-2 rounded-full bg-lighter-primary"></div>
        <div className="h-2 w-2 rounded-full bg-lighter-primary"></div>
      </div>
    </div>
  );
}
