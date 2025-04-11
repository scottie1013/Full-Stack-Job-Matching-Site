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
    
    // In a real implementation, you would use a library like pdf-parse
    // For now, we'll mock the response with sample data
    
    // Mock data extraction - replace with actual parsing logic
    const mockData = {
      fullName: "John Doe",
      email: "john.doe@example.com",
      currentRole: "Software Engineer",
      yearsOfExperience: "5"
    };
    
    console.log("Extracted data:", mockData);
    
    // Return the mock data
    return NextResponse.json(mockData);
    
  } catch (error) {
    console.error("Error parsing resume:", error);
    return NextResponse.json(
      { error: "Failed to parse resume" },
      { status: 500 }
    );
  }
} 