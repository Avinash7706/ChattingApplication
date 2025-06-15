import { useState } from "react";
import { accounts } from "../../commonArray/chattingArray";
import { Link } from 'react-router-dom';
export default function SidebarNav({ searchValue }) {
  const [sortType, setSortType] = useState("Most Messages");
  const filteredAndSortedAccounts = [...accounts]
    .filter((acc) => {
      const searchLower = searchValue?.toLowerCase();
      return (
        acc.name.toLowerCase().includes(searchLower) ||
        acc.platform.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => {
      return sortType === "Most Messages"
        ? b.badge - a.badge
        : a.name.localeCompare(b.name);
    });
 

  return (
    <div className="flex flex-col space-y-2 max-h-[500px] ">
      <div className="flex justify-between items-center text-xs text-white font-semibold px-2 pt-2">
        <span>Social Accounts</span>
        <button
          onClick={() =>
            setSortType((prev) =>
              prev === "Most Messages" ? "A-Z" : "Most Messages"
            )
          }
          className="bg-[#2a2545] rounded-md px-2 py-2 text-[10px] font-normal"
        >
          {sortType}
          <i className="fas fa-chevron-down ml-1 text-[10px]"></i>
        </button>
      </div>

      <nav className="flex flex-col space-y-4 overflow-y-auto hide-scrollbar px-1  py-2">
        {filteredAndSortedAccounts?.map((acc, idx) => (
          <Link
            key={idx}
            className={`flex items-center space-x-3 rounded-lg transition-all duration-200 ${
              acc.gradient ? "" : "hover:bg-gradient-to-r from-[#7f3aff] to-[#a56fff] hover:scale-[1.02]"
            } px-3 py-2 ${
              acc.gradient ? "" : ""
            }`}
            to={`/chat-app/${idx+1}`}
          >
            <div
              className={`w-8 h-8 rounded-full ${acc.bgColor} flex items-center justify-center overflow-hidden`}
            >
              <img
                alt={`${acc.platform} logo`}
                className="w-6 h-6"
                src={acc.image}
              />
            </div>
            <div className="flex flex-col text-xs">
              <span className="text-white font-semibold">{acc.name}</span>
              <span className="text-[#6b6b7b]">{acc.platform}</span>
            </div>
            <span
              className={`ml-auto text-xs ${
                acc.badgeColor || "bg-[#2a2545]"
              } text-white rounded-md px-2 py-0.5`}
            >
              {acc.badge}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
