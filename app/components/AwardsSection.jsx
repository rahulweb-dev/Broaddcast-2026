"use client"
import { motion } from "framer-motion"
import Silk from "@/app/components/Silk" // adjust path if needed

const AwardsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 px-8 lg:px-16 overflow-hidden">

      {/* Silk Background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={3}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>

      <div className="max-w-7xl mx-auto text-white">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-snug max-w-2xl"
        >
          Forward thinking team of designers, copywriters and{" "}
          <span className="italic font-light opacity-70">
            developers.
          </span>
        </motion.h2>

        <div className="mt-16 flex flex-wrap gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-md">
              <span className="text-2xl font-bold">E</span>
            </div>
            <p className="text-sm font-semibold">
              3x site of the day
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-md">
              <span className="text-2xl font-bold">A</span>
            </div>
            <p className="text-sm font-semibold">
              2x developer award
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AwardsSection