"use client"

import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"
import { usePathname } from "next/navigation"

const mainNavItems = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

const secondaryNavItems = [
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/register",
    label: "Register",
  },
]

export function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(path)
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <div className="md:hidden mr-2">
          <MobileNav />
        </div>
        <Link href="/" className="font-bold text-xl text-purple-900">
          Activate!
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium ${isActive(item.href) ? "font-bold" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        {secondaryNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium ${isActive(item.href) ? "font-bold" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

