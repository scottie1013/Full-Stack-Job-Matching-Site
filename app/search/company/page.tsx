"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { MainNav } from "@/components/main-nav"

// Mock data for Microsoft candidates
const microsoftCandidatesData = [
  {
    id: 1,
    name: "Greg",
    position: "Engineering Manager",
    company: "Microsoft",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Allison",
    position: "VP DevRel",
    company: "Microsoft",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Jason",
    position: "Senior SDE",
    company: "Microsoft",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Owen",
    position: "Systems Engineer",
    company: "Microsoft",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function CompanySearchPage() {
  const [searchQuery, setSearchQuery] = useState("Microsoft")
  const [candidates, setCandidates] = useState(microsoftCandidatesData)
  const [experienceLevel, setExperienceLevel] = useState("all")
  const [location, setLocation] = useState("all")
  const [relevanceValue, setRelevanceValue] = useState([75])
  const [activeFilters, setActiveFilters] = useState<string[]>(["Product", "Design", "Engineering"])

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left sidebar with filters */}
          <div className="space-y-6">
            <div>
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="nyc">New York</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Seniority</label>
              <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Relevance</label>
                <span className="text-sm text-gray-500">{relevanceValue[0]}%</span>
              </div>
              <Slider defaultValue={[75]} max={100} step={1} value={relevanceValue} onValueChange={setRelevanceValue} />
            </div>
          </div>

          {/* Main content area */}
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Product", "Design", "Engineering", "Sales"].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilters.includes(filter) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(filter)}
                  className={activeFilters.includes(filter) ? "bg-purple-900 hover:bg-purple-800" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="bg-white rounded-md border p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={candidate.avatar || "/placeholder.svg"}
                        alt={candidate.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{candidate.name}</h3>
                      <p className="text-sm text-gray-500">
                        {candidate.position}, {candidate.company}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="bg-purple-100 text-purple-900 hover:bg-purple-100">
                          View
                        </Badge>
                        <Badge variant="outline" className="bg-purple-100 text-purple-900 hover:bg-purple-100">
                          Connect
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bookmark"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  )
}

