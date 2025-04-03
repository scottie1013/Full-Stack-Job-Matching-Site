import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic features for job seekers just getting started",
      features: [
        "AI-powered job matching",
        "Limited profile visibility",
        "Basic search functionality",
        "Up to 3 job applications per month",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "per month",
      description: "Everything you need for serious job seekers",
      features: [
        "All Free features",
        "Priority matching algorithm",
        "Unlimited job applications",
        "Direct messaging with recruiters",
        "Referral requests",
        "Application tracking",
        "Priority support",
      ],
      cta: "Start Pro Plan",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced features for companies and recruitment teams",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom AI matching parameters",
        "Advanced analytics dashboard",
        "API access",
        "Bulk candidate management",
        "White-label options",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
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
          <h1 className="text-4xl font-bold mb-4 text-purple-900">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Choose the plan that's right for your job search or recruitment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-purple-500 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-2">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-purple-900 hover:bg-purple-800" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/onboarding/welcome"}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg border p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Is there a free trial for paid plans?",
                answer:
                  "Yes, we offer a 14-day free trial for our Pro plan so you can experience all the premium features before committing.",
              },
              {
                question: "How does billing work?",
                answer:
                  "We bill monthly or annually, depending on your preference. Annual plans come with a 20% discount.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing.",
              },
              {
                question: "Can I cancel my subscription?",
                answer:
                  "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period.",
              },
              {
                question: "Do you offer discounts for students or non-profits?",
                answer:
                  "Yes, we offer special pricing for students, educational institutions, and non-profit organizations. Please contact our support team for details.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the perfect plan for your needs. Reach out to us for personalized
            assistance.
          </p>
          <Button asChild className="bg-white text-purple-900 hover:bg-gray-100">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

