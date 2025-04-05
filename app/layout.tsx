import type { Metadata } from 'next'
import './globals.css'
import { AppNavbar } from './components/app-navbar'

export const metadata: Metadata = {
  title: 'Activate',
  description: 'AI-powered HR onboarding platform',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppNavbar />
        {children}
      </body>
    </html>
  )
}
