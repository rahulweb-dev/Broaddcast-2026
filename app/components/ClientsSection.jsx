"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const logos = [
  { name: "Saboo", img: "/clients-logos/Saboo-Autozone.png" },
  { name: "Aamoda", img: "/clients-logos/aamoda.png" },
  { name: "Hyundai", img: "/clients-logos/bharathyundai_logo (1).png" },
  { name: "Hotel", img: "/clients-logos/Hotel-Inner-Circle.png" },
  { name: "Maruti", img: "/clients-logos/Maruti-Commercial.png" },
  { name: "rettiq", img: "/clients-logos/rettiq.png" },
  { name: "Nexa", img: "/clients-logos/Maruti-Suzuki-Nexa-Dealer.png" },
  { name: "Sky", img: "/clients-logos/sky_logo (1).webp" },
  { name: "Saboo RKS", img: "/clients-logos/Maruti-Suzuki-Saboo-Rks.png" },
]

const duplicatedLogos = [...logos, ...logos]

const ClientsSection = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 border-b overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {loading ? (
          // 🔥 Skeleton Loader
          <div className="flex gap-10 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-[120px] h-[50px] bg-gray-300 rounded animate-pulse"
              />
            ))}
          </div>
        ) : (
          // ✅ Actual Logos
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[120px] opacity-60 hover:opacity-100 transition"
              >
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={120}
                  height={50}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default ClientsSection