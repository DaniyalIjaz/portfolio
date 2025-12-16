"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building scalable applications with modern frameworks and best practices",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful and intuitive user interfaces that delight users",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working with teams to deliver exceptional products on time",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
          I’m a passionate Frontend Web Developer with 1+ year of hands-on experience and 20+ completed projects. I enjoy transforming ideas into clean, responsive, and accessible user interfaces using Next.js, React.js and Tailwind CSS, while maintaining strong performance and SEO best practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`p-6 border-border hover:border-accent transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <skill.icon className="h-12 w-12 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
