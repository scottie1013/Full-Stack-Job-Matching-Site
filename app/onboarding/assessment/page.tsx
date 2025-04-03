"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssessmentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "candidate"

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    degree: "",
    institution: "",
    resumeFile: null,
    jobPreference: "",
    salaryRange: "mid",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFile: e.target.files?.[0] || null }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/onboarding/network")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">Assessment</h1>
      <p className="text-center text-yellow-500 font-medium mb-12">
        Help us get to know you better with a few questions
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Profile Setup</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Educational Background</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                name="degree"
                placeholder="Enter your degree"
                value={formData.degree}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                name="institution"
                placeholder="University/College name"
                value={formData.institution}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Resume Upload</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center justify-center">
              <div className="text-gray-500 mb-2">Select File</div>
              <div className="text-sm text-gray-400">
                {formData.resumeFile ? formData.resumeFile.name : "PDF, DOCX or TXT (Max 5MB)"}
              </div>
            </Label>
            <Input
              id="resume-upload"
              type="file"
              className="hidden"
              accept=".pdf,.docx,.txt"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Job Preferences</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="job-preference">Enter Job Preference</Label>
              <Input
                id="job-preference"
                name="jobPreference"
                placeholder="e.g., Software Engineer, Product Manager"
                value={formData.jobPreference}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Preference</Label>
              <Tabs defaultValue="mid" className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="low">Low</TabsTrigger>
                  <TabsTrigger value="mid">Mid</TabsTrigger>
                  <TabsTrigger value="high">High</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-purple-900 hover:bg-purple-800 text-white">
            Continue
          </Button>
        </div>
      </form>
    </div>
  )
}

