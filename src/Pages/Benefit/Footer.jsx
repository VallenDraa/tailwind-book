import React from 'react';
import Preview from '../../assets/img/benefit/preview.png';

export default function Footer() {
  return (
    <footer>
      <header className="text-center max-w-[777px] mx-auto">
        <p className="py-[10px] px-4 rounded-full text-primary bg-lighter-primary  font-bold text-[14px] leading-4 tracking-[10%] w-fit mx-auto ">
          PRATINJAU
        </p>
        <h2 className="text-[32px] leading-[44px] mt-[10px]">
          Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di
          dalam buku ini
        </h2>
        <p className="mt-5 mb-10 text-[18px] text-dark-muted leading-8 max-w-[577px] mx-auto ">
          Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
          detail halaman buku tersebut dan membaca isinya.
        </p>
      </header>
      <footer>
        <img src={Preview} alt="" />
      </footer>
    </footer>
  );
}
