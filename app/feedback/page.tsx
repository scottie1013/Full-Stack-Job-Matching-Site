"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Breadcrumb } from "@/components/breadcrumb"

export default function FeedbackPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [satisfaction, setSatisfaction] = useState<string | null>(null)
  const [usability, setUsability] = useState<string | null>(null)
  const [recommendation, setRecommendation] = useState<string | null>(null)
  const [comments, setComments] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setSatisfaction(null)
      setUsability(null)
      setRecommendation(null)
      setComments("")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Feedback" }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-900">Your Feedback Matters</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Help us improve Activate! by sharing your thoughts and experiences
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank You for Your Feedback!</h2>
                <p className="text-gray-600 mb-6">Your input helps us make Activate! better for everyone.</p>
                <Button onClick={() => setIsSubmitted(false)}>Submit Another Response</Button>
              </div>
            ) : (
              <>
                <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="general">General Feedback</TabsTrigger>
                    <TabsTrigger value="referral">Referral Process</TabsTrigger>
                    <TabsTrigger value="matching">AI Matching</TabsTrigger>
                  </TabsList>

                  <TabsContent value="general">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Overall Experience</h2>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base">How satisfied are you with Activate! overall?</Label>
                            <RadioGroup
                              value={satisfaction || ""}
                              onValueChange={setSatisfaction}
                              className="mt-3 flex space-x-4"
                            >
                              {["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"].map(
                                (option, index) => (
                                  <div key={index} className="flex flex-col items-center">
                                    <RadioGroupItem
                                      value={option.toLowerCase().replace(/\s+/g, "-")}
                                      id={`satisfaction-${index}`}
                                      className="sr-only"
                                    />
                                    <Label
                                      htmlFor={`satisfaction-${index}`}
                                      className={`cursor-pointer flex flex-col items-center space-y-2 ${
                                        satisfaction === option.toLowerCase().replace(/\s+/g, "-")
                                          ? "text-purple-900"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                          satisfaction === option.toLowerCase().replace(/\s+/g, "-")
                                            ? "bg-purple-100"
                                            : "bg-gray-100"
                                        }`}
                                      >
                                        {index === 0 && "😞"}
                                        {index === 1 && "🙁"}
                                        {index === 2 && "😐"}
                                        {index === 3 && "🙂"}
                                        {index === 4 && "😄"}
                                      </div>
                                      <span className="text-xs text-center">{option}</span>
                                    </Label>
                                  </div>
                                ),
                              )}
                            </RadioGroup>
                          </div>

                          <div>
                            <Label className="text-base">How easy is it to use our platform?</Label>
                            <RadioGroup value={usability || ""} onValueChange={setUsability} className="mt-3">
                              {["Very Difficult", "Difficult", "Neutral", "Easy", "Very Easy"].map((option, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value={option.toLowerCase().replace(/\s+/g, "-")}
                                    id={`usability-${index}`}
                                  />
                                  <Label htmlFor={`usability-${index}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>

                          <div>
                            <Label className="text-base">How likely are you to recommend Activate! to others?</Label>
                            <RadioGroup value={recommendation || ""} onValueChange={setRecommendation} className="mt-3">
                              {["Not Likely", "Somewhat Unlikely", "Neutral", "Somewhat Likely", "Very Likely"].map(
                                (option, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value={option.toLowerCase().replace(/\s+/g, "-")}
                                      id={`recommendation-${index}`}
                                    />
                                    <Label htmlFor={`recommendation-${index}`}>{option}</Label>
                                  </div>
                                ),
                              )}
                            </RadioGroup>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-base">Additional comments or suggestions</Label>
                        <Textarea
                          placeholder="Tell us what you like or what we could improve..."
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="bg-purple-900 hover:bg-purple-800" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="referral">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Referral Process Feedback</h2>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base">How satisfied are you with our referral process?</Label>
                            <RadioGroup value={satisfaction || ""} onValueChange={setSatisfaction} className="mt-3">
                              {["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"].map(
                                (option, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value={option.toLowerCase().replace(/\s+/g, "-")}
                                      id={`satisfaction-${index}`}
                                    />
                                    <Label htmlFor={`satisfaction-${index}`}>{option}</Label>
                                  </div>
                                ),
                              )}
                            </RadioGroup>
                          </div>

                          <div>
                            <Label className="text-base">How easy was it to request or provide referrals?</Label>
                            <RadioGroup value={usability || ""} onValueChange={setUsability} className="mt-3">
                              {["Very Difficult", "Difficult", "Neutral", "Easy", "Very Easy"].map((option, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value={option.toLowerCase().replace(/\s+/g, "-")}
                                    id={`usability-${index}`}
                                  />
                                  <Label htmlFor={`usability-${index}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-base">How can we improve our referral process?</Label>
                        <Textarea
                          placeholder="Share your suggestions for improving our referral system..."
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="bg-purple-900 hover:bg-purple-800" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="matching">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">AI Matching Feedback</h2>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-base">How relevant were the job/candidate matches provided?</Label>
                            <RadioGroup value={satisfaction || ""} onValueChange={setSatisfaction} className="mt-3">
                              {[
                                "Not Relevant",
                                "Somewhat Irrelevant",
                                "Neutral",
                                "Somewhat Relevant",
                                "Very Relevant",
                              ].map((option, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value={option.toLowerCase().replace(/\s+/g, "-")}
                                    id={`satisfaction-${index}`}
                                  />
                                  <Label htmlFor={`satisfaction-${index}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>

                          <div>
                            <Label className="text-base">How would you rate the quality of matches?</Label>
                            <RadioGroup value={usability || ""} onValueChange={setUsability} className="mt-3">
                              {["Poor", "Fair", "Good", "Very Good", "Excellent"].map((option, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value={option.toLowerCase().replace(/\s+/g, "-")}
                                    id={`usability-${index}`}
                                  />
                                  <Label htmlFor={`usability-${index}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-base">
                          What improvements would you suggest for our AI matching system?
                        </Label>
                        <Textarea
                          placeholder="Tell us how we can make our matching algorithm better for you..."
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="bg-purple-900 hover:bg-purple-800" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-900"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat Support</h3>
              <p className="text-gray-600 mb-4">
                Need immediate assistance? Our support team is available via live chat during business hours.
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-900"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                For detailed inquiries or issues, our support team is available via email.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="mailto:support@activate-hr.com">Email Us</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-900"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Help Center</h3>
              <p className="text-gray-600 mb-4">Browse our knowledge base for answers to frequently asked questions.</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/help">Visit Help Center</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our User Research Panel</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Want to help shape the future of Activate!? Join our user research panel to participate in studies,
            interviews, and early feature testing.
          </p>
          <Button asChild className="bg-white text-purple-900 hover:bg-gray-100">
            <Link href="/user-research">Sign Up Now</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

