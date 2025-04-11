"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CandidateOnboarding() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    currentRole: "",
    yearsOfExperience: "",
  });

  useEffect(() => {
    // Check for query parameters when the page loads
    console.log("Checking for query parameters...");
    
    const fullName = searchParams.get('fullName');
    const email = searchParams.get('email');
    const currentRole = searchParams.get('currentRole');
    const yearsOfExperience = searchParams.get('yearsOfExperience');
    
    // Log parameters for debugging
    console.log("Query parameters:", { fullName, email, currentRole, yearsOfExperience });
    
    // If parameters exist, update the form data
    if (fullName || email || currentRole || yearsOfExperience) {
      console.log("Setting form data from query parameters");
      setFormData({
        fullName: fullName || '',
        email: email || '',
        currentRole: currentRole || '',
        yearsOfExperience: yearsOfExperience || '',
      });
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this data to your backend
    console.log("Form submitted:", formData);
    router.push("/onboarding/candidate/skills");
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File upload triggered");
    const files = e.target.files;
    if (!files) {
      console.log("No files selected");
      return;
    }
    
    const file = files[0];
    console.log("File selected:", file.name);
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      console.log("Sending request to parse-resume API...");
      const response = await fetch('/api/parse-resume', {
        method: 'POST',
        body: formData,
      });
      
      console.log("API Response status:", response.status);
      if (!response.ok) {
        console.error("API response not OK:", response.statusText);
        return;
      }
      
      const data = await response.json();
      console.log("Parsed data from API:", data);
      
      // Check the structure of the data
      if (data && typeof data === 'object') {
        console.log("Setting form data with:", data);
        
        // Update state with the parsed data
        setFormData({
          fullName: data.fullName || '',
          email: data.email || '',
          currentRole: data.currentRole || '',
          yearsOfExperience: data.yearsOfExperience || '',
        });
        
        console.log("Form data updated:", formData);
      } else {
        console.error("Invalid data structure received from API:", data);
      }
    } catch (error) {
      console.error("Error in file upload process:", error);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Resume</h2>
          <p className="text-center text-gray-600 mb-6">
            Upload your resume to autofill your profile information.
          </p>
          <div className="flex justify-center mb-8">
            <input type="file" accept=".pdf" onChange={handleFileUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-900">
              Tell us about yourself
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input
                  id="currentRole"
                  placeholder="e.g. Software Engineer"
                  value={formData.currentRole}
                  onChange={(e) =>
                    setFormData({ ...formData, currentRole: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                <Input
                  id="yearsOfExperience"
                  type="number"
                  placeholder="e.g. 5"
                  value={formData.yearsOfExperience}
                  onChange={(e) =>
                    setFormData({ ...formData, yearsOfExperience: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-purple-900 hover:bg-purple-800">
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 