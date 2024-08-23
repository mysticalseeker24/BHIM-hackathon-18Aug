'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { UsersIcon, PlusIcon, SendIcon, CheckIcon, XIcon } from 'lucide-react'

export function SavingsGroup() {
  const [view, setView] = useState('list')

  const GroupList = () => (
    <div className="space-y-4">
      <Button onClick={() => setView('create')} className="w-full">
        <PlusIcon className="mr-2 h-4 w-4" /> Create New Savings Group
      </Button>
      {['Family Savings', 'Business Fund', 'Education Fund'].map((group, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{group}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={[75, 50, 25][index]} className="h-2 mb-2" />
            <p className="text-sm">₹{[7500, 5000, 2500][index]} saved of ₹10,000 goal</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => setView('manage')}>
              Manage Group
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  const CreateGroup = () => (
    <Card>
      <CardHeader>
        <CardTitle>Create New Savings Group</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Group Name" />
        <Input placeholder="Number of Members" type="number" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Purpose of Savings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="emergency">Emergency</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Target Savings Goal" type="number" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => setView('invite')}>
          Create Group <UsersIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )

  const InviteMembers = () => (
    <Card>
      <CardHeader>
        <CardTitle>Invite Members</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Enter mobile number or email" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Assign Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Administrator</SelectItem>
            <SelectItem value="treasurer">Treasurer</SelectItem>
            <SelectItem value="member">Member</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex space-x-2">
          <Button className="flex-1">
            <SendIcon className="mr-2 h-4 w-4" /> WhatsApp
          </Button>
          <Button className="flex-1">
            <SendIcon className="mr-2 h-4 w-4" /> SMS
          </Button>
          <Button className="flex-1">
            <SendIcon className="mr-2 h-4 w-4" /> Email
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => setView('list')}>
          Finish Setup
        </Button>
      </CardFooter>
    </Card>
  )

  const ManageGroup = () => (
    <Card>
      <CardHeader>
        <CardTitle>Manage Group: Family Savings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={75} className="h-2 mb-2" />
        <p className="text-sm">₹7,500 saved of ₹10,000 goal</p>
        <div className="space-y-2">
          <p className="font-medium">Recent Activity</p>
          <div className="text-sm">Asha contributed ₹500</div>
          <div className="text-sm">Priya requested withdrawal of ₹200</div>
        </div>
        <Button className="w-full">Make Contribution</Button>
        <Button variant="outline" className="w-full">Request Withdrawal</Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="flex-1 mr-2">
          <CheckIcon className="mr-2 h-4 w-4" /> Approve
        </Button>
        <Button variant="outline" className="flex-1 ml-2">
          <XIcon className="mr-2 h-4 w-4" /> Deny
        </Button>
      </CardFooter>
    </Card>
  )

  const views = {
    list: GroupList,
    create: CreateGroup,
    invite: InviteMembers,
    manage: ManageGroup
  }

  const CurrentView = views[view as keyof typeof views]

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <CurrentView />
    </div>
  )
}