import React from 'react';
import PP from '../img/forEveryone/pp.png';

export default function ForEveryoneFooter() {
  return (
    <section className=" bg-primary min-h-[720px]">
      <div className="flex max-w-screen-2xl mx-auto py-[100px] px-20">
        <div className="basis-5/12">
          <p className="text-white tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-white before:mr-2 flex items-center text-xs ">
            BUKU INI UNTUK SIAPA
          </p>
          <h2 className="font-medium leading-[44px] text-[32px] max-w-[371px] tracking-light text-white">
            Kata Pengantar Dari Penulis Buku
          </h2>
          <div className="mt-20 flex gap-x-4 items-center">
            <img src={PP} alt=" " className="h-[50px] w-[50px]" />
            <div className="text-white">
              <p className="text-lg">Muhamad Nauval Azhar</p>
              <p className="text-sm">@mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <p className="text-white text-lg basis-7/12 leading-[40px]">
          "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
          website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
          Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang
          lebih lama ketika membangun sebuah website dengan utility-first
          framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu
          harus memikirkan desain dan mengimplementasikan desain tersebut dari
          awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan
          oleh utility-first framework, sehingga kamu dapat mempertimbangkannya.
          Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai
          dari konsep, workflow, hingga membuat sebuah website responsive dengan
          TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu
          memahami cara mengoperasikan komputer, memahami HTML, memahami CSS,
          atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan
          ingin mempelajari hal baru untuk meningkatkan skill."
        </p>
      </div>
    </section>
  );
}
