"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { StockImage } from "../../components/stock-image"
import { useState } from 'react';

export default function OnboardingCompletePage() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/parse-resume', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setFormData(data.data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Resume</h2>
            <p className="text-center text-gray-600 mb-6">
              Upload your resume to autofill your profile information.
            </p>
            <div className="flex justify-center mb-8">
              <input type="file" accept=".pdf" onChange={handleFileUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-purple-900">Onboarding Complete!</h1>
            <p className="text-xl text-gray-600">
              Congratulations! You're all set to start your journey with Activate!
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Your Profile is Ready</h2>

              <div className="flex items-center justify-center mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100">
                  <StockImage
                    type="profile"
                    alt="Profile"
                    width={96}
                    height={96}
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Profile information completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Skills and experience added</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Preferences set</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>AI matching activated</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Your profile is now visible to potential connections and our AI matching system is working to find the
                  perfect opportunities for you.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <StockImage
                    type="team"
                    alt="Networking"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Start Networking</h3>
                <p className="text-gray-600 mb-4">
                  Connect with professionals in your industry and expand your network.
                </p>
                <Button asChild className="w-full bg-purple-900 hover:bg-purple-800">
                  <Link href="/search">Find Connections</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <StockImage
                    type="company"
                    alt="Opportunities"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Explore Opportunities</h3>
                <p className="text-gray-600 mb-4">
                  Browse job listings and discover opportunities matched to your profile.
                </p>
                <Button asChild className="w-full">
                  <Link href="/search/company">View Opportunities</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <StockImage
                    type="workspace"
                    alt="Complete Profile"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-gray-600 mb-4">Add more details to your profile to improve your matching results.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/profile">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-8 text-gray-600">
              Your dashboard is where you'll track your progress, manage connections, and monitor referrals.
            </p>
            <Button asChild className="bg-purple-900 hover:bg-purple-800 px-8 py-6 text-lg">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

