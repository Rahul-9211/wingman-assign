'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import ChatModal from '../components/ChatModal';

interface ChatContextType {
  isChatOpen: boolean;
  openChat: (orderId?: number, productName?: string) => void;
  closeChat: () => void;
  currentOrder: { id?: number; productName?: string } | null;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<{ id?: number; productName?: string } | null>(null);

  const openChat = (orderId?: number, productName?: string) => {
    setCurrentOrder(orderId ? { id: orderId, productName } : { id: 0, productName: 'General Chat' });
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setCurrentOrder(null);
  };

  return (
    <ChatContext.Provider value={{ isChatOpen, openChat, closeChat, currentOrder }}>
      {children}
      {isChatOpen && currentOrder && (
        <ChatModal
          isOpen={isChatOpen}
          onClose={closeChat}
          orderId={currentOrder.id || 0}
          productName={currentOrder.productName || 'General Chat'}
        />
      )}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}; 