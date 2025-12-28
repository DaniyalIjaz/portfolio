

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* GREEN OVERLAY BACKGROUND */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/20 via-background to-background" /> */}

      {/* Floating accents */}
      <div className="absolute top-24 left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-10 w-56 h-56 bg-accent/15 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-24 pt-24 lg:pt-0">

        {/* IMAGE */}
        <div
          className={`relative flex justify-center lg:justify-start transition-all duration-1000 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Halo */}
          <div className="absolute inset-0 bg-accent/25 blur-3xl rounded-full scale-110" />

          <Image
            src="/images/profile.jpeg"
            alt="Muhammad Daniyal Ijaz"
            priority
            width={480}
            height={480}
            className="
              relative z-10 object-contain
              rounded-[28%]
              w-60 h-60
              sm:w-60 sm:h-60
              md:w-80 md:h-80
              lg:w-[460px] lg:h-[460px]
            "
          />
        </div>

        {/* CONTENT */}
        <div
          className={`space-y-6 text-center lg:text-left transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Label */}
          <span className="md:inline-flex hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Frontend Web Developer
          </span>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
            MUHAMMAD <br className="hidden sm:block" />
            <span className="relative inline-block">
              DANIYAL IJAZ
              <span className="absolute -bottom-1 left-0 h-[1px] w-full md:w-1/3  bg-accent rounded-full" />
            </span>
            
          </h1>

            <span className="inline-flex md:hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Frontend Web Developer
          </span>

          {/* Role */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            Building elegant, scalable interfaces with{" "}
            <span className="text-accent font-semibold">Next.js</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
            I specialize in crafting high-performance frontend experiences with
            clean architecture, smooth animations, and real-world SaaS impact.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 ">
            <Button size="lg" className="gap-2 cursor-pointer">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-5 pt-6">
            {[
              { icon: Github, href: "https://github.com/DaniyalIjaz" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/daniyalijazdev/" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="text-muted-foreground hover:text-accent transition transform hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
