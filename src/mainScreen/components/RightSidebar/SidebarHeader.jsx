import { CiFilter } from "react-icons/ci";
import { useState } from "react";
import SidebarNav from "./SidebarNav";

const SidebarHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="flex flex-col space-y-1">
        <h2 className="text-white font-semibold text-sm">Message category</h2>
        <p className="text-xs text-[#6b6b7b] pb-2 font-bold tracking-wider">avinashshrivastav77068@gmail.com</p>
      </div>
      <div className="flex items-center space-x-2 ">
        <input
          className="flex-grow bg-[#1a1630] border border-[#2a2545] rounded-md py-2 px-3 text-xs text-[#6b6b7b] placeholder-[#6b6b7b] focus:outline-none focus:ring-1 focus:ring-[#6b6b7b]"
          placeholder="Search Message..."
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          aria-label="Filter"
          className="bg-[#2a2545] p-2 rounded-md text-[#6b6b7b] hover:text-white transition"
        >
          <CiFilter className=""/>
        </button>
      </div>
      <SidebarNav searchValue={searchValue} />
    </>
  );
};

export default SidebarHeader;
