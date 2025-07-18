import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Clock } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with your cleaning and painting needs. How can I assist you today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "Get a quote",
    "Schedule service",
    "Service areas",
    "Emergency cleaning",
    "Painting consultation"
  ];

  const autoResponses: { [key: string]: string } = {
    "get a quote": "I'd be happy to help you get a quote! What type of service are you interested in - cleaning or painting? And what's the approximate size of your property?",
    "schedule service": "Great! I can help you schedule a service. What type of service do you need and when would you prefer to have it done?",
    "service areas": "We serve the greater metropolitan area including downtown, suburban communities, and surrounding neighborhoods. What's your location?",
    "emergency cleaning": "We offer same-day emergency cleaning services with a 50% surcharge. What's your cleaning emergency?",
    "painting consultation": "Our color consultation service includes professional advice on paint selection, color matching, and design recommendations. Would you like to schedule a consultation?",
    "hello": "Hello! Welcome to Subrina's Services. How can I help you with your cleaning or painting needs today?",
    "hi": "Hi there! I'm here to help with any questions about our cleaning and painting services. What can I do for you?",
    "hours": "Our business hours are Monday-Saturday 8AM-6PM. We also offer emergency services outside these hours. What do you need help with?",
    "pricing": "Our pricing varies based on the service type and property size. Cleaning starts at $80/visit and painting starts at $300. Would you like a detailed quote?",
    "insurance": "Yes, we are fully licensed and insured. All our staff are background-checked and bonded for your peace of mind."
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "Thank you for your message! A team member will respond shortly. For immediate assistance, please call us at (555) 123-4567.";

      // Check for auto-responses
      for (const [key, value] of Object.entries(autoResponses)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      const agentMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Subrina's Services</h3>
                <div className="flex items-center text-blue-100 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Online now
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <a 
                  href="tel:+15551234567"
                  className="p-1 hover:bg-blue-700 rounded"
                  title="Call us"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-blue-700 rounded"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Business Hours Notice */}
          <div className="px-4 pb-4">
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              Mon-Sat 8AM-6PM • Emergency services available 24/7
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;