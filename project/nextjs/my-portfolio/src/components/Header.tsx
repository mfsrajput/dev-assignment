"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"]
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-8 py-2 flex justify-between items-center">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          Farhan Rajput
        </motion.h1>
        <nav className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="text-foreground/80 hover:text-foreground"
            >
              {item}
            </motion.a>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </nav>
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2" aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu />
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-sm"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header

