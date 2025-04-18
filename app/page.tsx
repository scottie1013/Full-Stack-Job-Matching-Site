import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CompanyLogo } from "./components/company-logo"
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Award, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Star,
  Shield,
  Sparkles,
  ChevronRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

      <div className="container mx-auto px-6 pt-12 pb-12 max-w-6xl relative z-10">
        {/* Top Bar with Social Proof */}
        <div className="bg-white/10 backdrop-blur-lg rounded-full py-2 px-4 mb-8 flex items-center justify-center text-white text-sm">
        </div>

        {/* Logo and Navigation */}
        <div className="flex justify-between items-center mb-16">
          <div className="text-3xl font-bold text-white">Activate!</div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-white/10 text-white border-none">

            </Badge>
            <Button asChild className="bg-white hover:bg-gray-100 text-purple-900 px-6">
  
            </Button>
          </div>
        </div>

        {/* Hero Section with Clear Value Proposition */}
        <div className="py-12">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-4 bg-purple-500/20 text-purple-100 border-none">
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Turn <span className="animate-gradient-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent font-extrabold">Cold Clicks</span> into <span className="animate-gradient-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">Warm Handshakes</span>
            </h1>
            <p className="text-xl text-purple-100 mb-4">
              Where genuine connections with hiring managers that land you jobs 3x faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="h-14 px-8 bg-white hover:bg-gray-100 text-purple-900 text-lg rounded-md">
                <Link href="/onboarding/welcome" className="flex items-center">
                  Get matched now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-md px-6 text-white">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                <span>100% Free to Start</span>
              </div>
            </div>
            <div className="flex items-center gap-8 text-purple-200 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                2-minute signup
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Instant matches
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-purple-700/40">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10,000+</div>
            <div className="text-purple-200">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">86%</div>
            <div className="text-purple-200">Interview Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">2,500+</div>
            <div className="text-purple-200">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">14 Days</div>
            <div className="text-purple-200">Avg. Time to Hire</div>
          </div>
        </div>

        {/* Key Benefits with Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">86% Success Rate</h3>
            <p className="text-purple-200 mb-4">Our AI matching algorithm increases your interview chances by 86% compared to traditional applications.</p>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-purple-100 italic">"Got 3 interviews in my first week!"</p>
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 mr-2"></div>
                <div className="text-xs text-purple-300">Mark R. - Software Engineer</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Direct Hiring Manager Access</h3>
            <p className="text-purple-200 mb-4">Skip the traditional application process and connect directly with decision-makers at your dream companies.</p>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-purple-100 italic">"Connected with my future boss directly!"</p>
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 mr-2"></div>
                <div className="text-xs text-purple-300">Lisa M. - Product Manager</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Matching</h3>
            <p className="text-purple-200 mb-4">Our AI analyzes 50+ data points to find perfect matches with companies actively hiring.</p>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-purple-100 italic">"Perfect company culture match!"</p>
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 mr-2"></div>
                <div className="text-xs text-purple-300">Alex K. - Data Scientist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By with Logos */}
        <div className="py-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-100 border-none">
              <Shield className="w-4 h-4 mr-1" />
              Trusted by Industry Leaders
            </Badge>
            <h2 className="text-2xl font-bold text-white">Connect with Hiring Managers at</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <CompanyLogo name="Microsoft" />
            <CompanyLogo name="Google" />
            <CompanyLogo name="Amazon" />
            <CompanyLogo name="Meta" />
            <CompanyLogo name="Apple" />
            <CompanyLogo name="Netflix" />
          </div>
        </div>

        {/* Featured Success Stories */}
        <div className="py-16 border-t border-purple-700/40">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-100 border-none">
              <Star className="w-4 h-4 mr-1" />
              Success Stories
            </Badge>
            <h2 className="text-2xl font-bold text-white">Real Results from Real Users</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <blockquote className="text-xl text-purple-100 mb-6 italic">
                "From application to offer in just 9 days. The AI matching was spot-on!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4"></div>
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-purple-300 text-sm">Software Engineer at Google</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <blockquote className="text-xl text-purple-100 mb-6 italic">
                "The direct connection to hiring managers made all the difference."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 mr-4"></div>
                <div>
                  <p className="font-semibold text-white">Michael Chen</p>
                  <p className="text-purple-300 text-sm">Product Manager at Meta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="group bg-white/10 hover:bg-white/20 text-white border-none">
              <Link href="/success-stories" className="flex items-center">
                View more success stories
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

