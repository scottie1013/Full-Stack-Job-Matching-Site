"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PaywallPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic
    alert("Account created successfully!")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-purple-900 mb-2">Get Referral ASAP!</h1>
      <p className="text-center text-yellow-500 font-medium mb-12">
        Unlock our AI-powered job matching and referral system
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Choose Your Plan</h2>

          <div className="grid grid-cols-2 gap-4">
            <Card
              className={`cursor-pointer border-2 ${selectedPlan === "basic" ? "border-purple-500" : "border-gray-200"}`}
              onClick={() => setSelectedPlan("basic")}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-full h-32 bg-gray-100 rounded-md mb-4 relative">
                  <Image
                    src="/placeholder.svg?height=128&width=160"
                    alt="Basic plan"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-medium">Basic</h3>
                <p className="text-sm text-gray-500">$9.99/mo</p>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer border-2 ${selectedPlan === "premium" ? "border-purple-500" : "border-gray-200"}`}
              onClick={() => setSelectedPlan("premium")}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-full h-32 bg-gray-100 rounded-md mb-4 relative">
                  <Image
                    src="/placeholder.svg?height=128&width=160"
                    alt="Premium plan"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-medium">Premium</h3>
                <p className="text-sm text-gray-500">$19.99/mo</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Sign Up Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Selected Plan</Label>
              <Input
                id="plan"
                value={
                  selectedPlan
                    ? `${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan`
                    : "No plan selected"
                }
                readOnly
              />
            </div>

            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={!selectedPlan}>
              Create Account
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="outline" className="text-purple-900" asChild>
          <Link href="/">Skip for now</Link>
        </Button>
      </div>
    </div>
  )
}

