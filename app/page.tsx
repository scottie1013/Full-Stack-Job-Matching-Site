import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CompanyLogo } from "./components/company-logo"
import { ArrowRight, Zap, Users, Award } from "lucide-react"

// Revalidate the page every 24 hours to avoid hitting rate limits
export const revalidate = 86400

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 relative overflow-hidden">
      {/* Animation overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[10%] left-[15%] w-[40rem] h-[40rem] bg-purple-500 rounded-full mix-blend-multiply filter blur-[8rem] opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-[35rem] h-[35rem] bg-violet-500 rounded-full mix-blend-multiply filter blur-[8rem] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[35%] w-[30rem] h-[30rem] bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-[8rem] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12 max-w-6xl relative z-10">
        {/* Logo */}
        <div className="flex justify-between items-center mb-24">
          <div className="text-3xl font-bold text-white">Activate!</div>
          <Button asChild className="bg-white hover:bg-gray-100 text-purple-900 px-6">
            <Link href="/onboarding/welcome">Get started</Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="py-16">
          <h1 className="text-5xl font-bold text-white mb-8 leading-tight max-w-3xl">
            <span className="text-6xl font-extrabold">Activate!</span> your career and connect with hiring managers directly using 
            <span className="animate-gradient-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent font-extrabold"> AI-powered matching</span>
          </h1>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl">
            Our AI algorithm analyzes your profile and connects you with the right hiring managers, increasing your chances of landing your dream job by 86%.
          </p>
          <Button asChild className="h-14 px-8 bg-white hover:bg-gray-100 text-purple-900 text-lg rounded-md">
            <Link href="/onboarding/welcome">Connect with hiring managers</Link>
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-purple-700/40">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">86% Success Rate</h3>
            <p className="text-purple-200">Our candidates are 86% more likely to secure interviews with their target companies.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Direct Connections</h3>
            <p className="text-purple-200">Skip recruiters and connect directly with the people who make hiring decisions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Personalized Matching</h3>
            <p className="text-purple-200">Our AI analyzes thousands of data points to find your perfect match in companies.</p>
          </div>
        </div>

        {/* Trusted By */}
        <div className="py-16 border-t border-purple-700/40">
          <p className="text-center text-purple-300 text-sm mb-12">Trusted by hiring managers at</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <CompanyLogo name="Microsoft" />
            <CompanyLogo name="Google" />
            <CompanyLogo name="Amazon" />
            <CompanyLogo name="Meta" />
            <CompanyLogo name="Apple" />
            <CompanyLogo name="Netflix" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="py-16 border-t border-purple-700/40">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl max-w-3xl mx-auto">
            <blockquote className="text-xl text-purple-100 mb-6 italic">
              "The AI matching algorithm found me a perfect hiring manager who was looking for exactly my skill set. I got hired within 2 weeks of connecting."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4"></div>
              <div>
                <p className="font-semibold text-white">Sarah Johnson</p>
                <p className="text-purple-300 text-sm">Software Engineer at Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to <span className="text-4xl font-extrabold">Activate!</span> your career?</h2>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">Join thousands of candidates who have found their dream jobs through our AI-powered matching algorithm.</p>
          <Button asChild className="h-14 px-8 bg-white hover:bg-gray-100 text-purple-900 text-lg">
            <Link href="/onboarding/welcome">Get started now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

