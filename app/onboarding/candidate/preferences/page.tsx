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
    alumniNetwork: [] as string[],
    companySize: "",
    industry: "",
    referralOpportunities: true,
    relocationWilling: false,
    travelWilling: false,
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

              <div className="space-y-2">
                <Label htmlFor="industry">Preferred Industry</Label>
                <Select
                  onValueChange={(value) =>
                    setPreferences({ ...preferences, industry: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companySize">Preferred Company Size</Label>
                <Select
                  onValueChange={(value) =>
                    setPreferences({ ...preferences, companySize: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                    <SelectItem value="small">Small (51-200 employees)</SelectItem>
                    <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
                    <SelectItem value="large">Large (1001-5000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (5000+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Alumni Network</Label>
                <p className="text-sm text-gray-500 mb-2">Select schools or companies where you have alumni connections</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alumni-harvard"
                      checked={preferences.alumniNetwork.includes('harvard')}
                      onCheckedChange={(checked) => {
                        const newNetwork = checked 
                          ? [...preferences.alumniNetwork, 'harvard']
                          : preferences.alumniNetwork.filter(n => n !== 'harvard');
                        setPreferences({ ...preferences, alumniNetwork: newNetwork });
                      }}
                    />
                    <label htmlFor="alumni-harvard" className="text-sm">Harvard University</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alumni-stanford"
                      checked={preferences.alumniNetwork.includes('stanford')}
                      onCheckedChange={(checked) => {
                        const newNetwork = checked 
                          ? [...preferences.alumniNetwork, 'stanford']
                          : preferences.alumniNetwork.filter(n => n !== 'stanford');
                        setPreferences({ ...preferences, alumniNetwork: newNetwork });
                      }}
                    />
                    <label htmlFor="alumni-stanford" className="text-sm">Stanford University</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alumni-mit"
                      checked={preferences.alumniNetwork.includes('mit')}
                      onCheckedChange={(checked) => {
                        const newNetwork = checked 
                          ? [...preferences.alumniNetwork, 'mit']
                          : preferences.alumniNetwork.filter(n => n !== 'mit');
                        setPreferences({ ...preferences, alumniNetwork: newNetwork });
                      }}
                    />
                    <label htmlFor="alumni-mit" className="text-sm">MIT</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alumni-google"
                      checked={preferences.alumniNetwork.includes('google')}
                      onCheckedChange={(checked) => {
                        const newNetwork = checked 
                          ? [...preferences.alumniNetwork, 'google']
                          : preferences.alumniNetwork.filter(n => n !== 'google');
                        setPreferences({ ...preferences, alumniNetwork: newNetwork });
                      }}
                    />
                    <label htmlFor="alumni-google" className="text-sm">Google</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alumni-amazon"
                      checked={preferences.alumniNetwork.includes('amazon')}
                      onCheckedChange={(checked) => {
                        const newNetwork = checked 
                          ? [...preferences.alumniNetwork, 'amazon']
                          : preferences.alumniNetwork.filter(n => n !== 'amazon');
                        setPreferences({ ...preferences, alumniNetwork: newNetwork });
                      }}
                    />
                    <label htmlFor="alumni-amazon" className="text-sm">Amazon</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alumni-meta"
                      checked={preferences.alumniNetwork.includes('meta')}
                      onCheckedChange={(checked) => {
                        const newNetwork = checked 
                          ? [...preferences.alumniNetwork, 'meta']
                          : preferences.alumniNetwork.filter(n => n !== 'meta');
                        setPreferences({ ...preferences, alumniNetwork: newNetwork });
                      }}
                    />
                    <label htmlFor="alumni-meta" className="text-sm">Meta</label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Additional Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="referrals"
                      checked={preferences.referralOpportunities}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, referralOpportunities: checked as boolean })
                      }
                    />
                    <label htmlFor="referrals" className="text-sm">
                      Prioritize companies with referral opportunities
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="relocation"
                      checked={preferences.relocationWilling}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, relocationWilling: checked as boolean })
                      }
                    />
                    <label htmlFor="relocation" className="text-sm">
                      Willing to relocate for the right opportunity
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="travel"
                      checked={preferences.travelWilling}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, travelWilling: checked as boolean })
                      }
                    />
                    <label htmlFor="travel" className="text-sm">
                      Willing to travel up to 25% of the time
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