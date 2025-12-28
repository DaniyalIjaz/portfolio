"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[85%] md:w-[70%] max-w-3xl"
    >
      <div className="relative rounded-[3rem] overflow-hidden bg-white/10 backdrop-blur-[40px] border border-white/10 shadow-2xl mx-2 px-6 md:px-20">
        <div className="relative flex justify-between items-center py-2 md:py-4 px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white font-bold text-lg cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            Portfolio
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-sm font-semibold cursor-pointer transition-transform duration-200 hover:text-accent"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex justify-end w-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[1px] w-6 bg-white rounded origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[1px] w-6 bg-white rounded origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-[1px] w-6 bg-white rounded origin-center"
                />
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden rounded-[2rem] p-6 mt-2 flex flex-col gap-4 w-[90%] mx-auto"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white font-bold text-lg cursor-pointer transition-transform duration-200 hover:scale-105"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05, ease: "easeInOut" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
