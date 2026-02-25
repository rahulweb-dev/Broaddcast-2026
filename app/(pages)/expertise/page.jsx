"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import MarqueeSection from "@/app/components/MarqueeSection"
import ProcessSection from "./ProcessSection"
import ExperienceSection from "./ExperienceSection"
import ServicesSection from "@/app/components/ServicesSection"

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">

      {/* ================= TOP STRIP ================= */}
      <section className="bg-[#e9c9bb] py-40 relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold relative inline-block">
            Expertise
            <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-400 -z-10"></span>
          </h1>

          <p className="text-sm max-w-xs text-gray-700">
            We pride ourselves by providing top-notch digital media services. Our life is totally depend on client.
          </p>
        </div>
      </section>
      <ProcessSection />
      <ExperienceSection />
      <ServicesSection />
      <MarqueeSection />
    </div>
  )
}