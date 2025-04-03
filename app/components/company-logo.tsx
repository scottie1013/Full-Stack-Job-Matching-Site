interface CompanyLogoProps {
  name: string;
  className?: string;
}

export function CompanyLogo({ name, className = "" }: CompanyLogoProps) {
  return (
    <div className={`flex items-center justify-center group hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="text-purple-200 font-medium text-sm group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors">
        {name}
      </div>
    </div>
  );
} 