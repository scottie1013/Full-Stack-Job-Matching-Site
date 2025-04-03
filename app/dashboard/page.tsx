"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { MainNav } from "@/components/main-nav"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("referrals")

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
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-900">
                <Image src="/placeholder.svg?height=64&width=64" alt="User avatar" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-semibold">Username</h2>
                <p className="text-sm text-gray-500">Candidate</p>
              </div>
            </div>

            <nav className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-white rounded-md border">
                <span className="font-medium">Referral Management</span>
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
              <Link href="/dashboard/messages" className="block p-3 bg-white rounded-md border">
                Messages
              </Link>
              <Link href="/dashboard" className="block p-3 bg-white rounded-md border font-medium bg-gray-100">
                Tracking Dashboard
              </Link>
            </nav>

            <div className="mt-8 bg-purple-950 text-white p-4 rounded-md">
              <h3 className="font-semibold mb-2">Congrats on your first match!</h3>
              <p className="text-sm mb-4">
                You've been matched with a potential employer. Check your messages to learn more.
              </p>
              <Button size="sm" variant="outline" className="text-white border-white hover:bg-purple-900">
                Back to Inbox
              </Button>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Weekly Snapshot</h2>

                <Tabs defaultValue="referrals" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="referrals">Referrals</TabsTrigger>
                    <TabsTrigger value="interviews">Interviews</TabsTrigger>
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="matches">Matches</TabsTrigger>
                  </TabsList>

                  <TabsContent value="referrals" className="mt-0">
                    <div className="text-center py-8">
                      <div className="text-5xl font-bold mb-2">0</div>
                      <p className="text-sm text-gray-500">Referrals submitted</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="interviews" className="mt-0">
                    <div className="text-center py-8">
                      <div className="text-5xl font-bold mb-2">0</div>
                      <p className="text-sm text-gray-500">Interviews scheduled</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="applications" className="mt-0">
                    <div className="text-center py-8">
                      <div className="text-5xl font-bold mb-2">0</div>
                      <p className="text-sm text-gray-500">/10</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="matches" className="mt-0">
                    <div className="text-center py-8">
                      <div className="text-5xl font-bold mb-2">1</div>
                      <p className="text-sm text-gray-500">
                        <span className="text-green-500">+1 new match!</span>
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Current Status</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Profile</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Network</span>
                        <span>50%</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-red-500">25 to go until complete!</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Matches</h3>
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <p className="text-sm text-green-500">Your first match! 🎉</p>
                  </div>
                  <Button className="w-full mt-4 bg-purple-900 hover:bg-purple-800">View Match Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

