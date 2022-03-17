import React from 'react';
import Buy from '../../assets/svg/BuyBook/buy.svg';
import Sold from '../../assets/svg/BuyBook/sold.svg';

export default function BuyBook() {
  return (
    <section className="my-[150px] px-8 md:p-0">
      <p className="py-[10px] px-4 rounded-full text-primary bg-light-primary font-bold text-[14px] leading-4 tracking-[10%] w-fit mx-auto ">
        BELI BUKU
      </p>
      <h2 className="font-medium leading-[44px] text-xl sm:text-2xl md:text-[32px] mt-[10px] tracking-light text-dark text-center mx-auto">
        Anda ingin segera memesan buku ini?
      </h2>
      <p className="text-sm sm:text-[18px] text-dark-muted leading-[32px] max-w-[375px] mx-auto text-center mt-5">
        Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
      </p>
      {/* button & sold amount */}
      <div className="flex flex-col-reverse sm:flex-row-reverse gap-y-5 sm:gap-x-8 mt-10 w-full sm:w-fit mx-auto">
        {/* buy button */}
        <a
          href="#"
          className=" flex px-10 py-4 text-dim-gray bg-primary shadow-soft hover:shadow-transparent active:bg-primary/60 duration-200 font-bold items-center rounded-full sm:w-fit gap-x-2"
        >
          <div className="flex mx-auto">
            <p className="text-[16px] ">Beli Sekarang</p>
            <img src={Buy} alt=" " className="h-5 w-5" />
          </div>
        </a>
        {/* sold */}
        <div className="text-dark gap-x-4 flex mx-auto ">
          <img src={Sold} alt="" className="h-6 w-6" />
          <div>
            <p className="text-dark-muted/80 font-bold text-sm tracking-wide font-inter ">
              SUDAH TERJUAL
            </p>
            <p className="text-2xl font-source">501,234+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
