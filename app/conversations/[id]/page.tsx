"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { User, ArrowLeft, Send } from "lucide-react"

// Mock data for recruiters - in a real app this would come from your API
const recruiters = [
  { id: 1, name: "Sarah Chen", company: "Google", role: "Technical Recruiter" },
  { id: 2, name: "Mike Johnson", company: "Microsoft", role: "Senior Recruiter" },
  { id: 3, name: "David Kim", company: "Apple", role: "Talent Acquisition Specialist" },
];

interface Message {
  id: number;
  sender: "user" | "recruiter";
  message: string;
  timestamp: string;
}

// Mock conversation history - in a real app this would come from your API
const mockConversations: Record<string, Message[]> = {
  "1": [
    { id: 1, sender: "recruiter", message: "Hi there! I wanted to follow up about your next interview steps. We're ready to move forward with the technical interview.", timestamp: "2023-04-15T10:30:00Z" },
    { id: 2, sender: "user", message: "That sounds great! I'm excited to move forward. What are the next steps?", timestamp: "2023-04-15T10:45:00Z" },
    { id: 3, sender: "recruiter", message: "We'll need to schedule a 2-hour technical interview with our engineering team. Are you available next Tuesday or Wednesday?", timestamp: "2023-04-15T11:00:00Z" },
  ],
  "2": [
    { id: 1, sender: "recruiter", message: "Thank you for taking the time to interview with us yesterday. The team was impressed with your background.", timestamp: "2023-04-17T09:00:00Z" },
    { id: 2, sender: "user", message: "I appreciate the opportunity to interview! I enjoyed meeting the team and learning more about the role.", timestamp: "2023-04-17T09:30:00Z" },
  ],
  "3": [
    { id: 1, sender: "recruiter", message: "I wanted to check in about your application status for the position at Apple.", timestamp: "2023-04-19T14:00:00Z" },
    { id: 2, sender: "user", message: "Thanks for checking in! I'm still very interested in the position. Do you have any updates?", timestamp: "2023-04-19T15:30:00Z" },
    { id: 3, sender: "recruiter", message: "We're still reviewing applications and should have an update for you by the end of the week.", timestamp: "2023-04-19T16:15:00Z" },
  ],
};

interface Recruiter {
  id: number;
  name: string;
  company: string;
  role: string;
}

export default function ConversationPage() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : params.id?.[0] || "1"
  
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [recruiter, setRecruiter] = useState<Recruiter | null>(null)

  useEffect(() => {
    // Fetch recruiter data
    const recruiterId = parseInt(id)
    const recruiterData = recruiters.find(r => r.id === recruiterId)
    setRecruiter(recruiterData || null)

    // Fetch conversation history
    if (mockConversations[id]) {
      setMessages(mockConversations[id])
    }
  }, [id])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg: Message = {
      id: messages.length + 1,
      sender: "user",
      message: newMessage,
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date)
  }

  if (!recruiter) {
    return <div className="p-8">Loading conversation...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Conversation with {recruiter.name}</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <Card>
          <CardHeader className="bg-gray-50 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-purple-900" />
              </div>
              <div>
                <CardTitle>{recruiter.name}</CardTitle>
                <p className="text-sm text-gray-500">{recruiter.company} • {recruiter.role}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 h-[400px] overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user' 
                        ? 'bg-purple-900 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-purple-100' : 'text-gray-500'}`}>
                      {formatDate(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-purple-900 hover:bg-purple-800"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
} 