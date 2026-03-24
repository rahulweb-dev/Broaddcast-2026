"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import heroImage from "../assets/hero-image.jpg"
import Image from "next/image"

const HeroSection = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200) // simulate loading

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex">

      {/* LEFT */}
      <div className="w-full lg:w-[48%] flex flex-col justify-center px-8 lg:px-16 pt-32 pb-20 bg-[#d0d5ff]">

        {loading ? (
          // 🔥 Skeleton LEFT
          <div className="animate-pulse space-y-6">
            <div className="h-24 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-24 w-2/3 bg-gray-300 rounded"></div>

            <div className="h-4 w-64 bg-gray-300 rounded"></div>
            <div className="h-4 w-52 bg-gray-300 rounded"></div>

            <div className="h-10 w-40 bg-gray-300 rounded-full"></div>
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[80px] md:text-[140px] font-bold leading-[1.05]"
            >
              Digital <br /> agency
            </motion.h1>

            <motion.p
              className="mt-8 text-gray-600 max-w-sm"
            >
              We create world-class digital products materials that communicate clearly.
            </motion.p>

            <motion.a
              href="#about"
              className="mt-10 flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
                <ArrowRight size={20} className="text-white" />
              </span>
              <span className="text-lg font-semibold">
                Discover crafto
              </span>
            </motion.a>
          </>
        )}
      </div>

      {/* RIGHT */}
      <div className="hidden lg:block w-[52%] relative">

        {loading ? (
          // 🔥 Skeleton IMAGE
          <div className="w-full h-full bg-gray-300 animate-pulse" />
        ) : (
          <>
            <Image
              src={heroImage}
              alt="Digital agency team"
              className="w-full h-full object-cover"
              onLoad={() => setLoading(false)}
            />

            {/* Overlay Card */}
            <motion.div
              className="absolute bottom-0 left-0 bg-white p-10 max-w-sm"
            >
              <span className="text-2xl font-bold italic">hey!</span>

              <h4 className="mt-4 text-xl font-bold">
                World-class digital agency.
              </h4>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

export default HeroSection