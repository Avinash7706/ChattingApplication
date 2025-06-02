import { useEffect, useRef, useState } from "react";
import ChattingInput from "./ChattingInput";

export default function Chatting() {
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chatMessages");
    return stored ? JSON.parse(stored) : [];
  });

  const messagesEndRef = useRef(null);

  const handleSendMessage = (message) => {
    setMessages((prev) => {
      const updated = [...prev, message];
      localStorage.setItem("chatMessages", JSON.stringify(updated));
      return updated;
    });
  };

  // Scroll to bottom whenever `messages` changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen w-full">
     
      <div className="flex-1 w-full overflow-y-auto px-4 pt-4 pb-20 space-y-2 hide-scrollbar">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`
              max-w-max px-4 py-3 rounded-xl text-[11px]
              ${msg.isUser
                ? "ml-auto bg-[rgb(127,58,255)] text-white text-right"
                : "mr-auto bg-[#2a2545] text-white text-left"}
            `}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 
        ChattingInput is fixed at the bottom.
        We give it w-full so it lines up exactly under the messages area.
      */}
      <div className="w-full bg-[#0f0f1a]">
        <ChattingInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
