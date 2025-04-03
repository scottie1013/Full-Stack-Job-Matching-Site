"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Activity,
  Building,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Folder,
  HeartHandshake,
  Home,
  ListChecks,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Search",
    icon: Search,
    href: "/search",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/messages/1",
  },
  {
    title: "Events",
    icon: Activity,
    href: "/events",
  },
  {
    title: "Organizations",
    icon: Building,
    href: "/organizations",
  },
  {
    title: "Resume",
    icon: Folder,
    href: "/resume",
  },
  {
    title: "Candidates",
    icon: Users,
    href: "/candidates",
  },
  {
    title: "Referrals",
    icon: HeartHandshake,
    href: "/referrals",
  },
  {
    title: "Applications",
    icon: ListChecks,
    href: "/applications",
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/billing",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r bg-white transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-600">Activate!</span>
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="scrollbar-thin scrollbar-thumb-gray-300 flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex h-10 items-center gap-3 rounded-md px-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                pathname === item.href &&
                  "bg-gray-100 font-medium text-gray-900",
                isCollapsed && "justify-center px-0"
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-full bg-gray-200">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-600">
              U
            </span>
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-medium">User</div>
              <div className="text-xs text-gray-500">user@example.com</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 