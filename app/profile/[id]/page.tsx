"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { StockImage } from "../../components/stock-image"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import {
  Check,
  MessageSquare,
  Save,
  Share,
  Star,
  Video,
} from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
}

interface OpenRole {
  id: number
  title: string
  description: string
  location: string
}

interface UserProfile {
  name: string
  position: string
  company: string
  bio: string
  projects: Project[]
  openRoles: OpenRole[]
}

type UserData = {
  [key: string]: UserProfile
}

// Mock data - in a real app, this would come from an API
const userData: UserData = {
  "1": {
    name: "Greg",
    position: "Engineering Manager",
    company: "Microsoft",
    bio: "Hi, I'm Greg! I'm an Engineering Manager at Microsoft with a passion for building innovative solutions and helping teams grow. With years of experience in software development and leadership, I love mentoring others, sharing insights, and guiding engineers as they navigate their careers. Whether you're looking for advice on technical skills, career growth, or leadership, I'm happy to help!",
    projects: [
      {
        id: 1,
        title: "Project #1",
        description: "Led development of cloud infrastructure",
        image: "workspace"
      },
      {
        id: 2,
        title: "Project #2",
        description: "Implemented ML pipeline",
        image: "technology"
      },
      {
        id: 3,
        title: "Project #3",
        description: "Team collaboration platform",
        image: "collaboration"
      }
    ],
    openRoles: [
      {
        id: 1,
        title: "SWE II",
        description: "Experienced role in cloud team",
        location: "Remote"
      },
      {
        id: 2,
        title: "SWE III",
        description: "Senior role in ML team",
        location: "Hybrid"
      }
    ]
  }
}

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const userId = params.id as string
  const user = userData[userId]
  const [videoRecording, setVideoRecording] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [message, setMessage] = useState("")

  const handleStartRecording = () => {
    setVideoRecording(true)
    setRecordingDuration(0)
    // In a real app, this would start the video recording
  }

  const handleStopRecording = () => {
    setVideoRecording(false)
    // In a real app, this would stop and save the video recording
  }

  const handleConnectClick = () => {
    router.push(`/messages/${userId}`)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">User not found</h1>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-6 pt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: Profile */}
        <div className="col-span-1">
          <Card className="shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
                  <StockImage
                    type="profile"
                    alt={user.name}
                    width={112}
                    height={112}
                    priority
                  />
                </div>
                <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                <p className="text-gray-600 mb-2">{user.position} at {user.company}</p>
                
                <Button 
                  className="w-full mb-3" 
                  onClick={handleConnectClick}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Connect
                </Button>
                
                <Button variant="outline" className="w-full mb-6">
                  <Save className="mr-2 h-4 w-4" />
                  Save Profile
                </Button>
                
                <div className="w-full border-t pt-4">
                  <h3 className="font-medium mb-2">About</h3>
                  <p className="text-gray-600 text-sm mb-4">{user.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Middle column: Projects and Open Roles */}
        <div className="col-span-1 space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Example Projects</CardTitle>
              <CardDescription>Recent work at {user.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.projects.map((project) => (
                  <div key={project.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium mb-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Open Roles</CardTitle>
              <CardDescription>Opportunities at {user.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.openRoles.map((role) => (
                  <div key={role.id} className="border rounded-lg p-3 bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{role.title}</h3>
                      <Badge variant="outline">{role.location}</Badge>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Star className="mr-2 h-3 w-3" /> Interested
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column: Messaging and Video */}
        <div className="col-span-1 space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Message</CardTitle>
              <CardDescription>Send a message to {user.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={`Ask ${user.name} about opportunities at ${user.company}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-3"
                rows={4}
              />
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Video Introduction</CardTitle>
              <CardDescription>Record a short video for {user.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg aspect-video mb-3 flex items-center justify-center">
                {videoRecording ? (
                  <div className="text-center">
                    <div className="text-red-500 animate-pulse mb-2">Recording...</div>
                    <div className="text-sm text-gray-600">{recordingDuration}s</div>
                  </div>
                ) : (
                  <Video className="h-12 w-12 text-gray-400" />
                )}
              </div>
              
              {videoRecording ? (
                <>
                  <Slider
                    max={60}
                    step={1}
                    value={[recordingDuration]}
                    className="mb-3"
                  />
                  <Button variant="destructive" className="w-full" onClick={handleStopRecording}>
                    Stop Recording
                  </Button>
                </>
              ) : (
                <Button className="w-full" onClick={handleStartRecording}>
                  <Video className="mr-2 h-4 w-4" />
                  Record Video
                </Button>
              )}
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Request a Referral</CardTitle>
              <CardDescription>Ask {user.name} to refer you to a position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <div>
                    <h3 className="font-medium">Direct Referral</h3>
                    <p className="text-gray-600 text-sm">Personal recommendation</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Check className="mr-2 h-3 w-3" /> Request
                  </Button>
                </div>
                
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <div>
                    <h3 className="font-medium">Share with Hiring Team</h3>
                    <p className="text-gray-600 text-sm">Forward your profile</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Share className="mr-2 h-3 w-3" /> Request
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

