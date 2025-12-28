"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — 2025",
    role: "Next.js Frontend Developer",
    company: "Metaminds",
    description:
      "Leading the development of enterprise applications using Next.js, TypeScript, and modern frontend practices. Building scalable UI architecture with a strong focus on performance and code quality.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2022 — 2024",
    role: "React.js Frontend Developer",
    company: "Design Man Associates (Pvt) Ltd.",
    description:
      "Developed and maintained company websites while managing SEO and digital strategies to improve performance, rankings, and overall online presence.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
  },
  {
    period: "2023",
    role: "React.js Intern",
    company: "Professional Practices",
    description:
      "Worked closely with senior developers and designers to build reusable React components, ensuring performance efficiency and smooth user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-32 left-0 w-72 h-72 bg-accent/20 blur-3xl rounded-full dark:bg-accent/10" />
      <div className="absolute bottom-32 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full dark:bg-accent/5" />

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div
          className={`mb-14 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Experience
          </span>

          <h2 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl">
            Professional Journey
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            My experience building modern, scalable web applications and
            collaborating on impactful digital products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-[18px] top-0 bottom-0 w-px bg-border dark:bg-border/60" />

          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`
                group relative sm:pl-12 p-6 sm:p-8 rounded-2xl
                bg-gradient-to-br from-background/90 via-background/70 to-background/90
                dark:from-background/80 dark:via-background/60 dark:to-background/80
                backdrop-blur-xl
                border border-border/60 dark:border-border/50
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-accent/60
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-accent/5 dark:bg-accent/10" />

              {/* Timeline dot */}
              <span className="hidden sm:block absolute left-[10px] top-8 w-3 h-3 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--accent)/0.15)]" />

              {/* Period badge */}
              <span className="absolute top-5 right-5 text-[11px] sm:text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                {exp.period}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight group-hover:text-accent transition">
                  {exp.role}
                </h3>

                <p className="mt-1 text-sm sm:text-base font-medium text-muted-foreground">
                  {exp.company}
                </p>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="
                        rounded-full px-3 py-1 text-xs sm:text-sm
                        bg-muted/60 dark:bg-muted/40
                        backdrop-blur
                        transition group-hover:bg-accent/10
                      "
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
