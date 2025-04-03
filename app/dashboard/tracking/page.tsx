"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MainNav } from "@/components/main-nav"

export default function TrackingDashboardPage() {
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
                <p className="text-sm text-gray-500">Candidate</p>
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
              <Link href="/messages" className="block p-3 bg-white rounded-md border">
                Messages
              </Link>
              <Link href="/dashboard/tracking" className="block p-3 bg-gray-100 rounded-md border font-medium">
                Tracking Dashboard
              </Link>
            </nav>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Weekly Snapshot</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Referrals</h3>
                      <div className="text-3xl font-bold mb-1">5</div>
                      <p className="text-xs text-gray-500">referrals submitted</p>
                      <div className="mt-2 text-xs text-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up mr-1"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span>100% from previous week</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Started Chats</h3>
                      <div className="text-3xl font-bold mb-1">2</div>
                      <p className="text-xs text-gray-500">conversations</p>
                      <div className="mt-2 text-xs text-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up mr-1"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span>100% from previous week</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Applications</h3>
                      <div className="text-3xl font-bold mb-1">
                        5<span className="text-sm text-gray-500">/10</span>
                      </div>
                      <p className="text-xs text-gray-500">applications submitted</p>
                      <div className="mt-2 text-xs text-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up mr-1"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span>50% from previous week</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Interviews</h3>
                      <div className="text-3xl font-bold mb-1">1</div>
                      <p className="text-xs text-gray-500">interview scheduled</p>
                      <div className="mt-2 text-xs text-yellow-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-minus mr-1"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        <span>No change from previous week</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Interviews</h3>
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <p className="text-sm text-gray-500">interview scheduled</p>
                  </div>
                  <Button className="w-full mt-4 bg-purple-900 hover:bg-purple-800">View Interview Details</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Matches</h3>
                  <div className="text-center py-4">
                    <div className="text-4xl font-bold mb-2">4</div>
                    <p className="text-sm text-green-500">new matches</p>
                  </div>
                  <Button className="w-full mt-4 bg-purple-900 hover:bg-purple-800">View Match Details</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Job Applications</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Applications</span>
                      <span>5/10</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Interviews</span>
                      <span>1/5</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-purple-900 hover:bg-purple-800">View All Applications</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

