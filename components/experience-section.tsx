"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — Present",
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading the development of enterprise applications using Next.js, TypeScript, and modern cloud technologies. Mentoring junior developers and establishing best practices.",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "AWS"],
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Digital Solutions Co.",
    description:
      "Built responsive web applications and design systems. Collaborated with designers to create pixel-perfect implementations of complex UI designs.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Figma"],
  },
  {
    period: "2020 — 2022",
    role: "Web Developer",
    company: "Creative Agency",
    description:
      "Developed custom websites and landing pages for various clients. Focused on performance optimization and user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey building products and leading teams</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 border-border hover:border-accent transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
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
