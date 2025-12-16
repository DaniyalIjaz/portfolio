"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                MUHAMMAD DANIYAL IJAZ
              </h1>
              <p className="text-xl sm:text-2xl text-accent font-bold text-pretty">
            Next.js Frontend Web Developer
              </p>
              <p className="text-md sm:text-xl text-muted-foreground text-pretty">
            Hands-on experience building full lifecycle applications, with a focus on scalable UI architectures, multi-tenant SaaS systems, and production
ready web experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="gap-2 cursor-pointer">
                Get in touch
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View work</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/DaniyalIjaz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              {/* <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button> */}
<Button variant="ghost" size="icon" asChild>
  <a
    href="mailto:daniyalijaz922@gmail.com"
    onClick={(e) => {
      e.preventDefault();
      window.open(
        "https://mail.google.com/mail/?view=cm&to=daniyalijaz922@gmail.com",
        "_blank"
      );
    }}
  >
    <Mail className="h-5 w-5" />
    <span className="sr-only">Email</span>
  </a>
</Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <Image src="/images/profile.jpg" alt="Profile picture" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
