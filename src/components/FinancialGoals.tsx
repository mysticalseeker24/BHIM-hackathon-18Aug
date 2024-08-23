'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { PlusIcon, TrendingUpIcon, BarChartIcon, PiggyBankIcon } from 'lucide-react'

export default function FinancialGoals() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Set Financial Goal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Goal Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">Child's Education</SelectItem>
              <SelectItem value="business">Business Setup</SelectItem>
              <SelectItem value="emergency">Emergency Fund</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Target Amount" type="number" />
          <Input placeholder="Timeline (in months)" type="number" />
          <Input placeholder="Monthly Contribution" type="number" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <PlusIcon className="mr-2 h-4 w-4" /> Set Goal
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Investment Suggestions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Mutual Fund XYZ</span>
              <span className="text-green-500">+12% p.a.</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground">Moderate Risk</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Gold Savings</span>
              <span className="text-yellow-500">+8% p.a.</span>
            </div>
            <Progress value={50} className="h-2" />
            <p className="text-xs text-muted-foreground">Low Risk</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <TrendingUpIcon className="mr-2 h-4 w-4" /> View All Options
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Goal Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium">Child's Education Fund</p>
            <Progress value={30} className="h-2" />
            <p className="text-sm">₹30,000 of ₹100,000 goal</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <BarChartIcon className="mr-2 h-4 w-4" /> View Details
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Automatic Investment Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Investment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mutual">Mutual Fund XYZ</SelectItem>
              <SelectItem value="gold">Gold Savings</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Monthly Amount" type="number" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <PiggyBankIcon className="mr-2 h-4 w-4" /> Set Up Auto-Invest
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}