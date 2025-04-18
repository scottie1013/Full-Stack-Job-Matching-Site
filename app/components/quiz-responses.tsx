"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, FileText, User } from "lucide-react"

interface QuizResponse {
  question: string
  answer: string
  type: "multiple-choice" | "text"
}

interface QuizResponsesProps {
  candidateName: string
  timestamp: string
  responses: QuizResponse[]
}

export function QuizResponses({ candidateName, timestamp, responses }: QuizResponsesProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-base mb-1">Quiz Responses from {candidateName}</CardTitle>
              <CardDescription className="text-xs">Completed on {timestamp}</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <FileText className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        {isExpanded ? (
          <div className="space-y-4">
            {responses.map((response, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="text-sm font-medium mb-1">
                  {index + 1}. {response.question}
                </div>
                <div className={`text-sm ${response.type === 'text' ? 'bg-gray-50 p-3 rounded-md' : ''}`}>
                  {response.answer}
                </div>
              </div>
            ))}
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsExpanded(false)}
              className="w-full text-gray-500 mt-2"
            >
              <ChevronUp className="h-4 w-4 mr-1" />
              Show Less
            </Button>
          </div>
        ) : (
          <>
            <div className="text-sm text-gray-600 mb-3">
              {candidateName} has completed your personalized quiz. View their responses to learn more about their experience and interests.
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsExpanded(true)}
              className="w-full"
            >
              <ChevronDown className="h-4 w-4 mr-1" />
              View Quiz Responses
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
} 