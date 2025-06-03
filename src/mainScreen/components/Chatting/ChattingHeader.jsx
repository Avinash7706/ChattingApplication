import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { accounts } from "../../commonArray/chattingArray";

export default function ChattingHeader() {
  const { id } = useParams(); // Destructure to get id directly
  const selectedAccount = accounts.find((item) => item.id === id);
 
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-[25%] right-[25%] flex items-center justify-between text-white font-semibold text-sm bg-[#1a1630] px-4 py-2 z-30 border-b-2 border-r-2 border-l-2 border-[#2a2545]">
        <div className="flex items-center space-x-3">
          <img
            alt="Ann Schleifer profile picture"
            className="w-10 h-10 rounded-full"
            src={selectedAccount?selectedAccount.image:"https://storage.googleapis.com/a1aa/image/aec93123-9edc-46ba-80a2-fdcd8a8321c2.jpg"}
          />
          <div className="flex flex-col">
            <span>{selectedAccount?selectedAccount.name:"Avika Shrivastav"}</span>
            <div className="flex items-center">
              <span className="text-[#4a4a6a] text-xs">Online</span>
              <span
                aria-label="Unread message indicator"
                className="w-2 h-2 rounded-full bg-[#d9d900] ml-2"
              ></span>
            </div>
          </div>
        </div>

        <button
          aria-label="More options"
          className="w-8 h-8 rounded-lg bg-[#2a2545] flex items-center justify-center text-[#6b6b7b] hover:text-white"
        >
          <HiOutlineDotsVertical />
        </button>
      </header>

     
    </>
  )
}