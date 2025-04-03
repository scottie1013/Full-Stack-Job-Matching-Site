"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Search",
      href: "/search",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: "Messages",
      href: "/messages",
    },
  ];

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl mr-6 text-purple-900">
          Activate!
        </Link>
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 