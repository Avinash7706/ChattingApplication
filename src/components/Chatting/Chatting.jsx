import { useState } from 'react';
import ChattingInput from './ChattingInput';
import ChattingList from './ChattingList';

export default function Chatting() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div className="flex flex-col h-full">
      <ChattingList messages={messages} />
      <div className="mt-4">
        <ChattingInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
} 