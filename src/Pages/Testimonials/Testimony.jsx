import React from 'react';

export default function Testimony({ msg, pic, name, occupation }) {
  return (
    <div
      className="min-w-[320px] sm:min-w-[407px] min-h-[260px] bg-white relative grow"
      style={{ boxShadow: '0px 30px 60px rgba(0, 186, 199, 0.08)' }}
    >
      <div className="inset-0 absolute flex flex-col justify-between p-5 xl:p-[30px]">
        <p className="text-xs sm:text-sm xl:text-base leading-[30px]">{msg}</p>
        <div className="mt-[30px] flex gap-x-4 items-center">
          <img
            src={pic}
            alt={name}
            className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"
          />
          <div>
            <p className="text-[14px] sm:text-[16px]">{name}</p>
            <p className="text-dark-muted text-[12px] sm:text-[14px]">
              {occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
