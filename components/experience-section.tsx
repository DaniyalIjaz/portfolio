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
      "Leading the development of enterprise applications using Next.js, TypeScript, and modern frontend practices. Contributing to scalable UI architecture and maintaining high code quality.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    period: "2022 — 2024",
    role: "React.js Frontend Developer",
    company: "Design Man Associates (Pvt) Ltd.",
    description:
      "Developed and maintained company websites while managing SEO and digital marketing strategies to enhance performance, search rankings, and overall online presence.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
  },
  {
    period: "2023",
    role: "React.js (Internship)",
    company: "Professional Practices",
    description:
      "Worked closely with designers and senior developers to build reusable React.js components for websites and landing pages, focusing on performance efficiency and a smooth user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="w-full max-w-4xl mx-auto">

        {/* SECTION HEADER */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            My professional journey building modern web applications and
            contributing to impactful digital products.
          </p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-5 sm:p-7 transition-all duration-700 border-border hover:border-accent ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* HEADER */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
