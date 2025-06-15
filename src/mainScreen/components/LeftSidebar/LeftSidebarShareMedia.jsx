'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import PostModal from '../model/PostModal';

export default function LeftSidebarShareMedia() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('images');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mediaTabs = ['images', 'videos', 'files'];

  const mediaData = {
    images: [
      '307454b0-0dc7-42bf-2546-81a8533cf8f8',
      'c6e9a1f0-077b-46ac-c109-090f926c87a1',
      '641f9cfb-c8fd-425f-e89a-14f3125cdcc8',
      '435c8f1e-d523-4e2a-2f9f-4a28cb3008ff',
      'f92860c0-0e81-4b06-b7b6-25fc0f1625c6',
      'a6300a33-f3ce-484f-8f65-e03a8e593184',
    ],
    videos: [
      'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    ],
    files: [
      { name: 'Proposal.pdf', size: '1.2MB' },
      { name: 'Design.sketch', size: '3.4MB' },
      { name: 'Report.docx', size: '900KB' },
    ],
  };

  const handleMediaClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        {/* Toggle Button */}
        <button
          aria-controls="shared-media"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center text-white font-semibold text-xs bg-[#2a2545] rounded-md px-3 py-2 w-full"
          type="button"
        >
          <span>Shared Media</span>
          <FaChevronDown
            className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <>
            {/* Tabs */}
            <div className="flex gap-2 text-xs text-white font-medium">
              {mediaTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-md transition ${
                    activeTab === tab
                      ? 'bg-[#4c4b6b]'
                      : 'bg-[#3a3a55] hover:bg-[#4a4a6b]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content Grid */}
            <div className="mt-2">
              {activeTab === 'images' && (
                <div 
                  className="grid grid-cols-3 gap-2 cursor-pointer"
                  onClick={handleMediaClick}
                >
                  {mediaData.images.map((id) => (
                    <img
                      key={id}
                      alt="Shared image"
                      className="rounded-lg object-cover w-full h-[72px] hover:opacity-80 transition-opacity"
                      src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                      width="72"
                      height="72"
                    />
                  ))}
                </div>
              )}

              {activeTab === 'videos' && (
                <div 
                  className="grid grid-cols-1 gap-2 cursor-pointer"
                  onClick={handleMediaClick}
                >
                  {mediaData.videos.map((src, i) => (
                    <video
                      key={i}
                      src={src}
                      controls
                      className="rounded-lg w-full h-[140px] object-cover hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              )}

              {activeTab === 'files' && (
                <ul className="space-y-2 text-white/90 text-xs mt-2">
                  {mediaData.files.map((file, i) => (
                    <li
                      key={i}
                      className="flex justify-between bg-[#1f1d35] px-3 py-2 rounded-md"
                    >
                      <span>{file.name}</span>
                      <span className="text-white/60">{file.size}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* View All Button */}
            <button
              className="mt-3 bg-[#d9f99d] text-black text-xs font-semibold rounded-lg py-1 w-full hover:bg-[#c7e86a] transition"
              type="button"
              onClick={handleMediaClick}
            >
              View All ({activeTab === 'images' ? 1647 : activeTab === 'videos' ? 112 : 58})
            </button>
          </>
        )}
      </div>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mediaData={mediaData}
      />
    </>
  );
}
