"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to an API)
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">Contact</h2>
        <p className="text-center mb-8 text-lg">Interested in working together? Let&apos;s talk</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="grid gap-4">
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Contact me</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

