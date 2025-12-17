"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "FLUORA | EVENT MANAGEMENT WEBSITE",
    description:
      "Fluora is a full-stack event management platform that offers secure role-based access for hosts and vendors, real-time event workflows, RLS-protected data, and a responsive animated UI. Powered by Fluora Assist, it provides smart vendor suggestions and conversational event-planning support.",
    image: "/images/fluora.png",
    technologies: ["Next.js", "TailwindCSS", "Typscript", "Supabase"],
    liveUrl: "",
    githubUrl: "https://github.com/DaniyalIjaz/fluora",
  },
  {
    title: "ASTRO VISTAAR | ASTROLOGY & OCCULT COURSES WEBSITE",
    description:
      "Astro Vistaar is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring a smoke-effect preloader, parallax scrolling, animated route transitions, and a custom animated cursor. Its modular architecture focuses on smooth motion, micro-interactions, and performance-optimized visual effects.",
    image: "/images/astro.png",
    technologies: ["Next.js", "TailwindCSS", "Typscript", "Framer Motion"],
    liveUrl: "https://astrovistaar.com/",
    githubUrl: "",
  },
  {
    title: "XOTEK | SOFTWARE COMPANY PORTFOLIO",
    description:
      "Xotek is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring a clean modern UI, smooth page transitions, responsive layouts, and subtle micro-interactions. Its modular architecture focuses on scalability, performance optimization, and seamless frontend–backend integration.",
    image: "/images/xotek.png",
    technologies: ["Next.js", "TailwindCSS", "Typscript", "Framer Motion"],
    liveUrl: "https://xotek.co/",
    githubUrl: "https://github.com/Mahid1856502/xotek",
  },
  {
    title: "FINTECH BUSSINESS ADVISORS | BOOKKEEPING SERVICES WEBSITE",
    description:
      "Fintech Business Advisors features a professional, conversion-focused website with a clean layout, responsive design, and clear service presentation. Its structure emphasizes trust, clarity, and seamless navigation to effectively showcase bookkeeping and financial advisory services.",
    image: "/images/fintech.png",
    technologies: ["Next.js", "TailwindCSS", "Typscript", "Framer Motion"],
    liveUrl: "https://finbize.com/",
    githubUrl: "https://github.com/DaniyalIjaz/fintech-fe",
  },
  {
    title: "DESIGN MAN ASSOCIATES (PVT) LTD. | CONSTRUCTION SERVICES WEBSITE",
    description:
      "Design Man Associates (Pvt) Ltd. features a professional construction services website with a clean, structured layout, responsive design, and clear service sections. The interface emphasizes credibility, project showcase clarity, and smooth navigation for an effective client-focused experience.",
    image: "/images/dma.png",
    technologies: ["React.js", "TailwindCSS", "Javascript", "Framer Motion"],
    liveUrl: "https://designmanassociates.com.pk/",
    githubUrl: "https://github.com/DaniyalIjaz/DMA-Website-",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        bg-card/50
        px-4 py-12
        sm:px-6 sm:py-16
        lg:px-10 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div
          className={`mb-8 sm:mb-12
            transition-all duration-1000
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="
            font-bold
            text-2xl
            sm:text-3xl
            lg:text-5xl
          ">
            Featured Projects
          </h2>

          <p className="
            mt-3
            text-sm
            sm:text-base
            text-muted-foreground
            max-w-xl
          ">
            A curated selection of projects showcasing my frontend development
            skills and UI design approach.
          </p>
        </div>

        {/* GRID */}
        <div className="
          grid grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`
                group overflow-hidden
                transition-all duration-700
                hover:shadow-xl
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {/* IMAGE */}
              <div className="
                relative w-full overflow-hidden
                h-36
                sm:h-44
                lg:h-52
              ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="
                  font-semibold
                  text-base
                  sm:text-lg
                  lg:text-xl
                ">
                  {project.title}
                </h3>

                <p className="
                  text-xs
                  sm:text-sm
                  text-muted-foreground
                  leading-relaxed
                ">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* BUTTONS */}
             <div
  className="
    flex flex-col gap-3
    sm:flex-row
  "
>
  {project.liveUrl && (
    <Button
      size="sm"
      variant="outline"
      className="w-full sm:w-auto gap-2"
      asChild
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="h-4 w-4" />
        Live
      </a>
    </Button>
  )}

  {project.githubUrl && (
    <Button
      size="sm"
      variant="outline"
      className="w-full sm:w-auto gap-2"
      asChild
    >
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-4 w-4" />
        Code
      </a>
    </Button>
  )}
</div>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
