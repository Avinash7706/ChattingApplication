import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  bgColor,
  hoverColor,
  loginBtnBg,
  signupBtnBg,
  textHighlightColor,
} from '../../GLOBAL_TEXT_BG/bg';
import { textColor } from '../../GLOBAL_TEXT_BG/text';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`bg-${bgColor} absolute top-0 w-full`}>
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div
            className={`bg-${loginBtnBg} rounded px-2 py-2 text-${textHighlightColor} font-semibold text-sm select-none`}
          >
            UI
          </div>
          <span className={`text-${textColor} font-semibold text-lg select-none`}>
            Chatbot UI
          </span>
        </div>

        {/* Nav Buttons */}
        <div className={`flex items-center space-x-4 text-${textColor} text-sm font-normal select-none`}>
        <Link to="/total">
        Home</Link>
          <a href="#" className="hover:underline text-base">About</a>
          
          <a href="#" className="hover:underline text-base">Demo</a>
          <a href="#" className="hover:underline text-base">Contact</a>

          {/* Like/Star Button */}
          <button
            type="button"
            className={`flex items-center space-x-1 border border-${textColor} rounded-md px-2 py-2 text-${textColor} text-xs font-semibold hover:bg-${textColor} hover:text-${bgColor} transition`}
          >
            <i className="fas fa-lightbulb"></i>
            <span>23.7k</span>
          </button>

    

          {/* Toggle Theme Button */}
          <button
            type="button"
            onClick={toggleMode}
            className={`border border-${textColor} rounded-md px-3 py-2 text-sm font-semibold hover:bg-${hoverColor} transition`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Login Button */}
          <button
            type="button"
            className={`bg-${loginBtnBg} text-${textHighlightColor} rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-200 transition`}
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button
            type="button"
            className={`bg-${signupBtnBg} hover:bg-${hoverColor} rounded-md px-4 py-2 text-${textColor} text-sm font-semibold transition`}
          >
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}
