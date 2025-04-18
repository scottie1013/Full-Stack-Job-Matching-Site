import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SuccessStories() {
  const stories = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      quote: "From application to offer in just 9 days. The AI matching was spot-on! The platform's ability to understand my technical skills and match them with Google's requirements was impressive. I had tried traditional job boards for months without success.",
      timeToHire: "9 days",
      previousMethod: "Traditional job boards",
      salary: "40% increase",
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Meta",
      quote: "The direct connection to hiring managers made all the difference. Instead of my application getting lost in HR, I was able to showcase my product vision directly to the team lead. Within two weeks, I had multiple offers to choose from.",
      timeToHire: "14 days",
      previousMethod: "LinkedIn applications",
      salary: "35% increase",
    },
    {
      name: "Alex Kumar",
      role: "Data Scientist at Amazon",
      quote: "The AI matching algorithm understood my unique combination of skills perfectly. It matched me with a role that needed exactly my mix of machine learning expertise and domain knowledge in e-commerce.",
      timeToHire: "12 days",
      previousMethod: "Recruiter outreach",
      salary: "45% increase",
    },
    {
      name: "Emily Rodriguez",
      role: "Frontend Developer at Airbnb",
      quote: "I was skeptical at first, but the results speak for themselves. The platform found me opportunities I wouldn't have discovered otherwise, and the direct line to hiring managers was invaluable.",
      timeToHire: "10 days",
      previousMethod: "Company websites",
      salary: "30% increase",
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer at Microsoft",
      quote: "The speed and accuracy of the matching process was incredible. Within days, I was interviewing with teams that perfectly aligned with my cloud infrastructure experience.",
      timeToHire: "15 days",
      previousMethod: "Job fairs",
      salary: "50% increase",
    },
    {
      name: "Lisa Zhang",
      role: "UX Designer at Apple",
      quote: "What stood out was how the platform matched not just my skills, but also my design philosophy with the right team. The cultural fit was perfect from day one.",
      timeToHire: "11 days",
      previousMethod: "Design portfolios",
      salary: "38% increase",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-100 border-none">
            <Star className="w-4 h-4 mr-1" />
            Success Stories
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">Real Success Stories from Real Users</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover how professionals like you found their dream jobs using our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-purple-100 mb-8 italic">
                {story.quote}
              </blockquote>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4"></div>
                <div>
                  <p className="font-semibold text-white">{story.name}</p>
                  <p className="text-purple-300 text-sm">{story.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 bg-white/5 rounded-lg p-4">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Time to Hire</p>
                  <p className="text-white font-semibold">{story.timeToHire}</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1">Previous Method</p>
                  <p className="text-white font-semibold">{story.previousMethod}</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1">Salary Increase</p>
                  <p className="text-white font-semibold">{story.salary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

