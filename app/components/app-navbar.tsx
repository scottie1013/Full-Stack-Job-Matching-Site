"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ClipboardList, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

// Define types for our navigation items
interface NavItem {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export function AppNavbar() {
  const pathname = usePathname()
  
  // Skip navigation only on onboarding pages
  if (pathname.startsWith('/onboarding')) {
    return null
  }

  // Display different navigation based on whether we're on the landing page
  const isLandingPage = pathname === "/"
  
  // Dashboard navigation items
  const dashboardNavItems: NavItem[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Request Tracking",
      href: "/dashboard/tracking",
      icon: ClipboardList,
    },
    {
      name: "Success Stories",
      href: "/success-stories",
      icon: Heart,
    },
  ]

  // Landing page navigation items
  const landingNavItems: NavItem[] = [
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  // Auth navigation items
  const authNavItems: NavItem[] = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
  ]

  // Select the appropriate navigation items
  const navItems = isLandingPage ? landingNavItems : dashboardNavItems

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-purple-900 flex items-center gap-2 mr-8">
            Activate!
          </Link>
          
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = 
                (item.href === '/' && pathname === '/') || 
                (item.href !== '/' && pathname.startsWith(item.href))
              
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={cn(
                    "text-gray-700 hover:text-purple-900 font-medium",
                    isActive ? "text-purple-900" : "",
                    !isLandingPage ? "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors" : ""
                  )}
                >
                  {Icon && !isLandingPage && (
                    <Icon className={cn(
                      "w-4 h-4",
                      isActive ? "text-purple-700" : "text-gray-500"
                    )} />
                  )}
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {authNavItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-gray-700 hover:text-purple-900 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 