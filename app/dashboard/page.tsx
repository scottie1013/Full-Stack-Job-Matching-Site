"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Briefcase,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  MessageSquare,
  PieChart,
  User,
  Users,
} from "lucide-react"

// Mock data for companies applied to
const appliedCompanies = [
  { id: 1, name: "Google", role: "Software Engineer", status: "Interview", date: "2023-04-12", logo: "/placeholder.svg" },
  { id: 2, name: "Microsoft", role: "Product Manager", status: "Applied", date: "2023-04-10", logo: "/placeholder.svg" },
  { id: 3, name: "Amazon", role: "UX Designer", status: "Rejected", date: "2023-04-05", logo: "/placeholder.svg" },
  { id: 4, name: "Meta", role: "Data Scientist", status: "Offer", date: "2023-04-01", logo: "/placeholder.svg" },
];

// Mock data for recruiter follow-ups
const recruiterFollowups = [
  { id: 1, name: "Sarah Chen", company: "Google", date: "2023-04-15", message: "Follow up about next interview steps", urgent: true },
  { id: 2, name: "Mike Johnson", company: "Microsoft", date: "2023-04-18", message: "Send thank you for interview", urgent: false },
  { id: 3, name: "David Kim", company: "Apple", date: "2023-04-20", message: "Check on application status", urgent: false },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("referrals")

  // Mock metrics for visualization
  const metrics = {
    referrals: 5,
    interviews: 3,
    applications: 8,
    matches: 12,
    responseRate: 75,
    networkGrowth: 24,
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
              <Link href="/dashboard/companies" className="block p-3 bg-white rounded-md border">
                Companies Applied
              </Link>
              <Link href="/dashboard/followups" className="flex items-center justify-between p-3 bg-white rounded-md border">
                <span>Recruiter Follow-ups</span>
                <Badge variant="destructive" className="text-xs">{recruiterFollowups.length}</Badge>
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
            {/* Metrics Overview */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>

                <Tabs defaultValue="referrals" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="referrals">Referrals</TabsTrigger>
                    <TabsTrigger value="interviews">Interviews</TabsTrigger>
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="matches">Matches</TabsTrigger>
                  </TabsList>

                  <TabsContent value="referrals" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center py-4">
                        <div className="text-5xl font-bold mb-2 text-purple-900">{metrics.referrals}</div>
                        <p className="text-sm text-gray-500">Referrals submitted</p>
                        <div className="w-full bg-gray-100 h-4 rounded-full mt-4">
                          <div 
                            className="bg-purple-500 h-4 rounded-full" 
                            style={{ width: `${(metrics.referrals/10) * 100}%` }}
                          >
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">5 of 10 goal</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold">{metrics.responseRate}%</div>
                              <div className="text-xs text-gray-500">Response rate</div>
                            </div>
                          </div>
                          <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#E2E8F0"
                              strokeWidth="3"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#8b5cf6"
                              strokeWidth="3"
                              strokeDasharray={`${metrics.responseRate}, 100`}
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="interviews" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center py-4">
                        <div className="text-5xl font-bold mb-2 text-green-600">{metrics.interviews}</div>
                        <p className="text-sm text-gray-500">Interviews scheduled</p>
                        <div className="w-full bg-gray-100 h-4 rounded-full mt-4">
                          <div 
                            className="bg-green-500 h-4 rounded-full" 
                            style={{ width: `${(metrics.interviews/5) * 100}%` }}
                          >
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">3 of 5 goal</p>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="flex items-center p-2 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm">2 completed</span>
                        </div>
                        <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-sm">1 upcoming</span>
                        </div>
                        <div className="flex items-center p-2 bg-purple-50 rounded-lg">
                          <Users className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="text-sm">2 different companies</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="applications" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center py-4">
                        <div className="text-5xl font-bold mb-2 text-blue-600">{metrics.applications}</div>
                        <p className="text-sm text-gray-500">out of 10 goal</p>
                        <div className="w-full bg-gray-100 h-4 rounded-full mt-4">
                          <div 
                            className="bg-blue-500 h-4 rounded-full" 
                            style={{ width: `${(metrics.applications/10) * 100}%` }}
                          >
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">80% complete</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="grid grid-cols-2 gap-2 w-full text-center">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <div className="font-bold text-xl text-blue-600">3</div>
                            <div className="text-xs text-gray-600">In Review</div>
                          </div>
                          <div className="p-2 bg-green-50 rounded-lg">
                            <div className="font-bold text-xl text-green-600">2</div>
                            <div className="text-xs text-gray-600">Interview</div>
                          </div>
                          <div className="p-2 bg-red-50 rounded-lg">
                            <div className="font-bold text-xl text-red-600">2</div>
                            <div className="text-xs text-gray-600">Rejected</div>
                          </div>
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <div className="font-bold text-xl text-purple-600">1</div>
                            <div className="text-xs text-gray-600">Offer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="matches" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center py-4">
                        <div className="text-5xl font-bold mb-2 text-purple-900">{metrics.matches}</div>
                        <p className="text-sm text-green-500">
                          <span className="inline-flex items-center">
                            <Check className="h-4 w-4 mr-1" /> 
                            +3 new matches this week!
                          </span>
                        </p>
                        <div className="w-full bg-gray-100 h-4 rounded-full mt-4">
                          <div 
                            className="bg-purple-500 h-4 rounded-full" 
                            style={{ width: `${(metrics.matches/15) * 100}%` }}
                          >
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">12 of 15 goal</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="text-center p-4">
                          <div className="text-lg font-medium mb-2">Network Growth</div>
                          <div className="text-3xl font-bold text-purple-900">+{metrics.networkGrowth}%</div>
                          <p className="text-xs text-gray-500 mt-1">From last month</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Follow-up with recruiter reminders */}
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-purple-900" />
                  Recruiter Follow-ups
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {recruiterFollowups.length > 0 ? (
                  <div className="space-y-3">
                    {recruiterFollowups.map((followup) => (
                      <div 
                        key={followup.id} 
                        className={`flex items-start p-3 rounded-lg border ${followup.urgent ? 'bg-red-50 border-red-200' : 'bg-white'}`}
                      >
                        <div className="flex-shrink-0 mr-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{followup.name}</h4>
                            <span className="text-sm text-gray-500">
                              <Clock className="h-3 w-3 inline mr-1" />
                              {followup.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{followup.company}</p>
                          <p className="text-sm mt-1">{followup.message}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="flex-shrink-0 ml-2">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">No follow-ups pending</div>
                )}
                <div className="mt-4 text-right">
                  <Button variant="outline" size="sm" className="text-purple-900">
                    View All Follow-ups
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Companies applied to */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-purple-900" /> 
                  Companies Applied
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {appliedCompanies.map((company) => (
                    <div key={company.id} className="flex items-center p-3 bg-white rounded-lg border">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <Image 
                            src={company.logo} 
                            alt={company.name} 
                            width={24} 
                            height={24} 
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{company.name}</h4>
                          <span className="text-sm text-gray-500">{company.date}</span>
                        </div>
                        <p className="text-sm text-gray-600">{company.role}</p>
                      </div>
                      <Badge 
                        className={`ml-2 ${
                          company.status === 'Interview' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 
                          company.status === 'Applied' ? 'bg-gray-100 text-gray-800 hover:bg-gray-100' : 
                          company.status === 'Rejected' ? 'bg-red-100 text-red-800 hover:bg-red-100' : 
                          'bg-green-100 text-green-800 hover:bg-green-100'
                        }`}
                      >
                        {company.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Button variant="outline" size="sm" className="text-purple-900">
                    View All Applications
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                  <h3 className="font-semibold mb-4 flex items-center">
                    <PieChart className="h-4 w-4 mr-2" />
                    Application Success Rate
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold">35%</div>
                        </div>
                      </div>
                      <svg viewBox="0 0 36 36" className="w-28 h-28 transform -rotate-90">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="3"
                          strokeDasharray="35, 100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-center text-sm">
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="font-medium">8</div>
                      <div className="text-xs text-gray-500">Applications</div>
                    </div>
                    <div className="p-2 bg-blue-50 rounded">
                      <div className="font-medium text-blue-600">3</div>
                      <div className="text-xs text-gray-500">Responses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

