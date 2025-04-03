"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const suggestedSkills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "Java", "C++", "AWS", "Docker", "Kubernetes",
  "SQL", "MongoDB", "GraphQL", "Git", "CI/CD",
  "Agile", "Scrum", "Project Management", "Team Leadership"
];

export default function SkillsSelection() {
  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

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
    // In a real app, you'd save this data to your backend
    console.log("Selected skills:", selectedSkills);
    router.push("/onboarding/candidate/preferences");
  };

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
                    {suggestedSkills.map((skill) => (
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