import type { ReactNode } from "react"
import { MainNav } from "@/components/main-nav"

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container max-w-5xl mx-auto px-4 py-3">
          <MainNav />
        </div>
      </header>
      <main className="container max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

