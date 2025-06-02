import { useState, useRef } from "react";
import { FaPlus, FaPaperPlane, FaCamera } from "react-icons/fa";

export default function ChattingInput({ onSendMessage }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // Send user message immediately
    onSendMessage({ text: trimmed, isUser: true });
    setInput("");

    // Focus input again
    inputRef.current?.focus();

    // Bot reply after 1 second
    setTimeout(() => {
      const replies = [
        "That's interesting! Tell me more about it.",
        "I understand what you mean.",
        "Thanks for sharing that with me!",
        "That's a great point!",
        "I'm here to help you with that.",
        "Could you elaborate on that?",
        "I appreciate your perspective.",
        "Let’s explore that idea further.",
        "That makes a lot of sense.",
        "Can you give me an example?",
        "Nice! Keep going.",
        "You're making great progress!",
        "Let me know if you'd like more info.",
        "You're on the right track.",
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      onSendMessage({ text: randomReply, isUser: false });
    }, 1000);
  };

  return (
    <div className="fixed bottom-0 left-[25%] right-[25%] px-4 ">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-3 bg-[#2a2545] rounded-xl px-4 py-3 w-full max-w-4xl mx-auto"
      >
        <button
          type="button"
          className="text-[#6b6b7b] hover:text-white text-lg"
          aria-label="Add"
        >
          <FaPlus />
        </button>
        <button
          type="button"
          className="text-[#6b6b7b] hover:text-white text-lg"
          aria-label="Camera"
        >
          <FaCamera />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow bg-transparent text-white text-xs placeholder-[#6b6b7b] focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#d9f99d] text-black text-xs font-semibold rounded-lg px-4 py-1 flex items-center space-x-1 hover:bg-[#c7e86a] transition"
        >
          <span>Send</span>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}
