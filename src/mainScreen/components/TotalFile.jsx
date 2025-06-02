import SidebarHeader from "./RightSidebar/SidebarHeader";
import SidebarBody from "./RightSidebar/SidebarBody";

// Main Chat Area
import ChattingHeader from "./Chatting/ChattingHeader";
import Chatting from "./Chatting/Chatting";

// Left Sidebar
import LeftProfileSidebar from "./LeftSidebar/LeftProfileSidebar";
import LeftSidebarShareMedia from "./LeftSidebar/LeftSidebarShareMedia";
import LeftSidebarPost from "./LeftSidebar/LeftSidebarPost";

export default function TotalFile() {
  return (
    <div className="bg-[#0f0c29] min-h-screen w-full fixed flex">
      {/* Left Sidebar */}
      <aside className="hidden fixed md:flex flex-col w-[25%] bg-[#1a1630] p-4 space-y-4 overflow-y-auto hide-scrollbar border-r-2 border-[#2a2545]">
        <div className="flex flex-col justify-between h-full">
          <SidebarHeader />
          <div className="mt-auto">
            <SidebarBody />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex w-full md:ml-[25%] md:mr-[25%] bg-[#1a1630] p-6 space-y-4 border-l border-r border-[#2a2545] min-h-screen">
        <ChattingHeader />
        <Chatting />
      </main>

      {/* Right Sidebar */}
      <aside className="hidden md:flex fixed right-0 flex-col w-[25%] bg-[#1a1630] p-4 space-y-6 overflow-y-auto hide-scrollbar border-l border-[#2a2545]">
        <LeftProfileSidebar />
        <LeftSidebarShareMedia />
        <LeftSidebarPost />
      </aside>
    </div>
  );
}
