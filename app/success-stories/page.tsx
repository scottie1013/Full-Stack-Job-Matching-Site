import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"

export default function SuccessStoriesPage() {
  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "Activate! completely transformed my job search. Through the platform, I connected with a Google engineer who referred me for a position that wasn't even publicly listed yet. The AI matching was spot-on, and I landed my dream job within weeks!",
      metrics: {
        timeToHire: "3 weeks",
        interviews: 2,
        referrals: 1,
      },
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Microsoft",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "After months of applying to jobs through traditional platforms with no success, I tried Activate! and was amazed by the quality of connections. The referral I received from a Microsoft PM gave me the edge I needed in a competitive hiring process.",
      metrics: {
        timeToHire: "1 month",
        interviews: 3,
        referrals: 2,
      },
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Amazon",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The AI matching on Activate! is incredibly accurate. I was connected with professionals who had similar career paths to what I was aspiring to. One connection turned into a referral, which led to my current role at Amazon. I couldn't be happier!",
      metrics: {
        timeToHire: "6 weeks",
        interviews: 4,
        referrals: 3,
      },
    },
  ]

  const companyStories = [
    {
      company: "TechGrowth Inc.",
      logo: "/placeholder.svg?height=100&width=200",
      quote:
        "Activate! has revolutionized our hiring process. The quality of candidates we receive through referrals is consistently higher than through any other channel. Our time-to-hire has decreased by 40% since implementing Activate!",
      metrics: {
        hiringTime: "-40%",
        candidateQuality: "+65%",
        retention: "+25%",
      },
    },
    {
      company: "InnovateSoft",
      logo: "/placeholder.svg?height=100&width=200",
      quote:
        "As a fast-growing startup, we needed to hire quality talent quickly. Activate!'s AI-powered matching and referral system helped us build our engineering team with candidates who were not just technically qualified but also great culture fits.",
      metrics: {
        hiringTime: "-35%",
        candidateQuality: "+70%",
        retention: "+30%",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-purple-900">Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Real people, real connections, real success. See how Activate! is transforming careers and companies.
          </p>
        </div>

        {/* Candidate Success Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-900">Candidate Success Stories</h2>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-64 md:h-auto">
                      <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-6">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                          <p className="text-purple-600 mb-4">{story.role}</p>
                          <div className="mb-6">
                            <p className="text-gray-600 italic">"{story.quote}"</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Time to Hire</p>
                            <p className="font-bold text-purple-900">{story.metrics.timeToHire}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Interviews</p>
                            <p className="font-bold text-purple-900">{story.metrics.interviews}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Referrals</p>
                            <p className="font-bold text-purple-900">{story.metrics.referrals}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Success Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-purple-900">Company Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-center mb-6">
                      <div className="relative h-16 w-40">
                        <Image
                          src={story.logo || "/placeholder.svg"}
                          alt={story.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-4">{story.company}</h3>

                    <div className="mb-6 flex-grow">
                      <p className="text-gray-600 italic">"{story.quote}"</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Hiring Time</p>
                        <p className="font-bold text-green-600">{story.metrics.hiringTime}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Candidate Quality</p>
                        <p className="font-bold text-green-600">{story.metrics.candidateQuality}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Retention</p>
                        <p className="font-bold text-green-600">{story.metrics.retention}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16 bg-purple-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Activate! by the Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Successful Placements", value: "10,000+" },
              { label: "Average Time to Hire", value: "4 weeks" },
              { label: "Referral Success Rate", value: "78%" },
              { label: "User Satisfaction", value: "96%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600">
            Join thousands of professionals who have transformed their careers with Activate!'s AI-powered platform.
          </p>
          <Button asChild className="bg-purple-900 hover:bg-purple-800 px-8 py-6 text-lg">
            <Link href="/onboarding/welcome">Start Your Journey</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

