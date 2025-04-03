"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Collection of local stock images
const stockImages = {
  profile: "/images/profile.jpg",
  company: "/images/company.jpg",
  office: "/images/office.jpg",
  meeting: "/images/meeting.jpg",
  workspace: "/images/workspace.jpg",
  team: "/images/team.jpg",
  success: "/images/success.jpg",
  collaboration: "/images/collaboration.jpg",
  technology: "/images/technology.jpg",
  default: "/images/default.jpg",
} as const;

interface StockImageProps {
  type?: keyof typeof stockImages;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function StockImage({
  type = "default",
  alt,
  width,
  height,
  className,
  priority = false,
}: StockImageProps) {
  // Fallback to a placeholder image if the image doesn't exist
  const imageSrc = stockImages[type] || "/images/default.jpg";
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width || 800}
        height={height || 400}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
} 