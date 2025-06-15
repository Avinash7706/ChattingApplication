import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { bgColor } from '../../GLOBAL_TEXT_BG/bg';
import ContactModal from './modal/ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const socialIcons = [
    { icon: <FaFacebookF />, label: 'facebook' },
    { icon: <FaTwitter />, label: 'twitter' },
    { icon: <FaInstagram />, label: 'instagram' },
    { icon: <FaGithub />, label: 'github' },
    { icon: <FaYoutube />, label: 'youtube' },
  ];

  return (
    <div className={`bg-${bgColor} text-gray-400`}>
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t-amber-300 border-1 border-r-0 border-l-0">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-20">
          <div className="mb-10 md:mb-0 md:flex-1 max-w-xs">
            <h2 className="text-white font-semibold text-base mb-4">Colorlib</h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.
            </p>
          </div>
          <div className="flex flex-wrap justify-between flex-1 max-w-3xl">
            <div className="w-1/2 sm:w-1/4 mb-6">
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Clients</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6">
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 mb-6 flex flex-col items-start sm:items-end space-y-4">
              <div className="flex space-x-4 text-gray-400 text-lg">
                {socialIcons.map((social, index) => (
                  <a key={index} href="#" aria-label={social.label} className="hover:text-white transition-colors">
                    {social.icon}
                  </a>
                ))}
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-pink-600 hover:cursor-pointer hover:bg-pink-700 transition-colors text-white text-sm font-semibold py-2 px-5 rounded-full"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-xs text-gray-600 select-none">© 2019-2020 All Rights Reserved.</p>
      </footer>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
