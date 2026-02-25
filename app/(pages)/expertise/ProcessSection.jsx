"use client"
import { motion } from "framer-motion"
import { RefreshCcw, Layers, ThumbsUp, Phone } from "lucide-react"

export default function ProcessSection() {
  return (
    <section className="bg-[#f3f3f3] py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-3xl font-bold leading-tight max-w-4xl mx-auto text-[#1a1a1a]"
        >
          Build impactful experiences through
          <br />
          web design and development.
        </motion.h2>

        {/* Process Grid */}
        <div className="grid md:grid-cols-4 gap-16 mt-20">

          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <span className="absolute -top-2 -left-2 w-6 h-6 border-2 border-dashed border-[#f4a261] rounded-sm"></span>
              <RefreshCcw size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-lg text-[#1a1a1a]">
              Project analysis
            </h3>
            <p className="text-gray-600 mt-2">
              Research and strategy
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <span className="absolute -top-2 -left-2 w-6 h-6 border-2 border-dashed border-[#f4a261] rounded-sm"></span>
              <Layers size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-lg text-[#1a1a1a]">
              Build strategy
            </h3>
            <p className="text-gray-600 mt-2">
              Wireframes and design
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <span className="absolute -top-2 -left-2 w-6 h-6 border-2 border-dashed border-[#f4a261] rounded-sm"></span>
              <ThumbsUp size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-lg text-[#1a1a1a]">
              Launch and live
            </h3>
            <p className="text-gray-600 mt-2">
              Development and scale
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <span className="absolute -top-2 -left-2 w-6 h-6 border-2 border-dashed border-[#f4a261] rounded-sm"></span>
              <Phone size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-lg text-[#1a1a1a]">
              Maintenance
            </h3>
            <p className="text-gray-600 mt-2">
              Maintaining strong
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}