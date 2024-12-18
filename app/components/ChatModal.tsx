'use client';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'customer';
  timestamp: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: number;
  productName: string;
}

export default function ChatModal({ isOpen, onClose, orderId, productName }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi, I have a question about the product",
      sender: 'customer',
      timestamp: '10:24 AM'
    },
    {
      id: 2,
      text: "Hello! I'm here to help. What would you like to know? write your custom message and will get back to you shortly.",
      sender: 'user',
      timestamp: '10:25 AM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    // Send user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setNewMessage('');

    // Simulate customer typing
    setIsTyping(true);
    
    // Simulate customer response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: getRandomResponse(),
        sender: 'customer',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  const getRandomResponse = () => {
    const responses = [
      "Thank you for your response! Could you tell me more about the delivery time?",
      "I appreciate your help. One more question about the warranty...",
      "That's exactly what I needed to know. Thanks!",
      "Perfect, I understand now. Could you also clarify the return policy?",
      "Great, thanks for the information!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  if (!isOpen) return null;

  return (
    <div style={{marginTop: '0px'}} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-2xl w-full max-w-2xl h-[600px] flex flex-col relative">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div>
            <h3 className="font-medium">Chat - Order #{orderId}</h3>
            <p className="text-sm text-gray-500">{productName}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div 
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-[#15B79E] text-white' 
                    : 'bg-gray-100 text-gray-900'
                } animate-fadeIn`}
              >
                <p>{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-2 animate-pulse">
                <p className="text-gray-500">Customer is typing...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#15B79E] transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!newMessage.trim()}
              className="px-4 py-2 bg-[#15B79E] text-white rounded-lg hover:bg-[#0E9A85] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 