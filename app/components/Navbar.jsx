"use client"

import { useState, useEffect } from "react"
import { Mail, X, Menu } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/", number: "01" },
  { name: "Agency", href: "/about", number: "02" },
  { name: "Expertise", href: "/expertise", number: "03" },
  { name: "Portfolio", href: "/portfolios", number: "04" },
  { name: "Contact", href: "/contact", number: "05" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false) // scroll down → hide
      } else {
        setVisible(true) // scroll up → show
      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 bg-white/80 backdrop-blur-md"
      >
        <div className="flex space-x-30">
          {/* Logo */}
          <Link href="/" className="flex items-center bg-black rounded-2xl">
            <Image
              src="/bc-logo.webp"
              alt="DA Logo"
              width={80}
              height={10}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-black hover:opacity-60 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 border border-black px-6 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          <Mail size={14} />
          Send a message
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <Menu size={28} />
        </button>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#f3f3f3] z-[999] p-10 flex flex-col justify-between"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-lg"
              >
                Close <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-end gap-4 text-6xl font-semibold text-black"
                >
                  {item.name}
                  <span className="text-blue-600 text-xl font-medium">
                    {item.number}
                  </span>
                </Link>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-blue-600 mb-4">Socials</p>
              <div className="flex gap-6 text-lg">
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}