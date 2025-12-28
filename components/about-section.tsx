"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building scalable, maintainable interfaces using Next.js, React, and modern frontend patterns.",
  },
  {
    icon: Palette,
    title: "UI & UX Design",
    description:
      "Designing clean, intuitive, and responsive user experiences with strong attention to detail.",
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    description:
      "Optimizing speed, accessibility, and SEO to deliver fast, production-ready web applications.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Collaborating with designers, backend developers, and stakeholders to ship quality products.",
  },
]

export function AboutSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative overflow-hidden
        py-16 sm:py-20 md:py-28 lg:py-32
        px-4 sm:px-6 lg:px-12
      "
    >
      {/* Floating accents (desktop only) */}
      <div className="hidden lg:block absolute top-48 left-12 w-40 h-40 bg-accent/15 blur-3xl rounded-full" />
      <div className="hidden lg:block absolute bottom-24 right-12 w-52 h-52 bg-accent/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className={`
            mb-12 sm:mb-16 md:mb-20 text-center
            transition-all duration-500 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="w-2 h-2 bg-accent rounded-full" />
            About Me
          </span>

          <h2 className="
            font-bold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            mb-4
          ">
            Crafting digital experiences
            <br className="hidden sm:block" />
            with code & creativity
          </h2>

          <p className="
            mx-auto max-w-3xl
            text-sm sm:text-base md:text-lg
            text-muted-foreground
            leading-relaxed
          ">
            I’m a Frontend Web Developer with hands-on experience building
            production-ready interfaces and SaaS platforms. I focus on writing
            clean, scalable code while delivering polished UI experiences using
            <span className="text-accent font-medium">
              {" "}Next.js, React, and Tailwind CSS
            </span>.  
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`
                group relative p-6 sm:p-7
                bg-background/70 backdrop-blur
                border border-border/60
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-xl hover:border-accent/50
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              {/* Icon */}
              <div className="
                mb-5 inline-flex items-center justify-center
                w-12 h-12 rounded-xl
                bg-accent/15 text-accent
                transition-transform duration-300
                group-hover:scale-110
              ">
                <skill.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-lg sm:text-xl font-semibold">
                {skill.title}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
