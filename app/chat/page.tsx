'use client'

import { useState, useRef, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you with product information, order status, and general inquiries. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string) => {
    const responses = {
      order: [
        "I can help you track your order. Could you please provide your order number?",
        "Your order is currently being processed. It should be shipped within 2-3 business days.",
        "I've found your order details. Would you like to know about the shipping status?"
      ],
      product: [
        "I'd be happy to provide more information about our products. What specific details are you looking for?",
        "This product comes with a 1-year warranty and free returns within 30 days.",
        "Let me fetch the detailed specifications for you."
      ],
      help: [
        "I'm here to help! Could you please specify what kind of assistance you need?",
        "I can help you with orders, products, shipping, returns, or general inquiries.",
        "Feel free to ask any questions you have about our services."
      ]
    };

    const message = userMessage.toLowerCase();
    if (message.includes('order') || message.includes('tracking')) {
      return responses.order[Math.floor(Math.random() * responses.order.length)];
    } else if (message.includes('product') || message.includes('item')) {
      return responses.product[Math.floor(Math.random() * responses.product.length)];
    } else {
      return responses.help[Math.floor(Math.random() * responses.help.length)];
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-16">
        <TopBar />
        <div className="flex-1 bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto h-full flex flex-col bg-white rounded-2xl shadow-sm">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-[#15B79E] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs mt-2 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl p-4 animate-pulse">
                    <p className="text-gray-500">AI is typing...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15B79E] text-gray-700"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#15B79E] text-white px-6 py-3 rounded-xl hover:bg-[#0EA389] transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}