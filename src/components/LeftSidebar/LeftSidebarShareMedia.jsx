import React from 'react'

export default function LeftSidebarShareMedia() {
  return (
    <div className="flex flex-col space-y-1">
      <button
        aria-controls="shared-media"
        aria-expanded="false"
        className="flex justify-between items-center text-white font-semibold text-xs bg-[#2a2545] rounded-md px-3 py-2 w-full"
        type="button"
      >
        <span>Shared Media</span>
        <i className="fas fa-chevron-down text-xs"></i>
      </button>
      <div
        className="grid grid-cols-3 gap-2 mt-2 select-none cursor-default"
        id="shared-media"
      >
        <img
          alt="Minimalist chair and table in a bright room with white walls"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/307454b0-0dc7-42bf-2546-81a8533cf8f8.jpg"
          width="72"
        />
        <img
          alt="Person working at desk with laptop and plants in background"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/c6e9a1f0-077b-46ac-c109-090f926c87a1.jpg"
          width="72"
        />
        <img
          alt="White desk with laptop and chair in bright room"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/641f9cfb-c8fd-425f-e89a-14f3125cdcc8.jpg"
          width="72"
        />
        <img
          alt="Woman working on laptop at desk with plants"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/435c8f1e-d523-4e2a-2f9f-4a28cb3008ff.jpg"
          width="72"
        />
        <img
          alt="Plants on desk with tablet and laptop"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/f92860c0-0e81-4b06-b7b6-25fc0f1625c6.jpg"
          width="72"
        />
        <img
          alt="White coffee cup on desk with laptop and notebook"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/a6300a33-f3ce-484f-8f65-e03a8e593184.jpg"
          width="72"
        />
      </div>
      <button
        className="mt-3 bg-[#d9f99d] text-black text-xs font-semibold rounded-lg py-1 w-full hover:bg-[#c7e86a] transition"
        type="button"
      >
        View All (1647)
      </button>
    </div>
  );
}
