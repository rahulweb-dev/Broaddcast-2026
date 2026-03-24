"use client"
import { motion } from "framer-motion"

const stats = [
  {
    title: "Brands scaled with our digital solutions.",
    value: "500+",
  },
  {
    title: "Projects delivered across design & development.",
    value: "1200+",
  },
  {
    title: "Monthly users engaging with our platforms.",
    value: "50K+",
  },
  {
    title: "Average growth achieved for our clients.",
    value: "300%",
  },
]

export default function CtaSection() {
  return (
    <section className="bg-[#f3f3f3] py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            font-semibold leading-snug sm:leading-tight
            text-[#1a1a1a] max-w-5xl
          "
        >
          Strategy meets creativity to build
          <br className="hidden sm:block" />
          powerful digital experiences that
          <br className="hidden sm:block" />
          drive{" "}
          <span className="relative inline-block">
            <span className="relative z-10">real growth.</span>
            <span className="absolute left-0 bottom-1 w-full h-2 sm:h-3 bg-yellow-400 -z-0 rounded-sm"></span>
          </span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 mt-12 sm:mt-16 lg:mt-20">

          {/* Left Column */}
          <div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              We blend creativity, data, and technology to craft digital
              solutions that not only look great but also deliver measurable
              results and long-term growth.
            </p>

            <button className="
              bg-[#1a1a1a] text-white
              px-6 sm:px-8 py-3 sm:py-4
              text-xs sm:text-sm
              font-semibold uppercase tracking-wide
              hover:opacity-90 transition
              w-full sm:w-auto
            ">
              Let’s Work Together ✉
            </button>
          </div>

          {/* Right Stats Grid */}
          <div className="
            lg:col-span-2
            grid grid-cols-1 sm:grid-cols-2
            border border-gray-300
          ">

            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-6 sm:p-8 lg:p-12
                  border-b border-gray-300
                  sm:border-r
                  last:border-r-0
                "
              >
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-xs">
                  {stat.title}
                </p>

                <p className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-semibold text-[#1a1a1a]
                ">
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