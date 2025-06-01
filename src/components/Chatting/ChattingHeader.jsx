import { HiOutlineDotsVertical } from "react-icons/hi";

export default function ChattingHeader() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-[25%] right-[25%] flex items-center justify-between text-white font-semibold text-sm bg-[#1a1630] px-4 py-2 z-30 border-b-2 border-r-2 border-l-2 border-[#2a2545] ">
        <div className="flex items-center space-x-3">
          <img
            alt="Ann Schleifer profile picture"
            className="w-10 h-10 rounded-full"
            src="https://storage.googleapis.com/a1aa/image/aec93123-9edc-46ba-80a2-fdcd8a8321c2.jpg"
          />
          <div className="flex flex-col">
            <span>Ann Schleifer</span>
            <div className="flex items-center"><span className="text-[#4a4a6a] text-xs">Online</span>
            <span
                aria-label="Unread message indicator"
                className="w-2 h-2 rounded-full bg-[#d9d900] ml-2"
              ></span></div>
          </div>
        </div>

        <button
          aria-label="More options"
          className="w-8 h-8 rounded-lg bg-[#2a2545] flex items-center justify-center text-[#6b6b7b] hover:text-white"
        >
          <HiOutlineDotsVertical />
        </button>
      </header>

      {/* Space below header */}
      <div className=" flex flex-col space-y-2 text-xs text-[#6b6b7b] select-none">
        <div className="flex justify-center">
          <span className="border-b border-[#2a2545] pb-1 w-20 text-center">
            Today
          </span>
        </div>
      </div>
    </>
  );
}
