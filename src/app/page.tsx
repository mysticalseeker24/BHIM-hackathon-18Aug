import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Welcome to BHIM Women</h1>
      <p className="text-center">Empowering women through secure digital payments and group savings.</p>
      <div className="space-y-2">
        <Link href="/onboarding" className="block">
          <Button className="w-full">Get Started</Button>
        </Link>
        <Link href="/dashboard" className="block">
          <Button variant="outline" className="w-full">Login</Button>
        </Link>
      </div>
    </div>
  )
}