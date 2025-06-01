import { useState } from "react";
import { FaPlus, FaPaperPlane, FaCamera } from "react-icons/fa";

export default function ChattingInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Send user message
      onSendMessage({ text: input, isUser: true });
      
      // Generate and send automatic reply after a short delay
      setTimeout(() => {
        const replies = [
          "That's interesting! Tell me more about it.",
          "I understand what you mean.",
          "Thanks for sharing that with me!",
          "That's a great point!",
          "I'm here to help you with that."
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        onSendMessage({ text: randomReply, isUser: false });
      }, 1000);
      
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 left-[25%] right-[25%] px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-3 bg-[#2a2545] rounded-xl px-4 py-3 w-full max-w-4xl mx-auto"
      >
        <button
          aria-label="Add"
          className="text-[#6b6b7b] hover:text-white text-lg focus:outline-none"
          type="button"
        >
          <FaPlus />
        </button>
        <button
          aria-label="Camera"
          className="text-[#6b6b7b] hover:text-white text-lg focus:outline-none"
          type="button"
        >
          <FaCamera />
        </button>
        
        <input
          className="flex-grow bg-transparent text-white text-xs placeholder-[#6b6b7b] focus:outline-none"
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          aria-label="Send"
          className="bg-[#d9f99d] text-black text-xs font-semibold rounded-lg px-4 py-1 flex items-center space-x-1 hover:bg-[#c7e86a] transition"
          type="submit"
        >
          <span>Send</span>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}