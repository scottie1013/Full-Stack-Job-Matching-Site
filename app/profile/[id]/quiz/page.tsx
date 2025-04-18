"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Check, ArrowRight, CheckCircle2 } from "lucide-react"

// Sample questions from recruiter
const quizQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Which cloud technology are you most experienced with?",
    options: ["AWS", "Azure", "Google Cloud", "None of the above"],
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Which programming language do you prefer for cloud infrastructure?",
    options: ["Python", "JavaScript/TypeScript", "Go", "Java"],
  },
  {
    id: 3,
    type: "text",
    question: "Describe a challenging cloud infrastructure problem you've solved",
    placeholder: "Share your experience here...",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "What's your experience level with MLOps?",
    options: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
  {
    id: 5,
    type: "text",
    question: "What interests you most about working at Microsoft?",
    placeholder: "Share your thoughts here...",
  }
]

export default function QuizPage() {
  const router = useRouter()
  const params = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  
  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
  
  const handleAnswerChange = (answer: string) => {
    setAnswers({ ...answers, [question.id]: answer })
  }
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsCompleted(true)
      }, 1500)
    }
  }
  
  const handleConnectClick = () => {
    router.push(`/profile/${params.id}`)
  }
  
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            <CardDescription>
              Thank you for completing Greg's personalized quiz. Your responses will help him understand your experience and interests better.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Your responses have been shared with Greg. You can now proceed to connect with him.
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleConnectClick} 
              className="w-full bg-purple-900 hover:bg-purple-800 py-6"
            >
              Connect with Greg
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle>
              Personalized Questions from Greg
            </CardTitle>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
          <CardDescription>
            Help Greg understand your experience and interests better before connecting
          </CardDescription>
          <Progress value={progress} className="h-2 mt-4" />
        </CardHeader>
        
        <CardContent className="py-6">
          <div className="space-y-6">
            <div className="text-lg font-medium">
              {question.question}
            </div>
            
            {question.type === "multiple-choice" ? (
              <RadioGroup 
                value={answers[question.id] || ""} 
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {question.options?.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Textarea 
                placeholder={question.placeholder} 
                value={answers[question.id] || ""}
                onChange={(e) => handleAnswerChange(e.target.value)}
                className="min-h-[120px]"
              />
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Previous
          </Button>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={!answers[question.id] || isSubmitting}
            className="bg-purple-900 hover:bg-purple-800"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting
              </div>
            ) : currentQuestion === quizQuestions.length - 1 ? (
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4" /> Complete Quiz
              </div>
            ) : (
              <div className="flex items-center">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 