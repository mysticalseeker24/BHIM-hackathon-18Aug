'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { TrendingUpIcon, AwardIcon } from 'lucide-react'

export default function Dashboard() {
  const spendingData = [
    { name: 'Groceries', value: 30 },
    { name: 'Utilities', value: 20 },
    { name: 'Education', value: 25 },
    { name: 'Savings', value: 15 },
    { name: 'Others', value: 10 },
  ]

  const savingsData = [
    { name: 'Jan', amount: 1000 },
    { name: 'Feb', amount: 1500 },
    { name: 'Mar', amount: 2000 },
    { name: 'Apr', amount: 2500 },
    { name: 'May', amount: 3000 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Financial Health Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Total Savings</span>
            <span className="font-bold">₹15,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Group Contributions</span>
            <span className="font-bold">₹5,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Active Investments</span>
            <span className="font-bold">₹10,000</span>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-sm text-muted-foreground">75% of your monthly savings goal achieved</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Spending Habits Analysis</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={spendingData}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {spendingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </CardContent>
        <CardFooter>
          <div className="w-full flex flex-wrap justify-center gap-2">
            {spendingData.map((entry, index) => (
              <div key={entry.name} className="flex items-center">
                <div className="w-3 h-3 mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span className="text-xs">{entry.name}</span>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Savings Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart width={300} height={200} data={savingsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personalized Tips & Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">💡 Consider increasing your emergency fund contributions.</p>
          <p className="text-sm">💡 You're spending less on groceries this month - great job!</p>
          <p className="text-sm">💡 Have you thought about starting a retirement savings plan?</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <TrendingUpIcon className="mr-2 h-4 w-4" /> Get More Insights
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Achievements & Badges</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-around">
          <div className="text-center">
            <AwardIcon className="h-12 w-12 text-yellow-500 mx-auto" />
            <p className="text-sm mt-2">Savings Superstar</p>
          </div>
          <div className="text-center">
            <AwardIcon className="h-12 w-12 text-purple-500 mx-auto" />
            <p className="text-sm mt-2">Group Leader</p>
          </div>
          <div className="text-center">
            <AwardIcon className="h-12 w-12 text-green-500 mx-auto" />
            <p className="text-sm mt-2">Smart Investor</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Achievements</Button>
        </CardFooter>
      </Card>
    </div>
  )
}