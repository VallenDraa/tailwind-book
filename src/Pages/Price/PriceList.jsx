import React from 'react';
import Check from '../../assets/svg/Price/check.svg';
import X from '../../assets/svg/Price/x.svg';

export default function PriceList() {
  return (
    <ul className="flex flex-col xl:flex-row gap-5">
      <li className="bg-white p-[40px] xl:p-[60px] rounded-2xl grow">
        <h3 className=" text-primary leading-5 mb-[10px]">Buku Digital</h3>
        <p className="text-[32px] leading-10 mb-5">Rp100.000</p>
        <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Buku lengkap</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Akses secara digital</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Buku fisik</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Mendapat pembaruan</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Konsultasi</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Dapat diunduh</p>
          </li>
        </ul>
        <a
          href="#"
          className="leading-5 text-dim-gray mt-10 block text-center bg-primary shadow-light hover:shadow-transparent active:bg-primary/60 duration-300 py-4 px-5 rounded-md"
        >
          Beli Sekarang
        </a>
      </li>
      <li className="bg-white p-[40px] xl:p-[60px] rounded-2xl grow">
        <h3 className=" text-primary leading-5 mb-[10px]">Buku Fisik</h3>
        <p className="text-[32px] leading-10 mb-5">Rp185.000</p>
        <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Buku lengkap</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={X} alt="" className="w-5 h-5" />
            <p>Akses secara digital</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Buku fisik</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={X} alt="" className="w-5 h-5" />
            <p>Mendapat pembaruan</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Konsultasi</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Dapat diunduh</p>
          </li>
        </ul>
        <a
          href="#"
          className="leading-5 text-dim-gray mt-10 block text-center  bg-primary shadow-light hover:shadow-transparent active:bg-primary/60 duration-300 py-4 px-5 rounded-md"
        >
          Beli Sekarang
        </a>
      </li>
      <li className="bg-white p-[40px] xl:p-[60px] rounded-2xl grow">
        <h3 className=" text-primary leading-5 mb-[10px]">
          Buku Digital + Fisik
        </h3>
        <p className="text-[32px] leading-10 mb-5">Rp250.000</p>
        <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Buku lengkap</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Akses secara digital</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Buku fisik</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Mendapat pembaruan</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Konsultasi</p>
          </li>
          <li className="flex items-center gap-x-2">
            <img src={Check} alt="" className="w-5 h-5" />
            <p>Dapat shadow-light diunduh</p>
          </li>
        </ul>
        <a
          href="#"
          className="leading-5 text-dim-gray mt-10 block text-center bg-primary shadow-light hover:shadow-transparent active:bg-primary/60 duration-200 py-4 px-5 rounded-md"
        >
          Beli Sekarang
        </a>
      </li>
    </ul>
  );
}
