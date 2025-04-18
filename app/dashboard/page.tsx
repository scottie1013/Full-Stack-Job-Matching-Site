"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
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
  HeartHandshake,
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

// Mock data for referrals
const referrals = [
  { id: 1, name: "Michael Brown", company: "Google", position: "Software Engineer", status: "Accepted", date: "2023-04-18" },
  { id: 2, name: "Jennifer Lee", company: "Microsoft", position: "Product Manager", status: "Pending", date: "2023-04-20" },
  { id: 3, name: "David Wilson", company: "Amazon", position: "UX Designer", status: "Interviewing", date: "2023-04-15" },
  { id: 4, name: "Sarah Kim", company: "Apple", position: "Data Scientist", status: "Rejected", date: "2023-04-10" },
];

// Mock data for messages
const messages = [
  { id: 1, from: "Sarah Chen", company: "Google", message: "Thanks for connecting! I'd love to discuss the Software Engineer role.", unread: true, date: "2023-04-21" },
  { id: 2, from: "Mike Johnson", company: "Microsoft", message: "I received your application and would like to schedule an interview.", unread: false, date: "2023-04-19" },
  { id: 3, from: "David Kim", company: "Apple", message: "Following up on your application for the Data Scientist position.", unread: false, date: "2023-04-17" },
];

function DashboardContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("overview")

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

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Metrics Overview */}
          <Card className="mb-6">
            <CardContent className="p-6">
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

          {/* Recently Applied */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recently Applied</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appliedCompanies.map((company) => (
                  <div key={company.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{company.name}</h3>
                          <p className="text-sm text-gray-500">{company.role}</p>
                        </div>
                        <Badge 
                          variant={
                            company.status === 'Accepted' ? 'secondary' : 
                            company.status === 'Interviewing' ? 'default' : 
                            company.status === 'Rejected' ? 'destructive' : 
                            'outline'
                          }
                        >
                          {company.status}
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm">{company.date}</p>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Applied {company.date}</span>
                        <Button variant="ghost" size="sm" className="text-purple-900">
                          View Application <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-purple-900 hover:bg-purple-800">View All Applications</Button>
              </div>
            </CardContent>
          </Card>

          {/* Recruiter Follow-ups */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recruiter Follow-ups</span>
                <Badge>{recruiterFollowups.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recruiterFollowups.map((followup) => (
                  <div 
                    key={followup.id} 
                    className={`p-4 rounded-lg border ${followup.urgent ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{followup.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{followup.company}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{followup.date}</div>
                    </div>
                    <p className="text-sm">{followup.message}</p>
                    <div className="mt-4 flex justify-end">
                      <Link href={`/conversations/${followup.id}`}>
                        <Button size="sm" className="bg-purple-900 hover:bg-purple-800">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/dashboard/followups">
                  <Button variant="outline" className="border-purple-900 text-purple-900">
                    View All Follow-ups
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  )
}

