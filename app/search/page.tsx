"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StockImage } from "../components/stock-image"
import {
  Check,
  ChevronDown,
  Filter,
  MapPin,
  Search,
  Briefcase,
  Code,
  Star,
} from "lucide-react"

const jobCategories = [
  { id: 1, name: "Engineering", icon: Code },
  { id: 2, name: "Design", icon: Star },
  { id: 3, name: "Product", icon: Briefcase },
  { id: 4, name: "Marketing", icon: Filter },
  { id: 5, name: "Sales", icon: Check },
]

const mockSearchResults = [
  {
    id: "1",
    name: "Greg Smith",
    position: "Engineering Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    experience: "10+ years",
    skills: ["Cloud Architecture", "Distributed Systems", "React"],
    availability: "Open to opportunities",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Senior Product Designer",
    company: "Google",
    location: "Mountain View, CA",
    experience: "8 years",
    skills: ["UX/UI Design", "Design Systems", "Figma"],
    availability: "Looking for contract work",
  },
  {
    id: "3",
    name: "Miguel Rodriguez",
    position: "Product Manager",
    company: "Airbnb",
    location: "San Francisco, CA",
    experience: "6 years",
    skills: ["Product Strategy", "Growth", "Analytics"],
    availability: "Actively searching",
  },
  {
    id: "4",
    name: "Priya Patel",
    position: "Full Stack Developer",
    company: "Stripe",
    location: "Remote",
    experience: "5 years",
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    availability: "Open to opportunities",
  },
]

export default function SearchPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState(mockSearchResults)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would perform an actual search against an API
    const filtered = mockSearchResults.filter(
      (result) =>
        result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    setResults(filtered)
  }

  const handleViewProfile = (id: string) => {
    router.push(`/profile/${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-6">Find talented candidates</h1>
          <form onSubmit={handleSearch} className="w-full max-w-2xl flex gap-2">
            <Input
              placeholder="Search by name, position, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
          {/* Filters sidebar */}
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {jobCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <div
                      key={category.id}
                      className="flex items-center gap-2 text-sm cursor-pointer hover:text-indigo-600"
                    >
                      <Icon className="h-4 w-4" />
                      {category.name}
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium mb-3">Experience Level</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="exp-1" type="checkbox" className="mr-2" />
                  <label htmlFor="exp-1" className="text-sm">
                    Entry Level (0-2 years)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="exp-2" type="checkbox" className="mr-2" />
                  <label htmlFor="exp-2" className="text-sm">
                    Mid Level (3-5 years)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="exp-3" type="checkbox" className="mr-2" />
                  <label htmlFor="exp-3" className="text-sm">
                    Senior (6+ years)
                  </label>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium mb-3">Location</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="loc-1" type="checkbox" className="mr-2" />
                  <label htmlFor="loc-1" className="text-sm">
                    Remote
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="loc-2" type="checkbox" className="mr-2" />
                  <label htmlFor="loc-2" className="text-sm">
                    United States
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="loc-3" type="checkbox" className="mr-2" />
                  <label htmlFor="loc-3" className="text-sm">
                    Europe
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="loc-4" type="checkbox" className="mr-2" />
                  <label htmlFor="loc-4" className="text-sm">
                    Asia
                  </label>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium mb-3">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="avail-1" type="checkbox" className="mr-2" />
                  <label htmlFor="avail-1" className="text-sm">
                    Actively searching
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="avail-2" type="checkbox" className="mr-2" />
                  <label htmlFor="avail-2" className="text-sm">
                    Open to opportunities
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="avail-3" type="checkbox" className="mr-2" />
                  <label htmlFor="avail-3" className="text-sm">
                    Not available
                  </label>
                </div>
              </div>
            </Card>

            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>

          {/* Search results */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                Showing {results.length} candidates
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Button variant="outline" size="sm" className="flex items-center">
                  Best match
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {results.map((result) => (
                <Card key={result.id} className="p-4">
                  <div className="flex gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <StockImage
                        type="profile"
                        alt={result.name}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-lg">{result.name}</h3>
                          <p className="text-gray-600">
                            {result.position} at {result.company}
                          </p>
                        </div>
                        <Button 
                          onClick={() => handleViewProfile(result.id)}
                        >
                          View
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {result.location}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {result.experience}
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs bg-green-50 border-green-200 text-green-700"
                        >
                          {result.availability}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {result.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

