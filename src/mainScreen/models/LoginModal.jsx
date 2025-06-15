import React, { useState } from 'react';
import {
  bgColor,
  hoverColor,
  loginBtnBg,
  textHighlightColor,
  borderColor,
} from '../../GLOBAL_TEXT_BG/bg';
import { textColor, subTextColorBlack } from '../../GLOBAL_TEXT_BG/text';

export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Handle login logic here
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed w-full h-full mt-20 bg-${bgColor}  bg-opacity-50 flex items-center justify-center z-[60]`}>
      <div className={`bg-${bgColor} rounded-lg p-8 w-full max-w-xl mx-4 border border-${borderColor}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-${textColor} text-2xl font-bold`}>Login</h2>
          <button
            onClick={onClose}
            className={`text-${textColor} hover:text-gray-400 text-xl`}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={`block text-${textColor} text-sm font-medium mb-2`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border border-${borderColor} rounded-md bg-transparent text-${textColor} placeholder-${subTextColorBlack} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className={`block text-${textColor} text-sm font-medium mb-2`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border border-${borderColor} rounded-md bg-transparent text-${textColor} placeholder-${subTextColorBlack} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className={`mr-2 text-${textColor} bg-transparent border-${borderColor} rounded`}
              />
              <span className={`text-${textColor} text-sm`}>Remember me</span>
            </label>
            <a href="#" className={`text-blue-400 hover:text-blue-300 text-sm`}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-${loginBtnBg} text-${textHighlightColor} py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <span className={`text-${textColor} text-sm`}>
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className={`text-blue-400 hover:text-blue-300 font-medium`}
            >
              Sign up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
} 