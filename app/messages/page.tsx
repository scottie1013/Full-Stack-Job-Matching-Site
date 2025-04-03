"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"

// Mock data for connections
const connectionsData = [
  { id: 1, name: "John Doe 1", status: "online", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "John Doe 2", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "John Doe 3", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "John Doe 4", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "John Doe 5", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
]

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(connectionsData[0])
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ id: number; text: string; sender: "user" | "contact"; timestamp: Date }[]>(
    [
      {
        id: 1,
        text: "Hello there! How can I help you today?",
        sender: "contact",
        timestamp: new Date(Date.now() - 3600000),
      },
    ],
  )

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user" as const,
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left sidebar */}
          <div className="bg-white rounded-md border p-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                <Image src="/placeholder.svg?height=64&width=64" alt="User avatar" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-semibold">Username</h2>
                <p className="text-sm text-gray-500">Candidate/Recruiter</p>
              </div>
            </div>

            <nav className="space-y-2 mb-6">
              <Link href="/referral-management" className="block p-3 bg-white rounded-md border">
                <div className="flex justify-between items-center">
                  <span>Referral Management</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </Button>
                </div>
              </Link>
              <Link href="/messages" className="block p-3 bg-gray-100 rounded-md border font-medium">
                Messages
              </Link>
              <Link href="/dashboard" className="block p-3 bg-white rounded-md border">
                Tracking Dashboard
              </Link>
            </nav>
          </div>

          {/* Middle column - Connections */}
          <div className="bg-white rounded-md border p-4">
            <h2 className="font-semibold mb-4">Your Connections</h2>
            <div className="space-y-3">
              {connectionsData.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${selectedContact.id === contact.id ? "bg-gray-100" : "hover:bg-gray-50"}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="relative">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={contact.avatar || "/placeholder.svg"}
                        alt={contact.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${contact.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{contact.name}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${contact.status === "online" ? "bg-green-100 text-green-800" : "bg-gray-100"}`}
                      >
                        {contact.status === "online" ? "Online" : "Offline"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Right column - Chat */}
          <div className="md:col-span-2 bg-white rounded-md border flex flex-col h-[600px]">
            <div className="border-b p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={selectedContact.avatar || "/placeholder.svg"}
                      alt={selectedContact.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${selectedContact.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
                  ></div>
                </div>
                <div>
                  <h3 className="font-medium">{selectedContact.name}</h3>
                  <p className="text-xs text-gray-500">
                    {selectedContact.status === "online" ? "Online" : "Last seen recently"}
                  </p>
                </div>
              </div>
              <div>
                <Button variant="ghost" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === "user" ? "bg-purple-100 text-purple-900" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Type here..."
                  className="min-h-[60px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
                <Button className="bg-purple-900 hover:bg-purple-800" onClick={handleSendMessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

