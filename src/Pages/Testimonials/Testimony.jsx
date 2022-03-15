import React from 'react';

export default function Testimony({ msg, pic, name, occupation }) {
  return (
    <div className="w-[407px] h-[260px] bg-white p-[30px] border-2 grow">
      <p className="text-[16px] leading-[30px]">{msg}</p>
      <div className="mt-[30px] flex gap-x-4">
        <img src={pic} alt={name} className="h-[50px] w-[50px]" />
        <div>
          <p className="text-[16px]">{name}</p>
          <p className="text-dark-muted text-sm">{occupation}</p>
        </div>
      </div>
    </div>
  );
}
