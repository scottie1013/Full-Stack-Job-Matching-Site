import { Button } from "@/components/ui/button"
import { getUnsplashImage, IMAGE_QUERIES } from "@/lib/unsplash"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 86400 // Revalidate every 24 hours

export default async function WelcomePage() {
  // Fetch images for both roles
  let candidateImage = "/images/fallback-candidate.jpg"
  let recruiterImage = "/images/fallback-recruiter.jpg"
  
  try {
    const [candidate, recruiter] = await Promise.all([
      getUnsplashImage("professional office worker"),
      getUnsplashImage("business meeting team")
    ])
    candidateImage = candidate.urls.regular
    recruiterImage = recruiter.urls.regular
  } catch (error) {
    console.error('Failed to fetch Unsplash images:', error)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">Welcome to Activate!</h1>
        <p className="text-xl text-gray-600">Select your role to begin your personalized experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Candidate Card */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
          <div className="relative h-64">
            <Image
              src={candidateImage}
              alt="Candidate looking for opportunities"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-purple-900/60"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Candidate</h2>
            <p className="mb-4">Looking for your next career opportunity</p>
            <Button
              asChild
              className="w-full bg-white text-purple-900 hover:bg-gray-100"
            >
              <Link href="/onboarding/candidate">Continue</Link>
            </Button>
          </div>
        </div>

        {/* Recruiter Card */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
          <div className="relative h-64">
            <Image
              src={recruiterImage}
              alt="Recruiter searching for candidates"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-purple-900/60"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Recruiter</h2>
            <p className="mb-4">Searching for the perfect candidate</p>
            <Button
              asChild
              className="w-full bg-white text-purple-900 hover:bg-gray-100"
            >
              <Link href="/onboarding/recruiter">Continue</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

