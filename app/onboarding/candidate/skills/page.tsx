"use client";

import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const suggestedSkills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "Java", "C++", "AWS", "Docker", "Kubernetes",
  "SQL", "MongoDB", "GraphQL", "Git", "CI/CD",
  "Agile", "Scrum", "Project Management", "Team Leadership"
];

function SkillsSelectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for query parameters or sessionStorage data
    const parsedSkills = sessionStorage.getItem('parsedSkills');
    
    if (parsedSkills) {
      try {
        const skills = JSON.parse(parsedSkills);
        if (Array.isArray(skills)) {
          setSelectedSkills(skills);
          console.log("Skills loaded from session storage:", skills);
        }
      } catch (e) {
        console.error("Error parsing skills from session storage:", e);
      }
    } else {
      // If no parsed skills in session storage, check if we received them via API
      const checkForParsedData = async () => {
        try {
          const response = await fetch('/api/candidate-data');
          if (response.ok) {
            const data = await response.json();
            if (data.skills && Array.isArray(data.skills)) {
              setSelectedSkills(data.skills);
              // Store in session storage for future use
              sessionStorage.setItem('parsedSkills', JSON.stringify(data.skills));
              console.log("Skills loaded from API:", data.skills);
            }
          }
        } catch (error) {
          console.error("Error fetching candidate data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      
      checkForParsedData();
    }
    
    setIsLoading(false);
  }, []);

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSkillInput("");
  };

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save selected skills to session storage
    sessionStorage.setItem('candidateSkills', JSON.stringify(selectedSkills));
    
    // In a real app, you'd save this data to your backend
    console.log("Selected skills:", selectedSkills);
    router.push("/onboarding/candidate/preferences");
  };

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <p>Loading your skills...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-900">
              What are your skills?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (skillInput.trim()) {
                          handleAddSkill(skillInput.trim());
                        }
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      if (skillInput.trim()) {
                        handleAddSkill(skillInput.trim());
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      {skill} ×
                    </Badge>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Suggested Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSkills
                      .filter(skill => !selectedSkills.includes(skill))
                      .map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          onClick={() => handleAddSkill(skill)}
                        >
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-purple-900 hover:bg-purple-800"
                disabled={selectedSkills.length === 0}
              >
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default function SkillsSelection() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <p>Loading skills page...</p>
      </div>
    </div>}>
      <SkillsSelectionContent />
    </Suspense>
  );
} 