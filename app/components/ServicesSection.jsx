"use client"
import { motion } from "framer-motion"
import { PenTool, Laptop, Target, Briefcase } from "lucide-react"

const services = [
  {
    num: "01",
    title: "Design",
    icon: PenTool,
    desc: "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
    popular: false,
  },
  {
    num: "02",
    title: "Development",
    icon: Laptop,
    desc: "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
    popular: true,
  },
  {
    num: "03",
    title: "Marketing",
    icon: Target,
    desc: "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
    popular: false,
  },
  {
    num: "04",
    title: "Content writing",
    icon: Briefcase,
    desc: "We strive to develop real-world web solutions that are ideal for small to large projects with project requirements.",
    popular: false,
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#0f0f0f] text-white py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl"
        >
          It’s so challenging to find a good team to do great things.
          <br />
          But we can provide you the best one.
        </motion.h2>

        {/* Services List */}
        <div className="mt-20 border-t border-white/10">

          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 py-12 border-b border-white/10"
              >

                {/* Left Side */}
                <div className="flex items-center gap-6">

                  <span className="text-sm text-white/50 w-8">
                    {service.num}
                  </span>

                  <Icon className="w-6 h-6 text-white/70" />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">

                    <h3 className="
    text-lg sm:text-xl md:text-2xl
    font-semibold
    leading-tight
  ">
                      {service.title}
                    </h3>

                    {service.popular && (
                      <span className="
      w-fit
      text-[8px] sm:text-[10px] md:text-xs lg:text-sm
      font-bold uppercase tracking-wider
      bg-yellow-400 text-black
      px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5
      rounded-full
      whitespace-nowrap
    ">
                        Popular
                      </span>
                    )}

                  </div>
                </div>

                {/* Right Side */}
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}



export const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
      className="w-5 h-5"
    >
      <path d="M11.9141 6.57812H7.92969C7.82552 6.57812 7.7474 6.55208 7.69531 6.5C7.64323 6.42188 7.60417 6.34375 7.57812 6.26562L7.61719 2.24219C7.59115 2.16406 7.61719 2.09896 7.69531 2.04688C7.77344 1.96875 7.83854 1.92969 7.89062 1.92969H11.9531C12.0052 1.92969 12.0703 1.96875 12.1484 2.04688C12.2266 2.09896 12.2526 2.16406 12.2266 2.24219L12.2656 6.26562C12.2396 6.34375 12.2005 6.42188 12.1484 6.5C12.0964 6.55208 12.0182 6.57812 11.9141 6.57812Z" />
    </svg>
  );
};

