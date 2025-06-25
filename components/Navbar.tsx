"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Agenda", href: "#agenda" },
    { name: "Mentores", href: "#mentores" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-coffee-950/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Coffee className="h-6 w-6 text-brazil-green dark:text-brazil-yellow mr-2" />
            <span className="font-bold text-xl text-coffee-900 dark:text-coffee-100">Ship Fast edición Café</span>
            <div className="ml-2 w-6 h-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-brazil-green"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-brazil-yellow rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-brazil-blue rounded-full flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-coffee-700 dark:text-coffee-300 hover:text-brazil-green dark:hover:text-brazil-yellow transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-coffee-700 dark:text-coffee-300 hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button  href={"#pricing"} className="bg-brazil-green hover:bg-green-700 text-white">Inscrever-se</Button>
          </div>

          {/* Mobile Menu Button <a href="#pricing">Inscrever-se</a> */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-coffee-700 dark:text-coffee-300 hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-coffee-700 dark:text-coffee-300 hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-coffee-950 border-t dark:border-coffee-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-coffee-700 dark:text-coffee-300 hover:text-brazil-green dark:hover:text-brazil-yellow transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button href={"#pricing"} className="bg-brazil-green hover:bg-green-700 text-white w-full mt-4">Inscrever-se</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
