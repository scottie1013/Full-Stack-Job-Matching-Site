"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { QuizResponses } from "../../components/quiz-responses"
import {
  Plus,
  Edit,
  Trash2,
  Copy,
  Save,
  HelpCircle,
  FileText,
  User,
} from "lucide-react"

// Sample quiz questions
const sampleQuiz = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Which cloud technology are you most experienced with?",
    options: ["AWS", "Azure", "Google Cloud", "None of the above"],
    required: true,
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Which programming language do you prefer for cloud infrastructure?",
    options: ["Python", "JavaScript/TypeScript", "Go", "Java"],
    required: true,
  },
  {
    id: 3,
    type: "text",
    question: "Describe a challenging cloud infrastructure problem you've solved",
    placeholder: "Share your experience here...",
    required: true,
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "What's your experience level with MLOps?",
    options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    required: false,
  },
  {
    id: 5,
    type: "text",
    question: "What interests you most about working at Microsoft?",
    placeholder: "Share your thoughts here...",
    required: true,
  }
]

// Sample quiz responses
const sampleResponses = [
  {
    id: 1,
    candidateName: "Alex Johnson",
    timestamp: "May 15, 2023 • 2:45 PM",
    viewed: true,
    responses: [
      {
        question: "Which cloud technology are you most experienced with?",
        answer: "AWS",
        type: "multiple-choice" as const
      },
      {
        question: "Which programming language do you prefer for cloud infrastructure?",
        answer: "Python",
        type: "multiple-choice" as const
      },
      {
        question: "Describe a challenging cloud infrastructure problem you've solved",
        answer: "I recently implemented a multi-region architecture that improved our disaster recovery capabilities. The challenge was maintaining data consistency across regions while minimizing latency. I designed a solution using DynamoDB global tables with custom conflict resolution logic.",
        type: "text" as const
      },
      {
        question: "What's your experience level with MLOps?",
        answer: "Intermediate",
        type: "multiple-choice" as const
      },
      {
        question: "What interests you most about working at Microsoft?",
        answer: "I'm particularly interested in Microsoft's cloud infrastructure work and the opportunity to impact products that millions of people use daily. I'm also drawn to the company's commitment to AI ethics and responsible innovation.",
        type: "text" as const
      },
    ]
  },
  {
    id: 2,
    candidateName: "Sarah Miller",
    timestamp: "May 12, 2023 • 10:23 AM",
    viewed: false,
    responses: [
      {
        question: "Which cloud technology are you most experienced with?",
        answer: "Azure",
        type: "multiple-choice" as const
      },
      {
        question: "Which programming language do you prefer for cloud infrastructure?",
        answer: "JavaScript/TypeScript",
        type: "multiple-choice" as const
      },
      {
        question: "Describe a challenging cloud infrastructure problem you've solved",
        answer: "I led a project to optimize our CI/CD pipeline that was taking over 45 minutes to complete. By implementing parallel testing, caching strategies, and optimizing Docker builds, I reduced the pipeline time to under 10 minutes, which dramatically improved developer productivity.",
        type: "text" as const
      },
      {
        question: "What's your experience level with MLOps?",
        answer: "Beginner",
        type: "multiple-choice" as const
      },
      {
        question: "What interests you most about working at Microsoft?",
        answer: "I'm excited about Microsoft's focus on developer tools and productivity. As someone who has used VS Code and GitHub extensively, I'd love to contribute to these platforms and help shape the future of developer experience.",
        type: "text" as const
      },
    ]
  },
]

export default function QuizManagerPage() {
  const [quizEnabled, setQuizEnabled] = useState(true)
  const [quizQuestions, setQuizQuestions] = useState(sampleQuiz)
  const [quizResponses, setQuizResponses] = useState(sampleResponses)
  const [isEditing, setIsEditing] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  
  const handleToggleQuiz = () => {
    setQuizEnabled(!quizEnabled)
  }
  
  const handleEditQuestion = (question: any) => {
    setCurrentQuestion({ ...question })
    setIsEditing(true)
  }
  
  const handleSaveQuestion = () => {
    if (!currentQuestion) return
    
    if (currentQuestion.id) {
      // Edit existing question
      setQuizQuestions(quizQuestions.map(q => 
        q.id === currentQuestion.id ? currentQuestion : q
      ))
    } else {
      // Add new question
      setQuizQuestions([
        ...quizQuestions, 
        { ...currentQuestion, id: quizQuestions.length + 1 }
      ])
    }
    
    setIsEditing(false)
    setCurrentQuestion(null)
  }
  
  const handleDeleteQuestion = (id: number) => {
    setQuizQuestions(quizQuestions.filter(q => q.id !== id))
  }
  
  const handleAddQuestion = () => {
    setCurrentQuestion({
      id: null,
      type: "multiple-choice",
      question: "",
      options: ["", "", "", ""],
      required: true,
    })
    setIsEditing(true)
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Personalized Quiz Manager</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="quiz-enabled"
                checked={quizEnabled}
                onCheckedChange={handleToggleQuiz}
              />
              <Label htmlFor="quiz-enabled">
                Quiz {quizEnabled ? 'Enabled' : 'Disabled'}
              </Label>
            </div>
            
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Quiz
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="questions" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="questions">Quiz Questions</TabsTrigger>
            <TabsTrigger value="responses" className="relative">
              Responses
              {quizResponses.filter(r => !r.viewed).length > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {quizResponses.filter(r => !r.viewed).length} new
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          {/* Questions Tab */}
          <TabsContent value="questions">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quiz Questions</CardTitle>
                <CardDescription>
                  Create questions to learn more about candidates before they connect with you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={question.id} className="p-4 border rounded-lg bg-white">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                              {index + 1}
                            </span>
                            <h3 className="font-medium">{question.question}</h3>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 ml-8">
                            {question.type === 'multiple-choice' ? 'Multiple choice' : 'Text response'} • 
                            {question.required ? ' Required' : ' Optional'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEditQuestion(question)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteQuestion(question.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {question.type === "multiple-choice" && (
                        <div className="ml-8 mt-3">
                          <div className="text-xs text-gray-500 mb-2">Options:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {question.options?.map((option, i) => (
                              <div key={i} className="text-sm bg-gray-50 p-2 rounded-md">
                                {option}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <Button onClick={handleAddQuestion} className="mt-6">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Question
                </Button>
              </CardContent>
            </Card>
            
            {isEditing && (
              <Card>
                <CardHeader>
                  <CardTitle>{currentQuestion.id ? 'Edit' : 'Add'} Question</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="question">Question</Label>
                      <Input 
                        id="question" 
                        value={currentQuestion.question}
                        onChange={(e) => setCurrentQuestion({...currentQuestion, question: e.target.value})}
                        placeholder="Enter your question here"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div>
                        <Label htmlFor="question-type">Question Type</Label>
                        <select 
                          id="question-type"
                          value={currentQuestion.type}
                          onChange={(e) => setCurrentQuestion({
                            ...currentQuestion, 
                            type: e.target.value,
                            ...(e.target.value === "multiple-choice" ? { options: currentQuestion.options || ["", "", "", ""] } : {})
                          })}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="multiple-choice">Multiple Choice</option>
                          <option value="text">Text Response</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-6">
                        <Switch
                          id="required"
                          checked={currentQuestion.required}
                          onCheckedChange={(checked) => setCurrentQuestion({...currentQuestion, required: checked})}
                        />
                        <Label htmlFor="required">Required</Label>
                      </div>
                    </div>
                    
                    {currentQuestion.type === "multiple-choice" && (
                      <div>
                        <Label>Options</Label>
                        <div className="space-y-2 mt-2">
                          {currentQuestion.options?.map((option: string, i: number) => (
                            <Input 
                              key={i}
                              value={option}
                              onChange={(e) => {
                                const newOptions = [...currentQuestion.options]
                                newOptions[i] = e.target.value
                                setCurrentQuestion({...currentQuestion, options: newOptions})
                              }}
                              placeholder={`Option ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {currentQuestion.type === "text" && (
                      <div>
                        <Label htmlFor="placeholder">Placeholder Text</Label>
                        <Input 
                          id="placeholder"
                          value={currentQuestion.placeholder || ""}
                          onChange={(e) => setCurrentQuestion({...currentQuestion, placeholder: e.target.value})}
                          placeholder="Enter placeholder text"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => {
                    setIsEditing(false)
                    setCurrentQuestion(null)
                  }}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveQuestion} disabled={!currentQuestion.question}>
                    Save Question
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
          
          {/* Responses Tab */}
          <TabsContent value="responses">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Candidate Responses</CardTitle>
                <CardDescription>
                  Review responses from candidates who completed your quiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                {quizResponses.length > 0 ? (
                  <div className="space-y-6">
                    {quizResponses.map((response) => (
                      <QuizResponses 
                        key={response.id}
                        candidateName={response.candidateName}
                        timestamp={response.timestamp}
                        responses={response.responses}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                    <h3 className="text-lg font-medium mb-1">No responses yet</h3>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                      When candidates complete your quiz, their responses will appear here
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Settings</CardTitle>
                <CardDescription>
                  Configure how your personalized quiz works
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Require Quiz Completion</h3>
                      <p className="text-sm text-gray-500">
                        Candidates must complete the quiz before connecting with you
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Allow Skipping Questions</h3>
                      <p className="text-sm text-gray-500">
                        Let candidates skip non-required questions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Send Response Notifications</h3>
                      <p className="text-sm text-gray-500">
                        Get notified when a candidate completes your quiz
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Show Intro Screen</h3>
                      <p className="text-sm text-gray-500">
                        Display an introduction explaining the purpose of the quiz
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
} 