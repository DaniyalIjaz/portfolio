



"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "FLUORA | EVENT MANAGEMENT WEBSITE",
    description:
      "Fluora is a full-stack event management platform with secure role-based access, real-time workflows, and responsive animated UI.",
    image: "/images/fluora.png",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
    liveUrl: "",
    githubUrl: "https://github.com/DaniyalIjaz/fluora",
  },
  {
    title: "ASTRO VISTAAR | ASTROLOGY & OCCULT COURSES WEBSITE",
    description:
      "Astro Vistaar features smoke-effect preloader, parallax scrolling, animated route transitions, and custom animated cursor.",
    image: "/images/astro.png",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://astrovistaar.com/",
    githubUrl: "",
  },
  {
    title: "XOTEK | SOFTWARE COMPANY PORTFOLIO",
    description:
      "Xotek has clean modern UI, smooth page transitions, responsive layouts, and subtle micro-interactions.",
    image: "/images/xotek.png",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://xotek.co/",
    githubUrl: "https://github.com/Mahid1856502/xotek",
  },
  {
    title: "FINTECH BUSSINESS ADVISORS | BOOKKEEPING SERVICES WEBSITE",
    description:
      "Fintech Business Advisors website emphasizes trust, clarity, and seamless navigation for financial services.",
    image: "/images/fintech.png",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://finbize.com/",
    githubUrl: "https://github.com/DaniyalIjaz/fintech-fe",
  },
  {
    title: "DESIGN MAN ASSOCIATES | CONSTRUCTION SERVICES WEBSITE",
    description:
      "Design Man Associates features a clean, structured layout, responsive design, and client-focused UX.",
    image: "/images/dma.png",
    technologies: ["React.js", "TailwindCSS", "JavaScript", "Framer Motion"],
    liveUrl: "https://designmanassociates.com.pk/",
    githubUrl: "https://github.com/DaniyalIjaz/DMA-Website-",
  },
]

const techColors: Record<string, string> = {
  "Next.js": "bg-gradient-to-r from-gray-700 to-gray-900 text-white",
  "React.js": "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
  "TailwindCSS": "bg-gradient-to-r from-teal-400 to-teal-600 text-white",
  "TypeScript": "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
  "JavaScript": "bg-yellow-400 text-black",
  "Framer Motion": "bg-purple-500 text-white",
  "Supabase": "bg-green-500 text-white",
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className=" px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24 relative"
    >
      {/* Background glows */}
          {/* Background glow */}
      <div className="absolute top-32 left-0 w-72 h-72 bg-accent/20 blur-3xl rounded-full dark:bg-accent/10" />
      <div className="absolute bottom-32 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full dark:bg-accent/5" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* HEADER */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
            A curated selection of projects showcasing my frontend development skills and UI design approach.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group relative overflow-hidden rounded-2xl
                bg-card/50 backdrop-blur-xl border border-border/40
                hover:-translate-y-2 hover:shadow-2xl hover:border-accent/60
                transition-all duration-500 ease-out py-0"
              >
                {/* Image */}
                <div className="relative w-full h-36 sm:h-44 lg:h-52 overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

        {/* Tech badges */}
<div className="flex flex-wrap gap-2">
  {project.technologies.map((tech) => (
    <Badge
      key={tech}
      className={`
        text-xs sm:text-sm px-3 py-1 rounded-full
        transition-colors duration-300
       bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100
      `}
    >
      {tech}
    </Badge>
  ))}
</div>


                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform duration-300"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
