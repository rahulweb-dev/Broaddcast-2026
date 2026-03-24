"use client"
import { motion } from "framer-motion"

const stats = [
  {
    number: "500+",
    label: "brands empowered with digital transformation.",
  },
  {
    number: "1200+",
    label: "campaigns successfully launched across industries.",
  },
  {
    number: "98%",
    label: "client satisfaction rate with long-term partnerships.",
  },
]

export default function AboutSection() {
  return (
    <section className=" py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">

          {/* Left Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-4xl font-semibold leading-tight text-[#1a1a1a]"
          >
            We build impactful
            <br />
            digital experiences
            <br />
            for brands that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">grow fast.</span>
              <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-400 -z-0 rounded-sm"></span>
            </span>
          </motion.h2>

          {/* Center Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-white text-6xl font-semibold">10+</span>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="uppercase text-sm font-semibold tracking-widest text-[#1a1a1a] mb-4">
              A Performance-Driven Digital Agency
            </p>
            <p className="text-gray-600 leading-relaxed">
              We combine strategy, creativity, and technology to craft
              high-performing digital solutions. From branding to performance
              marketing, we help businesses scale faster and stand out in a
              competitive digital landscape.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-gray-300"></div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-16 mt-16">

          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg font-semibold text-[#1a1a1a]">
                {stat.number}{" "}
                <span className="font-normal text-gray-600">
                  {stat.label}
                </span>
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}