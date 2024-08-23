'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRightIcon, UserIcon, LockIcon, LanguagesIcon } from 'lucide-react'

export default function Onboarding() {
  const [step, setStep] = useState(0)

  const IntroScreen = ({ onNext }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome to BHIM Women</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Empowering women through secure digital payments and group savings.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Easy peer-to-peer payments</li>
          <li>Create and manage savings groups</li>
          <li>24/7 support helpline</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={onNext} className="w-full">
          Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )

  const RegistrationScreen = ({ onNext }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Full Name" />
        <Input placeholder="Mobile Number" type="tel" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Referral Code (Optional)" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button onClick={onNext} className="w-full">
          Next <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )

  const KYCScreen = ({ onNext }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Verify Your Identity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full">
          <UserIcon className="mr-2 h-4 w-4" /> Upload Aadhaar Card
        </Button>
        <Button className="w-full">
          <UserIcon className="mr-2 h-4 w-4" /> Upload PAN Card
        </Button>
        <div className="space-y-2">
          <p className="text-sm font-medium">Set up Two-Factor Authentication</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select 2FA Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="app">Authenticator App</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onNext} className="w-full">
          Verify & Continue <LockIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )

  const PersonalizationScreen = ({ onNext }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personalize Your Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="tamil">Tamil</SelectItem>
            <SelectItem value="telugu">Telugu</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="north">North India</SelectItem>
            <SelectItem value="south">South India</SelectItem>
            <SelectItem value="east">East India</SelectItem>
            <SelectItem value="west">West India</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm font-medium">Select Your Financial Goals</p>
        <div className="space-y-2">
          <Button variant="outline" className="w-full">Business Growth</Button>
          <Button variant="outline" className="w-full">Education Savings</Button>
          <Button variant="outline" className="w-full">Emergency Fund</Button>
          <Button variant="outline" className="w-full">Retirement Planning</Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onNext} className="w-full">
          Complete Setup <LanguagesIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )

  const steps = [IntroScreen, RegistrationScreen, KYCScreen, PersonalizationScreen]

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {steps[step]({ onNext: () => setStep(step + 1) })}
    </div>
  )
}