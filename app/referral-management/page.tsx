"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { MainNav } from "@/components/main-nav"

// Mock data for recruiters
const recruitersData = [
  { id: 1, name: "Recruiter 1", status: "online", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Recruiter 2", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Recruiter 3", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Recruiter 4", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Recruiter 5", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
]

// Mock data for candidates
const candidatesData = [
  { id: 1, name: "Candidate 1", status: "online", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Candidate 2", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Candidate 3", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Candidate 4", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Candidate 5", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
]

export default function ReferralManagementPage() {
  const [userType, setUserType] = useState<"candidate" | "recruiter">("candidate")
  const [selectedContact, setSelectedContact] = useState(
    userType === "candidate" ? recruitersData[0] : candidatesData[0],
  )
  const [referralMessage, setReferralMessage] = useState("")

  const handleSendReferralRequest = () => {
    if (referralMessage.trim()) {
      alert("Referral request sent!")
      setReferralMessage("")
    }
  }

  const handleAcceptReferral = () => {
    alert("Referral accepted!")
  }

  const handleRejectReferral = () => {
    alert("Referral rejected!")
  }

  const toggleUserType = () => {
    setUserType(userType === "candidate" ? "recruiter" : "candidate")
    setSelectedContact(userType === "recruiter" ? recruitersData[0] : candidatesData[0])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        <div className="mb-4 flex justify-end">
          <Button onClick={toggleUserType} variant="outline">
            Switch to {userType === "candidate" ? "Recruiter" : "Candidate"} View
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left sidebar */}
          <div className="bg-white rounded-md border p-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                <Image src="/placeholder.svg?height=64&width=64" alt="User avatar" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-semibold">Username</h2>
                <p className="text-sm text-gray-500">{userType === "candidate" ? "Candidate" : "Recruiter"}</p>
              </div>
            </div>

            <nav className="space-y-2 mb-6">
              <Link href="/referral-management" className="block p-3 bg-gray-100 rounded-md border font-medium">
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
              <Link href="/messages" className="block p-3 bg-white rounded-md border">
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
              {(userType === "candidate" ? recruitersData : candidatesData).map((contact) => (
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

          {/* Right column - Referral Request */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-md border p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={selectedContact.avatar || "/placeholder.svg"}
                      alt={selectedContact.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{selectedContact.name}</h3>
                </div>
                <Badge variant="outline" className="bg-purple-100 text-purple-900">
                  View Profile
                </Badge>
              </div>

              {userType === "candidate" ? (
                // Candidate perspective - Send referral request
                <div className="bg-yellow-50 p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Send a referral request to {selectedContact.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Explain why you're interested in a referral and what position you're applying for.
                  </p>

                  <Textarea
                    placeholder="I'm interested in the Software Engineer position at your company..."
                    value={referralMessage}
                    onChange={(e) => setReferralMessage(e.target.value)}
                    className="mb-4 bg-white"
                    rows={6}
                  />

                  <Button className="w-full bg-purple-900 hover:bg-purple-800" onClick={handleSendReferralRequest}>
                    Send Referral Request
                  </Button>
                </div>
              ) : (
                // Recruiter perspective - Accept/Reject referral
                <div className="bg-yellow-50 p-4 rounded-md">
                  <h3 className="font-semibold mb-2">You received a referral request</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedContact.name} is requesting a referral for the Software Engineer position.
                  </p>

                  <div className="bg-white p-3 rounded-md mb-4 min-h-[100px]">
                    <p className="text-sm">
                      I'm interested in the Software Engineer position at your company. I have 3 years of experience
                      with React and Node.js, and I believe I would be a great fit for your team. I'd appreciate if you
                      could refer me for this position.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleAcceptReferral}>
                      Accept
                    </Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-700" onClick={handleRejectReferral}>
                      Decline
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

