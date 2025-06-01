import React from 'react'

export default function ChattingList({ messages }) {
  return (
    <section className="flex flex-col mt-5 space-y-3 overflow-y-auto max-h-[480px] px-1 hide-scrollbar">
      {messages?.map((message, index) => (
        <div
          key={index}
          className={`max-w-max px-4 ${
            message.isUser ? 'self-end bg-[#7f3aff]' : 'bg-[#2a2545]'
          } rounded-xl p-3 text-[11px] ${
            message.isUser ? 'text-white' : 'text-[#FFFF]'
          }`}
        >
          {message.text}
        </div>
      ))}
    </section>
  )
}