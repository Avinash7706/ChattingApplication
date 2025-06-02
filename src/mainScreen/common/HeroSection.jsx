import React from 'react';
import { bgColor } from '../../GLOBAL_TEXT_BG/bg';
import {  subTextColorWhite, } from '../../GLOBAL_TEXT_BG/text';
import heroimage from '../../assets/Login/heroImage.png'
export default function HeroSection() {

  const imageSrc = heroimage;

  return (
    <section className={`bg-${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">

        {/* Text Section */}
        <div className={`${subTextColorWhite} mb-12 md:mb-0`}>
          <h1 className={`text-[46px] font-bold leading-tight mb-6 text-white`}>
            Chat Anytime, Anywhere
          </h1>
          <p className={`text-lg text-${subTextColorWhite} mb-8 max-w-md`}>
            Connect instantly with friends and family. Our secure, fast, and user-friendly chat platform keeps you closer no matter where you are.
          </p>
          <button
            className={`bg-gray-400 cursor-pointer  px-6 py-3 rounded-lg font-semibold text-${subTextColorWhite} text-lg hover:bg-blue-200 hover:text-black transition`}
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt="Person chatting with phone and bubbles"
            className="w-full max-w-md"
            width="400"
            height="400"
          />
        </div>
        
      </div>
    </section>
  );
}
