"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResumeUpload() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    // Simulate API call to parse resume
    const response = await fetch('/api/parse-resume', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    // Redirect to onboarding page with parsed data
    const queryString = new URLSearchParams({
      fullName: data.fullName || '',
      email: data.email || '',
      currentRole: data.currentRole || '',
      yearsOfExperience: data.yearsOfExperience || '',
    }).toString();

    router.push(`/onboarding/candidate?${queryString}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Resume</h2>
        <p className="text-center text-gray-600 mb-6">
          Upload your resume to autofill your profile information.
        </p>
        <div className="flex justify-center mb-8">
          <input type="file" accept=".pdf" onChange={handleFileUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
        </div>
        {uploading && <p className="text-center text-purple-900">Uploading...</p>}
      </div>
    </main>
  );
} 