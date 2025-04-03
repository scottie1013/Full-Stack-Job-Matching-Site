"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  LayoutDashboard,
  MessageSquare,
  HelpCircle,
  FileText,
  Users,
  Heart,
  DollarSign,
  Send,
  ChevronRight,
  UserCircle,
  Briefcase,
  CheckCircle,
  Award,
  Clipboard,
  Settings,
  MenuSquare,
} from "lucide-react";

// Group sidebar items by category for better organization
const sidebarItems = [
  {
    category: "Main",
    items: [
      { name: "Home", href: "/", icon: Home },
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Search", href: "/search", icon: Search },
      { name: "Profile", href: "/profile", icon: UserCircle },
    ]
  },
  {
    category: "Communication",
    items: [
      { name: "Messages", href: "/messages", icon: MessageSquare },
      { name: "Contact", href: "/contact", icon: Send },
      { name: "Feedback", href: "/feedback", icon: Award },
    ]
  },
  {
    category: "Career",
    items: [
      { name: "Onboarding", href: "/onboarding/welcome", icon: CheckCircle },
      { name: "Referrals", href: "/referral-management", icon: Users },
      { name: "Jobs", href: "/jobs", icon: Briefcase },
      { name: "Success Stories", href: "/success-stories", icon: Heart },
    ]
  },
  {
    category: "More",
    items: [
      { name: "Survey", href: "/survey", icon: Clipboard },
      { name: "Help", href: "/help", icon: HelpCircle },
      { name: "About", href: "/about", icon: FileText },
      { name: "Pricing", href: "/pricing", icon: DollarSign },
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle mouse events for the sidebar
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle showing the sidebar toggle button after a short delay on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navigation Toggle */}
      <div 
        className={cn(
          "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500",
          isVisible ? "opacity-100" : "opacity-0",
          isHovered ? "scale-0" : "scale-100"
        )}
        onMouseEnter={handleMouseEnter}
      >
        <div className="bg-purple-900/70 backdrop-blur-lg p-3 rounded-r-xl shadow-lg hover:bg-purple-800/80 transition-all cursor-pointer flex items-center gap-1">
          <MenuSquare className="w-5 h-5 text-white" />
          <span className="text-white/90 text-xs font-medium">Menu</span>
        </div>
      </div>

      {/* Popup Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 bottom-0 z-50 transition-all duration-300 h-full",
          isHovered 
            ? "translate-x-0 opacity-100 w-72 bg-gradient-to-br from-purple-900 to-indigo-900 shadow-2xl" 
            : "-translate-x-full opacity-0 w-0"
        )}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sidebar Header */}
        <div className="px-6 py-8 border-b border-purple-700/30">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </span>
            Activate!
          </h2>
          <p className="text-xs text-purple-200 mt-1">Navigation Menu</p>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
          {/* Sidebar Content - Categories and Links */}
          <div className="flex-1 flex flex-col gap-6 px-4">
            {sidebarItems.map((category, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <h3 className="text-xs uppercase text-purple-300 font-semibold px-3 mb-2">{category.category}</h3>
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-800/50 flex items-center justify-center">
                        <Icon className="h-4 w-4 flex-shrink-0" />
                      </div>
                      <span className="font-medium">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <div className="bg-purple-800/30 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs text-purple-200 mb-2">Need assistance?</p>
            <Link href="/help" className="text-white/90 hover:text-white text-sm flex items-center gap-2 font-medium">
              <HelpCircle className="w-4 h-4" />
              Visit our help center
            </Link>
          </div>
        </div>
      </div>

      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
} 