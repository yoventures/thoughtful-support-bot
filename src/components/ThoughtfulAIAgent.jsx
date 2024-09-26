import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { findBestMatch } from '../utils/aiResponses';

const ThoughtfulAIAgent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message to chat
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);

    // Find the best match from predefined responses
    const bestMatch = findBestMatch(input);
    
    // Prepare AI response
    const aiResponse = bestMatch 
      ? bestMatch.answer 
      : "I'm sorry, I don't have a specific answer for that question. Is there anything else I can help you with regarding Thoughtful AI's agents?";

    // Add AI response to chat
    setTimeout(() => {
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 500); // Simulating a short delay for the AI response

    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Thoughtful AI Support Agent</h1>
      <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about EVA, CAM, PHIL, or Thoughtful AI's agents..."
          className="flex-grow"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default ThoughtfulAIAgent;