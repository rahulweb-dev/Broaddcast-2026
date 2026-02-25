"use client"
import { motion } from "framer-motion"

const stats = [
  {
    title: "Users on marketplaces we've created in 2023.",
    value: "8500+",
  },
  {
    title: "Successfully finished projects with creativity.",
    value: "660+",
  },
  {
    title: "Monthly visitors on our e-Commerce platform.",
    value: "6834+",
  },
  {
    title: "Onboarding conversions growth increased.",
    value: "300%",
  },
]

export default function CtaSection() {
  return (
    <section className="bg-[#f3f3f3] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1a1a1a] max-w-5xl"
        >
          Intuition and strategy integrate
          <br />
          the research methodology that we
          <br />
          also apply to{" "}
          <span className="relative inline-block">
            <span className="relative z-10">traditional</span>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-400 -z-0 rounded-sm"></span>
          </span>{" "}
          media.
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-20 mt-20">

          {/* Left Column */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-8">
              We combine human empathy and intelligent data to provide the{" "}
              <span className="underline font-medium text-[#1a1a1a]">
                highest level of satisfaction.
              </span>
            </p>

            <button className="bg-[#1a1a1a] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition">
              Let’s Talk Now ✉
            </button>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 border border-gray-300">

            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-12 border-b border-r border-gray-300 last:border-r-0"
              >
                <p className="text-gray-600 mb-10 max-w-xs">
                  {stat.title}
                </p>

                <p className="text-5xl font-semibold text-[#1a1a1a]">
                  ↑{stat.value}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}