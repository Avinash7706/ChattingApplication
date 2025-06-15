import React, { useState } from 'react';
import {
  bgColor,
  hoverColor,
  signupBtnBg,
  textHighlightColor,
  borderColor,
} from '../../GLOBAL_TEXT_BG/bg';
import { textColor, subTextColorBlack } from '../../GLOBAL_TEXT_BG/text';

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup attempt:', formData);
      setIsLoading(false);
      // Handle signup logic here
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed mt-20 bg-${bgColor} bg-opacity-50 flex items-center justify-center z-[50] w-full h-full`}>
      <div className={`bg-${bgColor} rounded-lg p-8 w-full max-w-2xl mx-4 border border-${borderColor}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-${textColor} text-2xl font-bold`}>Sign Up</h2>
          <button
            onClick={onClose}
            className={`text-${textColor} hover:text-gray-400 text-xl`}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="fullName" className={`block text-${textColor} text-sm font-medium mb-2`}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border border-${borderColor} rounded-md bg-transparent text-${textColor} placeholder-${subTextColorBlack} focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

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
              className={`w-full px-3 py-2 border border-${borderColor} rounded-md bg-transparent text-${textColor} placeholder-${subTextColorBlack} focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
              className={`w-full px-3 py-2 border border-${borderColor} rounded-md bg-transparent text-${textColor} placeholder-${subTextColorBlack} focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className={`block text-${textColor} text-sm font-medium mb-2`}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 border border-${borderColor} rounded-md bg-transparent text-${textColor} placeholder-${subTextColorBlack} focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              required
              className={`mr-2 text-${textColor} bg-transparent border-${borderColor} rounded`}
            />
            <label htmlFor="terms" className={`text-${textColor} text-sm`}>
              I agree to the{' '}
              <a href="#" className={`text-blue-400 hover:text-blue-300`}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className={`text-blue-400 hover:text-blue-300`}>
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-${signupBtnBg} hover:bg-${hoverColor} text-${textColor} py-2 px-4 rounded-md font-semibold transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <span className={`text-${textColor} text-sm`}>
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className={`text-blue-400 hover:text-blue-300 font-medium`}
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
} 