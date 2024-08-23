'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircleIcon, PhoneIcon, HelpCircleIcon, TicketIcon } from 'lucide-react'

export default function SupportCenter() {
  const [activeView, setActiveView] = useState('main')

  const MainView = () => (
    <div className="space-y-4">
      <Button className="w-full" onClick={() => setActiveView('chat')}>
        <MessageCircleIcon className="mr-2 h-4 w-4" /> Start Live Chat
      </Button>
      <Button className="w-full">
        <PhoneIcon className="mr-2 h-4 w-4" /> Call Support
      </Button>
      <Button className="w-full" onClick={() => setActiveView('faq')}>
        <HelpCircleIcon className="mr-2 h-4 w-4" /> View FAQs
      </Button>
      <Button className="w-full" onClick={() => setActiveView('tickets')}>
        <TicketIcon className="mr-2 h-4 w-4" /> Manage Support Tickets
      </Button>
    </div>
  )

  const ChatView = () => (
    <Card>
      <CardHeader>
        <CardTitle>Live Chat Support</CardTitle>
      </CardHeader>
      <CardContent className="h-64 overflow-y-auto border-y">
        <div className="space-y-4">
          <div className="bg-muted p-2 rounded-lg max-w-[80%]">
            Hello! How can I assist you today?
          </div>
          <div className="bg-primary text-primary-foreground p-2 rounded-lg max-w-[80%] ml-auto">
            I'm having trouble with a group savings withdrawal.
          </div>
          <div className="bg-muted p-2 rounded-lg max-w-[80%]">
            I understand. Can you please provide more details about the issue?
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Input placeholder="Type your message..." className="flex-grow" />
        <Button>Send</Button>
      </CardFooter>
    </Card>
  )

  const FAQView = () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I create a savings group?</AccordionTrigger>
        <AccordionContent>
          To create a savings group, go to the Group Savings tab and click on "Create New Group". Follow the prompts to set up your group, invite members, and set savings goals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I withdraw money from my account?</AccordionTrigger>
        <AccordionContent>
          To withdraw money, go to your account dashboard and click on "Withdraw Funds". Select your linked bank account and enter the amount you wish to withdraw. The process typically takes 1-2 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What should I do if I forget my password?</AccordionTrigger>
        <AccordionContent>
          If you forget your password, click on the "Forgot Password" link on the login page. You'll be prompted to enter your registered email address or phone number. We'll send you instructions to reset your password.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )

  const TicketsView = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Ticket #1234</span>
            <span className="text-yellow-500">In Progress</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Ticket #5678</span>
            <span className="text-green-500">Resolved</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <TicketIcon className="mr-2 h-4 w-4" /> Create New Ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  )

  const views = {
    main: MainView,
    chat: ChatView,
    faq: FAQView,
    tickets: TicketsView
  }

  const CurrentView = views[activeView]

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {activeView !== 'main' && (
        <Button variant="outline" onClick={() => setActiveView('main')}>
          Back to Support Home
        </Button>
      )}
      <CurrentView />
    </div>
  )
}