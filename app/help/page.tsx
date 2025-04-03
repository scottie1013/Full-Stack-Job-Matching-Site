import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MainNav } from "@/components/main-nav"

export default function HelpPage() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Start Onboarding' button on our homepage. You'll be guided through our simple registration process where you can set up your profile as either a job seeker or recruiter.",
        },
        {
          question: "What information do I need to provide during registration?",
          answer:
            "During registration, you'll need to provide basic information such as your name, email, and password. You'll also be asked to complete a brief assessment to help our AI better understand your skills and preferences.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent. You can review our privacy policy for more details.",
        },
      ],
    },
    {
      category: "Using the Platform",
      questions: [
        {
          question: "How does the AI matching work?",
          answer:
            "Our AI matching algorithm analyzes your skills, experience, preferences, and career goals to connect you with relevant opportunities or candidates. The more information you provide and the more you interact with the platform, the better our matches become.",
        },
        {
          question: "How do I request a referral?",
          answer:
            "To request a referral, navigate to a connection's profile and click the 'Request Referral' button. You'll be prompted to specify which position you're interested in and provide a brief message explaining why you're a good fit.",
        },
        {
          question: "Can I message someone without requesting a referral?",
          answer:
            "Yes, you can send messages to your connections without requesting a referral. This is a great way to build relationships and learn more about companies or roles you're interested in.",
        },
      ],
    },
    {
      category: "Account Management",
      questions: [
        {
          question: "How do I update my profile?",
          answer:
            "To update your profile, click on your profile picture in the top right corner and select 'Edit Profile'. From there, you can update your information, skills, experience, and preferences.",
        },
        {
          question: "Can I change my account type from job seeker to recruiter or vice versa?",
          answer:
            "Yes, you can change your account type by going to 'Account Settings' and selecting 'Change Account Type'. Note that changing your account type will require you to complete additional profile information relevant to your new role.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to 'Account Settings', scroll to the bottom, and click 'Delete Account'. Please note that this action is permanent and will remove all your data from our platform.",
        },
      ],
    },
    {
      category: "Billing and Subscriptions",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for enterprise customers, we can arrange invoicing.",
        },
        {
          question: "How do I upgrade my subscription?",
          answer:
            "To upgrade your subscription, go to 'Account Settings' and select 'Subscription'. From there, you can view available plans and select the one that best fits your needs.",
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer:
            "Yes, we offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.",
        },
      ],
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-900">Help Center</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Find answers to common questions and learn how to get the most out of Activate!
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Input placeholder="Search for answers..." className="pl-10" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 shrink-0">
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
                    className="text-purple-900"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">For Job Seekers</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to create a standout profile, request referrals, and maximize your job search success.
                  </p>
                  <Button variant="outline" size="sm">
                    View Guides
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 shrink-0">
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
                    className="text-purple-900"
                  >
                    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                    <path d="M12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">For Recruiters</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how to find top talent, manage referrals, and streamline your hiring process.
                  </p>
                  <Button variant="outline" size="sm">
                    View Guides
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          {faqCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">{category.category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
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
                  className="text-purple-900"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">User Guides</h3>
              <p className="text-gray-600 mb-4">
                Detailed guides on how to use all features of the Activate! platform.
              </p>
              <Button variant="outline" className="w-full">
                Browse Guides
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
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
                  className="text-purple-900"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step video tutorials on how to get the most out of Activate!
              </p>
              <Button variant="outline" className="w-full">
                Watch Videos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
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
                  className="text-purple-900"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Security & Privacy</h3>
              <p className="text-gray-600 mb-4">Learn about how we protect your data and maintain your privacy.</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our support team is available to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-purple-900 hover:bg-gray-100">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-purple-800">
              <Link href="/feedback">Submit Feedback</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

