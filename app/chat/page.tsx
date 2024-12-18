'use client'
import React from 'react'
import ChatModal from '../components/ChatModal'

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Chat Support</h1>
        <div className="bg-white rounded-lg shadow-md">
          <ChatModal isOpen={true} onClose={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default ChatPage 