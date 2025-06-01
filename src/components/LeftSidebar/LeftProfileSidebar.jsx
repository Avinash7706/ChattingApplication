import React from "react";
import {
  FaFlag,
  FaLock,
  FaInfoCircle,
  FaThumbtack,
  FaChevronUp,
} from "react-icons/fa";

export default function LeftProfileSidebar() {
  return (
    <>
      <div className="flex flex-col items-center space-y-3">
        <img
          alt="Ann Schleifer profile picture, woman with curly hair and green shirt"
          className="w-20 h-20 rounded-full"
          height="80"
          src="https://storage.googleapis.com/a1aa/image/aec93123-9edc-46ba-80a2-fdcd8a8321c2.jpg"
          width="80"
        />
        <h3 className="text-white font-semibold text-sm">Ann Schleifer</h3>
        <p className="text-[#6b6b7b] text-xs select-text">ann_Schleifer22</p>

        <div className="flex space-x-3 text-[#6b6b7b]">
          <button
            aria-label="Flag"
            className="bg-[#2a2545] p-2 rounded-md hover:text-white"
          >
            <FaFlag className="text-sm" />
          </button>
          <button
            aria-label="Lock"
            className="bg-[#2a2545] p-2 rounded-md hover:text-white"
          >
            <FaLock className="text-sm" />
          </button>
          <button
            aria-label="Info"
            className="bg-[#2a2545] p-2 rounded-md hover:text-white"
          >
            <FaInfoCircle className="text-sm" />
          </button>
          <button
            aria-label="Pin"
            className="bg-[#2a2545] p-2 rounded-md hover:text-white"
          >
            <FaThumbtack className="text-sm" />
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-1 mt-4">
        <button
          aria-controls="shared-document"
          aria-expanded="false"
          className="flex justify-between items-center text-white font-semibold text-xs bg-[#2a2545] rounded-md px-3 py-2 w-full"
          type="button"
        >
          <span>Shared Document</span>
          <FaChevronUp className="text-xs" />
        </button>
      </div>
    </>
  );
}
