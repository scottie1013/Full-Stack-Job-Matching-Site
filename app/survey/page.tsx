import { MainNav } from "@/components/main-nav"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SurveyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>

      <div className="container max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Referral Management", href: "/referral-management" },
            { label: "Survey" },
          ]}
        />
      </div>
    </div>
  )
}

