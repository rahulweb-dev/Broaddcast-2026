"use client"

import { useState, useEffect } from "react"
import { Mail, X, Menu } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Sparkles, BarChart3, Palette, Code } from "lucide-react"
// ✅ Normal Nav Items
const navItems = [
  { name: "Home", href: "/", number: "01" },
  { name: "Agency", href: "/about", number: "02" },
  { name: "Portfolio", href: "/portfolios", number: "04" },
  { name: "Contact", href: "/contact", number: "05" },
]

// ✅ Services Data
const services = [
  {
    title: "Performance Marketing",
    items: [
      { name: "Google Ads", href: "/services/google-ads" },
      { name: "Meta Ads", href: "/services/meta-ads" },
      { name: "WhatsApp Ads 🔥", href: "/services/whatsapp-ads" },
    ],
  },
  // {
  //   title: "Automation",
  //   items: [
  //     { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
  //     { name: "IVR System", href: "/services/ivr" },
  //   ],
  // },
  {
    title: "Design",
    items: [
      { name: "Creative Design", href: "/services/design" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Website Development", href: "/services/web-development" },
      // { name: "Landing Pages", href: "/services/landing-pages" },
    ],
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [servicesOpen, setServicesOpen] = useState(false)
  let timeout
  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false)
      } else {
        setVisible(true)
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
        <div className="flex space-x-16">
          {/* Logo */}
          <Link href="/" className="flex items-center bg-black rounded-2xl px-2">
            <Image
              src="/bc-logo.webp"
              alt="Broaddcast Logo"
              width={80}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">

            {/* Normal Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-black hover:opacity-60 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* ✅ Services Dropdown */}
        {/* Button */}
  <div
    className="relative"
    onMouseEnter={() => {
      clearTimeout(timeout)
      setServicesOpen(true)
    }}
    onMouseLeave={() => {
      timeout = setTimeout(() => setServicesOpen(false), 150)
    }}
  >
    <button className="flex items-center gap-1 text-lg font-medium text-black hover:text-gray-600 transition">
      Services
      <ChevronRight
        size={16}
        className={`transition-transform ${servicesOpen ? "rotate-90" : ""}`}
      />
    </button>

    {/* Dropdown */}
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-full mt-8 w-[720px] 
      bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      border border-gray-100 p-10 transition-all duration-300
      ${servicesOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
        }`}
    >

      <div className="grid grid-cols-3 gap-10">

        {services.map((section, i) => (
          <div key={i}>

            {/* Title */}
            <h4 className="font-semibold mb-5 text-gray-900 flex items-center gap-2">

              {section.title === "Performance Marketing" && (
                <BarChart3 size={16} className="text-blue-500" />
              )}

              {section.title === "Design" && (
                <Palette size={16} className="text-pink-500" />
              )}

              {section.title === "Development" && (
                <Code size={16} className="text-purple-500" />
              )}

              {section.title}
            </h4>

            {/* Items */}
            <div className="space-y-3">

              {section.items.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="text-gray-800 font-medium group-hover:text-black">
                      {item.name}
                    </p>

                    {item.desc && (
                      <p className="text-xs text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  <ChevronRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </Link>
              ))}

            </div>
          </div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="mt-8 pt-6 border-t flex items-center justify-between">

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Sparkles size={14} />
          Not sure where to start?
        </div>

        <Link
          href="/contact"
          className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          Get Free Strategy Call →
        </Link>

      </div>

    </div>
  </div>

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
            {/* Close */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-lg"
              >
                Close <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="space-y-6">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-end gap-4 text-5xl font-semibold text-black"
                >
                  {item.name}
                  <span className="text-blue-600 text-lg">
                    {item.number}
                  </span>
                </Link>
              ))}

              {/* ✅ Services Mobile */}
              <div className="mt-10">
                <h3 className="text-2xl mb-4">Services</h3>

                <div className="space-y-3 text-lg">
                  {services.flatMap((section) =>
                    section.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Social */}
            <div>
              <p className="text-blue-600 mb-4">Socials</p>
              <div className="flex gap-6 text-lg">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}