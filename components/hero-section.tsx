"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Mail, ArrowDown, Linkedin } from "lucide-react"
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-16 md:pt-0"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN — TEXT */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="font-bold leading-tight text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                MUHAMMAD DANIYAL IJAZ
              </h1>

                <div className="relative md:hidden flex justify-center items-center">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse" />

              {/* Image */}
              <div className=" relative rounded-full overflow-hidden border-4 border-border shadow-2xl
                w-56 h-56
                sm:w-64 sm:h-64
                md:w-80 md:h-80
                lg:w-96 lg:h-96
              ">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

              <p className="font-semibold text-accent text-lg sm:text-xl md:text-2xl">
                Next.js Frontend Web Developer
              </p>

              <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
                Hands-on experience building full lifecycle applications, with a
                focus on scalable UI architectures, multi-tenant SaaS systems,
                and production-ready web experiences.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="gap-2 cursor-pointer"
              >
                Get in touch
                <ArrowDown className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View work</a>
              </Button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/DaniyalIjaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/daniyalijazdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </a>
              </Button>

            

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="#contact"
                
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative hidden md:block">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse" />

              {/* Image */}
              <div className=" relative rounded-full overflow-hidden border-4 border-border shadow-2xl
                w-56 h-56
                sm:w-64 sm:h-64
                md:w-80 md:h-80
                lg:w-96 lg:h-96
              ">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
