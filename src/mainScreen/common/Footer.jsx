import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { bgColor, borderColor, hoverBg, hoverText } from '../../GLOBAL_TEXT_BG/bg';
import { textColor } from '../../GLOBAL_TEXT_BG/text';

export default function Footer() {
  const [input,setInput]=useState("")
  const socialIcons = [
    { icon: <FaFacebookF />, label: 'facebook' },
    { icon: <FaTwitter />, label: 'twitter' },
    { icon: <FaInstagram />, label: 'instagram' },
    { icon: <FaGithub />, label: 'github' },
    { icon: <FaYoutube />, label: 'youtube' },
  ];
  const clear=()=>{
    console.log(input)
    setInput("")
  }

  return (
    <div className={`bg-${bgColor} text-${textColor} text-center py-8 px-4 font-['Roboto']  bottom-0 w-full z-50`}>
      <h2 className="text-lg font-normal mb-2">Footer</h2>
      <p className="text-sm max-w-xl mx-auto mb-4 leading-relaxed">
        Foolish Developer is a blog website where you will find great tutorials on web design and development.
        Here each tutorial is beautifully described step by step with the required source code.
      </p>

      {/* Email UI only */}
      <div className="max-w-sm mx-auto mb-6 flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e)=>setInput(e.target.value)}
          value={input} 
          className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={clear} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Send
        </button>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        {socialIcons.map(({ icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className={`text-${textColor} text-sm border border-${borderColor} rounded-full w-7 h-7 flex items-center justify-center hover:bg-${hoverBg} hover:text-${hoverText} transition`}
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="flex justify-between text-sm max-w-md mx-auto px-4">
        <span>Copyright ©2021 Foolishdeveloper</span>
        <nav className="space-x-4">
          {['Home', 'About', 'Contact', 'Blog'].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
