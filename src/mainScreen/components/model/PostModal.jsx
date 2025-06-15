'use client';
import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

export default function PostModal({ isOpen, onClose, mediaData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  if (!isOpen || !mediaData) return null;

  const allMedia = [
    ...mediaData.images.map((id, index) => ({
      type: 'image',
      src: `https://storage.googleapis.com/a1aa/image/${id}.jpg`,
      id: id,
      index: index
    })),
    ...mediaData.videos.map((src, index) => ({
      type: 'video',
      src: src,
      id: `video-${index}`,
      index: index
    }))
  ];

  const currentMedia = allMedia[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allMedia.length - 1 : prev - 1));
    setIsVideoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allMedia.length - 1 ? 0 : prev + 1));
    setIsVideoPlaying(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
      >
        <FaTimes size={24} />
      </button>

      {/* Navigation Buttons */}
      {allMedia.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
          >
            <FaChevronRight size={20} />
          </button>
        </>
      )}

      {/* Main Content */}
      <div className="relative max-w-4xl max-h-[90vh] mx-4">
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.src}
            alt={`Media ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        ) : (
          <div className="relative">
            <video
              src={currentMedia.src}
              controls
              autoPlay={isVideoPlaying}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            />
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {allMedia.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 rounded-lg p-2">
          {allMedia.map((media, index) => (
            <button
              key={media.id}
              onClick={() => {
                setCurrentIndex(index);
                setIsVideoPlaying(false);
              }}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-white' : 'border-transparent'
              }`}
            >
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <FaPlay className="text-white text-sm" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 rounded-lg px-3 py-1 text-sm">
        {currentIndex + 1} / {allMedia.length}
      </div>
    </div>
  );
} 