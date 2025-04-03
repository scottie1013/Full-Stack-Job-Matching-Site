import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className={index === 0 ? "inline-flex items-center" : ""}>
            {index > 0 && (
              <div className="flex items-center">
                <span className="mx-2">&gt;</span>
              </div>
            )}
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href} className="hover:text-purple-900">
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? "text-gray-700" : ""}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

