import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-purple-900">About Activate!</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Revolutionizing the job search and recruitment process with AI-powered matching and referrals.
          </p>
        </div>

        {/* Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Activate!, we're on a mission to transform how job seekers and employers connect. We believe that the
              traditional job search process is broken, relying too heavily on resumes that don't tell the full story
              and algorithms that miss the human element.
            </p>
            <p className="text-gray-600 mb-4">
              Our AI-powered platform combines cutting-edge technology with the power of human connections and referrals
              to create more meaningful matches between talented individuals and the companies that need them.
            </p>
            <p className="text-gray-600">
              We're building a future where finding the right job or the right candidate isn't about who you know, but
              about who you are and what you can contribute.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="Team collaboration" fill className="object-cover" />
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-900">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Co-Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "Sarah Chen", role: "CTO & Co-Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "Michael Rodriguez", role: "Chief AI Officer", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI and human connections.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                ),
              },
              {
                title: "Transparency",
                description: "We believe in being open and honest with our users, partners, and each other.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                title: "Inclusivity",
                description: "We're committed to creating opportunities for everyone, regardless of background.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-900 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-purple-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your job search?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs through Activate!'s AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-purple-900 hover:bg-gray-100">
              <Link href="/onboarding/welcome">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-purple-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

