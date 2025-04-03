"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StockImage } from "../../components/stock-image"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

// Mock data for a conversation
const mockConversations: Record<string, Message[]> = {
  "1": [
    {
      id: 1,
      sender: "user",
      content: "Hi Greg! I saw your profile and I'm interested in learning more about Microsoft's cloud infrastructure.",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      sender: "greg",
      content: "Hi there! Thanks for reaching out. I'd be happy to chat about our cloud infrastructure. What specific aspects are you interested in?",
      timestamp: "10:35 AM"
    }
  ]
}

export default function MessagesPage() {
  const params = useParams()
  const userId = params.id as string
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>(mockConversations[userId] || [])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-6 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="border-b bg-white">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <StockImage
                  type="profile"
                  alt="Greg"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <CardTitle>Greg - Engineering Manager at Microsoft</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[60vh] flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-indigo-200"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t p-3 flex gap-2">
                <Textarea
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 