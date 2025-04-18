import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log("Resume parsing API endpoint called");
  
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      console.error("No file received in the request");
      return NextResponse.json(
        { error: "No file received" },
        { status: 400 }
      );
    }
    
    console.log("File received:", (file as File).name);
    
    // In a real implementation, you would use a library like pdf-parse to extract text
    // and then apply NLP techniques to identify relevant information
    
    // Enhanced mock data extraction with more comprehensive fields
    const mockData = {
      // Basic information
      fullName: "John Doe",
      email: "john.doe@example.com",
      currentRole: "Senior Software Engineer",
      yearsOfExperience: "7",
      
      // Skills (would be extracted from resume text)
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "AWS", "Docker", "GraphQL", "MongoDB"],
      
      // Preferences (would be inferred from resume content)
      preferences: {
        jobType: "software-engineer",
        location: "San Francisco, CA",
        salary: "150-200",
        remote: true,
        hybrid: true,
        onsite: false,
        industry: "tech",
        companySize: "medium",
        alumniNetwork: ["google", "stanford"],
        referralOpportunities: true,
        relocationWilling: true,
        travelWilling: true
      }
    };
    
    console.log("Extracted data:", mockData);
    
    // Return the enhanced mock data
    return NextResponse.json(mockData);
    
  } catch (error) {
    console.error("Error parsing resume:", error);
    return NextResponse.json(
      { error: "Failed to parse resume" },
      { status: 500 }
    );
  }
} 