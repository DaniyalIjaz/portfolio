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
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-card/50"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div
          className={`mb-12 sm:mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl">
            About Me
          </h2>

          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            I’m a passionate Frontend Web Developer with 1+ year of hands-on
            experience and 20+ completed projects. I enjoy transforming ideas
            into clean, responsive, and accessible user interfaces using
            Next.js, React.js, and Tailwind CSS, while maintaining strong
            performance and SEO best practices.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`p-6 sm:p-7 border-border hover:border-accent transition-all duration-500 hover:scale-[1.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <skill.icon className="mb-4 h-10 w-10 sm:h-12 sm:w-12 text-accent" />

              <h3 className="mb-2 text-lg sm:text-xl font-semibold">
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
