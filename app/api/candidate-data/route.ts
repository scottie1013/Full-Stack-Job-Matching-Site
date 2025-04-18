import { NextRequest, NextResponse } from 'next/server';

// This API would typically retrieve data from a database in a real application.
// For demonstration purposes, we'll check if there's data in the session that was stored
// during the resume parsing process. If not, we'll return empty data.

export async function GET(request: NextRequest) {
  console.log("Candidate data API endpoint called");
  
  try {
    // In a real implementation, we would retrieve data from a database or session
    // using the user's session ID or other authentication information.
    // For this mock implementation, we'll return some fake parsed data.
    
    // Here we simulate getting the parsed data that would have been stored
    // after the resume was processed.
    const candidateData = {
      // Basic information
      fullName: "John Doe",
      email: "john.doe@example.com",
      currentRole: "Senior Software Engineer",
      yearsOfExperience: "7",
      
      // Skills extracted from resume
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "AWS", "Docker", "GraphQL", "MongoDB"],
      
      // Preferences inferred from resume
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
    
    return NextResponse.json(candidateData);
    
  } catch (error) {
    console.error("Error retrieving candidate data:", error);
    return NextResponse.json(
      { error: "Failed to retrieve candidate data" },
      { status: 500 }
    );
  }
} 