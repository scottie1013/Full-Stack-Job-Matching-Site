import { Sidebar } from '../components/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen lg:pl-64 pt-24">{children}</main>
    </>
  )
} 