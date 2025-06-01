import { useState } from "react";

const accounts = [
  {
    name: "Supardi.Kencur",
    platform: "X",
    image:
      "https://storage.googleapis.com/a1aa/image/e7d971de-5070-4752-e501-5028b6ef02c3.jpg",
    bgColor: "bg-black",
    badge: 12,
    gradient: false,
  },
  {
    name: "Pesutmahakam12",
    platform: "Instagram",
    image:
      "https://storage.googleapis.com/a1aa/image/f9afcad2-1806-4f03-c6e9-ac177e496055.jpg",
    bgColor: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    badge: 24,
    gradient: true,
    badgeColor: "bg-[#a56fff]",
  },
  {
    name: "+621234567890",
    platform: "Whatsapp",
    image:
      "https://storage.googleapis.com/a1aa/image/3e45f46d-76fb-4569-481c-ab0a985430ec.jpg",
    bgColor: "bg-[#25d366]",
    badge: 132,
  },
  {
    name: "Hussein Saddam",
    platform: "Linkedin",
    image:
      "https://storage.googleapis.com/a1aa/image/a5e60ac4-0764-47a9-aaea-050279acc271.jpg",
    bgColor: "bg-[#0077b5]",
    badge: 2,
  },
  {
    name: "Vladimir.basuki",
    platform: "Tiktok",
    image:
      "https://storage.googleapis.com/a1aa/image/d15a4269-926a-434d-0339-078ac7f3a4c8.jpg",
    bgColor: "bg-black",
    badge: 16,
  },
];

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
    <div className="flex flex-col space-y-2">
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
          <a
            key={idx}
            className={`flex items-center space-x-3 rounded-lg ${
              acc.gradient ? "" : "hover:bg-[#2a2545]"
            } px-3 py-2 ${
              acc.gradient ? "bg-gradient-to-r from-[#7f3aff] to-[#a56fff]" : ""
            }`}
            href="#"
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
          </a>
        ))}
      </nav>
    </div>
  );
}
