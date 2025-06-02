import { useState } from "react";

const messages = [
  {
    name: "Alfredo Workman",
    message: "Hi, I noticed a squ...",
    time: "04:02 am",
    image:
      "https://storage.googleapis.com/a1aa/image/1593f98f-9080-4926-7833-066e649552fb.jpg",
    isUnread: true,
    isActive: false,
    timestamp: new Date("2023-10-01T04:02:00"),
  },
  {
    name: "Kianna George",
    message: "Hi, I noticed a squ...",
    time: "05:49 pm",
    image:
      "https://storage.googleapis.com/a1aa/image/959e622e-805e-48f3-7a68-dc576c5a3105.jpg",
    isUnread: true,
    isActive: false,
    timestamp: new Date("2023-10-01T17:49:00"),
  },
  {
    name: "Ann Schleifer",
    message: "Hi, I noticed a squ...",
    time: "01:34 pm",
    image:
      "https://storage.googleapis.com/a1aa/image/aec93123-9edc-46ba-80a2-fdcd8a8321c2.jpg",
    isUnread: false,
    isActive: true,
    timestamp: new Date("2023-10-01T13:34:00"),
  },
  {
    name: "Craig Culhane",
    message: "Hi, I noticed a squ...",
    time: "03:49 am",
    image:
      "https://storage.googleapis.com/a1aa/image/a77eaf3a-ac6f-4a4c-26d7-49e7ad418c72.jpg",
    isUnread: false,
    isActive: false,
    timestamp: new Date("2023-10-01T03:49:00"),
  },
];

const SidebarBody = () => {
  const [sortOrder, setSortOrder] = useState("Newest");

  const sortedMessages = [...messages].sort((a, b) => {
    return sortOrder === "Newest"
      ? b.timestamp - a.timestamp
      : a.timestamp - b.timestamp;
  });

  return (
    <div className="flex flex-col space-y-2 px-2">
      <hr className="bg-white h-[2px]" />
      <div className="flex items-center justify-between text-white font-semibold text-xs py-2">
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

      {/* 
        1. Give this nav a fixed max-height (e.g. h-[calc(100vh-<header>)] or h-80) so it can scroll 
        2. Remove `hide-scrollbar` 
        3. Keep overflow-y-auto so the vertical scrollbar appears 
      */}
      <nav className="flex flex-col space-y-3 overflow-y-auto h-80">
        {sortedMessages.map((msg, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center space-x-3 text-xs ${
              msg.isActive
                ? "text-[#6b6b7b] bg-[#2a2545] rounded-lg px-3 py-1"
                : msg.isUnread
                ? "text-[#6b6b7b] hover:text-white"
                : "text-[#4a4a6a]"
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
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SidebarBody;
