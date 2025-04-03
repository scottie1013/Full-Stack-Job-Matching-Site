"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Collection of high-quality stock images from Unsplash
const stockImages = {
  profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  company: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
  meeting: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop",
  workspace: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=400&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  success: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  collaboration: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
  technology: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  default: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&h=400&fit=crop",
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
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={stockImages[type]}
        alt={alt}
        width={width || 800}
        height={height || 400}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
} 