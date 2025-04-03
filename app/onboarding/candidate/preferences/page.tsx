"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Preferences() {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    jobType: "",
    location: "",
    salary: "",
    remote: false,
    hybrid: false,
    onsite: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this data to your backend
    console.log("Preferences submitted:", preferences);
    router.push("/search");
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-900">
              Set Your Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="jobType">Desired Role</Label>
                <Select
                  onValueChange={(value) =>
                    setPreferences({ ...preferences, jobType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select desired role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Input
                  id="location"
                  placeholder="e.g. San Francisco, CA"
                  value={preferences.location}
                  onChange={(e) =>
                    setPreferences({ ...preferences, location: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Expected Salary Range</Label>
                <Select
                  onValueChange={(value) =>
                    setPreferences({ ...preferences, salary: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select salary range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">$0 - $50,000</SelectItem>
                    <SelectItem value="50-100">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100-150">$100,000 - $150,000</SelectItem>
                    <SelectItem value="150-200">$150,000 - $200,000</SelectItem>
                    <SelectItem value="200+">$200,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Work Environment Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remote"
                      checked={preferences.remote}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, remote: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="remote"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remote
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hybrid"
                      checked={preferences.hybrid}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, hybrid: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="hybrid"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Hybrid
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="onsite"
                      checked={preferences.onsite}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, onsite: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="onsite"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      On-site
                    </label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-purple-900 hover:bg-purple-800">
                Complete & Start Searching
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 