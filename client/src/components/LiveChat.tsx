import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Minimize2,
  Maximize2,
} from "lucide-react";

// Custom WhatsApp icon
const WhatsApp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

interface LiveChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function LiveChat({ isOpen, onToggle }: LiveChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to InnofyAI. How can we help you today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [agentStatus, setAgentStatus] = useState<"online" | "away" | "offline">("online");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");

      // Simulate agent response
      setTimeout(() => {
        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message! Our team will get back to you shortly. In the meantime, you can also reach us via WhatsApp or email.",
          sender: "agent",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, agentMessage]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const message = "Hello! I'm interested in your services. Can you help me?";
    const whatsappUrl = `https://wa.me/2348108114407?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const openEmail = () => {
    const subject = "Inquiry about InnofyAI Services";
    const body = "Hello,\n\nI'm interested in learning more about your services.\n\nBest regards,";
    const mailtoUrl = `mailto:info@innofyai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 },
  };

  const messageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      variants={chatVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Card className="w-80 h-96 bg-white shadow-2xl border-0">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <MessageCircle className="h-6 w-6" />
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                    agentStatus === "online" ? "bg-green-400" : 
                    agentStatus === "away" ? "bg-yellow-400" : "bg-gray-400"
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm opacity-90">
                    {agentStatus === "online" ? "Online" : 
                     agentStatus === "away" ? "Away" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={onToggle}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-blue-100" : "text-gray-500"
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2 mb-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={openWhatsApp}
                  >
                    <WhatsApp className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={openEmail}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Floating Chat Button
export function FloatingChatButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="h-6 w-6 mx-auto" />
    </motion.button>
  );
} 