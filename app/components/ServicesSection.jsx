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

                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>

                    {service.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-yellow-400 text-black px-3 py-1 rounded-full">
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