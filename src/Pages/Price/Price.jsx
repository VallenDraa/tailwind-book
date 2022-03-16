import React from 'react';
import Bg from '../../assets/svg/Price/bg.svg';
import PriceList from './PriceList';

export default function Price() {
  return (
    <section className="relative bg-gradient-to-b from-light-primary to-white overflow-hidden ">
      {/* bg */}
      <div className="inset-0 absolute z-0 ">
        <img src={Bg} alt=" " className="w-full h-[1600px]" />
      </div>
      <header className="pt-44 px-20 max-w-screen-2xl mx-auto relative z-10">
        <header className="text-center max-w-[777px] mx-auto pb-5">
          <p className="py-[10px] px-4 rounded-full text-primary bg-dark-gray  font-bold text-[14px] leading-4 tracking-[10% w-fit mx-auto ">
            HARGA BUKU
          </p>
          <h2 className="text-[33px] leading-[44px] mt-[10px] text-white">
            Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
            perangkat kamu
          </h2>
          <p className="mt-5 mb-10 text-[18px] text-white/80 leading-8 max-w-[577px] mx-auto ">
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
            Hak cipta dilindungi undang-undang.
          </p>
        </header>
        <PriceList />
      </header>
      <footer className="text-white/80 text-center mt-20 mb-52 relative leading-8">
        *Buku digital akan dikirimkan ke alamat email kamu
        <br />
        *Buku fisik dikirim 7 hari setelah pemesanan
      </footer>
    </section>
  );
}
