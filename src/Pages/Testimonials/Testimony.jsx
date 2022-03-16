import React from 'react';

export default function Testimony({ msg, pic, name, occupation }) {
  return (
    <div
      className="min-w-[407px] min-h-[260px] bg-white relative grow"
      style={{ boxShadow: '0px 30px 60px rgba(0, 186, 199, 0.08)' }}
    >
      <div className="inset-0 absolute flex flex-col justify-between p-[30px]">
        <p className="leading-[30px]">{msg}</p>
        <div className="mt-[30px] flex gap-x-4">
          <img src={pic} alt={name} className="h-[50px] w-[50px]" />
          <div>
            <p className="text-[16px]">{name}</p>
            <p className="text-dark-muted text-[14px]">{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
