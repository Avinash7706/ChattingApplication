import { useState } from "react";
import { Link } from "react-router-dom";

import {accounts} from '../../commonArray/chattingArray'
const SidebarBody = () => {
  const [sortOrder, setSortOrder] = useState("Newest");

  const sortedMessages = [...accounts].sort((a, b) => {
    return sortOrder === "Newest"
      ? b.timestamp - a.timestamp
      : a.timestamp - b.timestamp;
  });

  return (
    <div className="flex flex-col space-y-2 px-2 bg-[#2a2545]">
      <hr className="bg-white h-[2px]" />
      <div className="flex items-center justify-between text-white font-semibold text-xs py-2 ">
        <span>Direct Message</span>
        <button
          aria-label="Sort messages"
          className="bg-[#2a2545] rounded-md px-3 py-1 text-xs font-normal flex items-center"
          onClick={() =>
            setSortOrder((prev) => (prev === "Newest" ? "Oldest" : "Newest"))
          }
        >
          {sortOrder}
          <i className="fas fa-chevron-down ml-1 text-[10px]"></i>
        </button>
      </div>

      
      <nav className="flex flex-col space-y-3 overflow-y-auto max-h-[400px] hide-scrollbar ">
        {sortedMessages.map((msg, idx) => (
          <Link
            key={idx}
            to={`/chat-app/${msg.id}`}
            className={`flex items-center space-x-3 py-2 text-xs transition-all duration-200 hover:bg-[#2a2545] hover:rounded-lg hover:px-3 hover:py-2 ${
              msg.isActive
                ? "text-[#6b6b7b]  rounded-lg px-3 py-1"
                : msg.isUnread
                ? "text-[#6b6b7b] hover:text-white"
                : "text-[#4a4a6a] hover:text-[#6b6b7b]"
            }`}
          >
            <img
              alt={`${msg.name} profile picture`}
              className="w-8 h-8 rounded-full"
              src={msg.image}
            />
            <div className="flex flex-col flex-grow">
              <span
                className={`font-semibold ${
                  msg.isActive
                    ? "text-white"
                    : msg.isUnread
                    ? "text-white"
                    : ""
                }`}
              >
                {msg.name}
              </span>
              <span className={msg.isActive ? "text-[#4a4a6a]" : ""}>
                {msg.message}
              </span>
            </div>
            <span className="text-[10px] text-[#6b6b7b]">{msg.time}</span>
            {msg.isUnread && (
              <span
                aria-label="Unread message indicator"
                className="w-2 h-2 rounded-full bg-[#d9d900] ml-2"
              ></span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SidebarBody;
