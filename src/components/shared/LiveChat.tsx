"use client";

import React, { useState } from 'react';

interface LiveChatProps {
  locale: string;
}

const translations = {
  lv: {
    chatTitle: "Tiešsaistes atbalsts",
    chatButton: "Uzsākt tērzēšanu",
    chatPlaceholder: "Rakstiet savu jautājumu šeit..."
  },
  en: {
    chatTitle: "Live Support",
    chatButton: "Start Chat",
    chatPlaceholder: "Type your question here..."
  }
};

export default function LiveChat({ locale }: LiveChatProps) {
  const t = translations[locale as keyof typeof translations];
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // Custom chat button instead of relying on Crisp's default button
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const sendMessage = () => {
    if (message.trim()) {
      // This is where we would integrate with a real chat service
      // For now, just display a message
      alert(`Your message: "${message}" has been sent to our support team. We'll get back to you soon!`);
      setMessage('');
    }
  };
  
  return (
    <>
      {/* Custom chat button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-xl w-80 overflow-hidden transition-all duration-300 ease-in-out">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-semibold">{t.chatTitle}</h3>
            </div>
            <div className="p-4 h-64 bg-gray-50 overflow-y-auto">
              <div className="bg-blue-100 p-3 rounded-lg mb-2 text-sm inline-block">
                Hello! How can we help you today?
              </div>
            </div>
            <div className="p-3 border-t border-gray-200 flex">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder={t.chatPlaceholder}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 text-sm transition duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-150 flex items-center justify-center"
          aria-label={isOpen ? "Close chat" : t.chatButton}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
