import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { HomeIcon, PiggyBankIcon, TrendingUpIcon, HelpCircleIcon, UserIcon } from 'lucide-react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-purple-600 text-white p-4">
            <h1 className="text-2xl font-bold">BHIM Women</h1>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <nav className="bg-white border-t">
            <div className="flex justify-around p-2">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <HomeIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Button>
              </Link>
              <Link href="/savings-group">
                <Button variant="ghost" size="sm">
                  <PiggyBankIcon className="h-5 w-5" />
                  <span className="sr-only">Savings</span>
                </Button>
              </Link>
              <Link href="/financial-goals">
                <Button variant="ghost" size="sm">
                  <TrendingUpIcon className="h-5 w-5" />
                  <span className="sr-only">Goals</span>
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="ghost" size="sm">
                  <HelpCircleIcon className="h-5 w-5" />
                  <span className="sr-only">Support</span>
                </Button>
              </Link>
              <Link href="/onboarding">
                <Button variant="ghost" size="sm">
                  <UserIcon className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  )
}