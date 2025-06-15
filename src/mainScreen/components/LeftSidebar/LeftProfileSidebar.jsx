import React from "react";
import {
  FaFlag,
  FaLock,
  FaInfoCircle,
  FaThumbtack,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { accounts } from "../../commonArray/chattingArray";
import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';
export default function LeftProfileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams(); // Destructure to get id directly
  const selectedAccount = accounts.find((item) => item.id === id);
 
  return (
    <>
      <div className="flex flex-col items-center space-y-3">
        <img
          alt="Ann Schleifer profile picture, woman with curly hair and green shirt"
          className="w-20 h-20 rounded-full"
          height="80"
          src={selectedAccount?selectedAccount.image:"https://storage.googleapis.com/a1aa/image/aec93123-9edc-46ba-80a2-fdcd8a8321c2.jpg"}
          width="80"
        />  
        <h3 className="text-white font-semibold text-sm">{selectedAccount?selectedAccount.name:"Ann Schleifer"}</h3>
        <p className="text-[#6b6b7b] text-xs select-text">{selectedAccount?selectedAccount.email:"ann_Schleifer22"}</p>

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
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center text-white font-semibold text-xs bg-[#2a2545] rounded-md px-3 py-2 w-full"
        type="button"
      >
        <span className="py-2">Shared Document</span>
        {isOpen ? (
          <FaChevronCircleUp className="text-xs transition-transform duration-300" />
        ) : (
          <FaChevronCircleDown className="text-xs transition-transform duration-300" />
        )}
      </button>

      {isOpen && (
        <div
          id="shared-document"
          className="mt-2 bg-[#3a3555] rounded-md p-3 text-white text-xs"
        >
          {/* Put your shared document content here */}
          <ul className="space-y-2">
            <li>Document1.pdf</li>
            <li>ProjectPlan.docx</li>
            <li>MeetingNotes.txt</li>
          </ul>
        </div>
      )}
    </div>
    </>
  );
}
