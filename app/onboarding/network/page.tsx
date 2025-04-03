"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NetworkPage() {
  const router = useRouter()
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: false,
    linkedin: false,
    twitter: false,
  })

  const handleConnect = (platform: "google" | "linkedin" | "twitter") => {
    setConnectedAccounts((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  const handleContinue = () => {
    router.push("/onboarding/paywall")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-purple-900 mb-2">Network Setup</h1>
      <p className="text-center text-yellow-500 font-medium mb-12">Connect your accounts to improve your matches</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-900 text-xs">1</span>
                </div>
                <span className="font-medium">Connect Accounts</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">Link your professional profiles for better matches</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-900 text-xs">2</span>
                </div>
                <span className="font-medium">Analyze Profile</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">Our AI analyzes your skills and experience</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-900 text-xs">3</span>
                </div>
                <span className="font-medium">Improve Matches</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">Get better job matches based on your network</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <div className="flex justify-center mb-8">
          <div className="relative w-[500px] h-[300px]">
            {/* Network diagram visualization */}
            <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span>You</span>
              </div>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
              <line
                x1="120"
                y1="150"
                x2="250"
                y2="80"
                stroke={connectedAccounts.google ? "#4285F4" : "#ddd"}
                strokeWidth="2"
              />
              <line
                x1="120"
                y1="150"
                x2="250"
                y2="150"
                stroke={connectedAccounts.linkedin ? "#0077B5" : "#ddd"}
                strokeWidth="2"
              />
              <line
                x1="120"
                y1="150"
                x2="250"
                y2="220"
                stroke={connectedAccounts.twitter ? "#1DA1F2" : "#ddd"}
                strokeWidth="2"
              />
            </svg>

            {/* Platform nodes */}
            <div className="absolute left-1/2 top-[80px] transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full ${connectedAccounts.google ? "bg-white" : "bg-gray-100"} flex items-center justify-center shadow-sm`}
                >
                  <span className="text-[#4285F4] font-bold">G</span>
                </div>
                <span className="text-xs mt-1">Google</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 text-xs h-7"
                  onClick={() => handleConnect("google")}
                >
                  {connectedAccounts.google ? "Connected" : "Connect"}
                </Button>
              </div>
            </div>

            <div className="absolute left-1/2 top-[150px] transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full ${connectedAccounts.linkedin ? "bg-white" : "bg-gray-100"} flex items-center justify-center shadow-sm`}
                >
                  <span className="text-[#0077B5] font-bold">in</span>
                </div>
                <span className="text-xs mt-1">LinkedIn</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 text-xs h-7"
                  onClick={() => handleConnect("linkedin")}
                >
                  {connectedAccounts.linkedin ? "Connected" : "Connect"}
                </Button>
              </div>
            </div>

            <div className="absolute left-1/2 top-[220px] transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full ${connectedAccounts.twitter ? "bg-white" : "bg-gray-100"} flex items-center justify-center shadow-sm`}
                >
                  <span className="font-bold">X</span>
                </div>
                <span className="text-xs mt-1">X</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 text-xs h-7"
                  onClick={() => handleConnect("twitter")}
                >
                  {connectedAccounts.twitter ? "Connected" : "Connect"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleContinue} className="bg-purple-900 hover:bg-purple-800 text-white">
          Continue
        </Button>
      </div>
    </div>
  )
}

