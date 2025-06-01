import React from 'react'

export default function LeftSidebarPost() {
  return (
    <div className="flex flex-col space-y-1">
      <button
        aria-controls="shared-post"
        aria-expanded="false"
        className="flex justify-between items-center text-white font-semibold text-xs bg-[#2a2545] rounded-md px-3 py-2 w-full"
        type="button"
      >
        <span>Shared Post</span>
        <i className="fas fa-chevron-down text-xs"></i>
      </button>
      <div
        className="grid grid-cols-2 gap-2 mt-2 select-none cursor-default"
        id="shared-post"
      >
        <img
          alt="Coffee shop interior with barista and customers"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/09d7b3c0-e76c-45ca-ea99-2c6aebafbc85.jpg"
          width="132"
        />
        <img
          alt="Outdoor cafe seating with tables and chairs"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/5337efe7-f171-4d5a-c105-6c46b4fba9e5.jpg"
          width="132"
        />
        <img
          alt="Coffee shop interior with plants and wooden furniture"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/93eca916-1692-4855-f5d5-51ad5795c5ce.jpg"
          width="132"
        />
        <img
          alt="Cafe exterior with sign and outdoor seating"
          className="rounded-lg object-cover w-full h-[72px]"
          height="72"
          src="https://storage.googleapis.com/a1aa/image/51318f58-cd37-4df0-99c6-a8408eb073ab.jpg"
          width="132"
        />
      </div>
    </div>
  );
}
