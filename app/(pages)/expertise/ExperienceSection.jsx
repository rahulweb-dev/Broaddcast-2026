"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  return (
    <section className="relative bg-[#f3f3f3] py-28 overflow-hidden">

      {/* Bottom Dark Strip */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[#0F0F0F]"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Main Image */}
        <div className="relative">
          <Image
            src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-02.jpg.webp"
            alt="Team"
            width={1200}
            height={700}
            className="w-full object-cover"
          />

          {/* Peach Card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#e5c1b5] p-12 w-[450px] shadow-xl">

            <h3 className="text-3xl font-semibold mb-10 text-[#1a1a1a]">
              Highly experienced
            </h3>

            {/* Skill 1 */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Web design</span>
                <span className="bg-[#1a1a1a] text-white px-2 py-1 text-xs rounded">
                  80%
                </span>
              </div>
              <div className="h-1 bg-gray-300">
                <div className="h-1 bg-[#1a1a1a] w-[80%]"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Web development</span>
                <span className="bg-[#1a1a1a] text-white px-2 py-1 text-xs rounded">
                  87%
                </span>
              </div>
              <div className="h-1 bg-gray-300">
                <div className="h-1 bg-[#1a1a1a] w-[87%]"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>e-Commerce solutions</span>
                <span className="bg-[#1a1a1a] text-white px-2 py-1 text-xs rounded">
                  93%
                </span>
              </div>
              <div className="h-1 bg-gray-300">
                <div className="h-1 bg-[#1a1a1a] w-[93%]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}