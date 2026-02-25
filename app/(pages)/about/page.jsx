"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import MarqueeSection from "@/app/components/MarqueeSection"

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">

      {/* ================= TOP STRIP ================= */}
      <section className="bg-[#e9c9bb] py-40 relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold relative inline-block">
            About us
            <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-400 -z-10"></span>
          </h1>

          <p className="text-sm max-w-xs text-gray-700">
            We are committed to deliver unique digital media
            solutions from design to eCommerce solutions.
          </p>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <Image
              src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp"
              width={500}
              height={600}
              alt="About"
              className="w-full object-cover"
            />
            <p className="mt-4 text-4xl font-semibold">
              28+
              <span className="block text-sm font-normal text-gray-500">
                Years working experience
              </span>
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              We’re a creative digital agency.
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We are skilled for our work and have 28+ years experience.
              We love building brands & digital solutions.
            </p>

            <div className="flex items-center gap-6">
              <button className="bg-black text-white px-8 py-3 text-sm font-semibold">
                LET’S TALK NOW
              </button>

              <span className="text-sm font-medium">
                +1 800 222 000
              </span>
            </div>

            {/* Client Logos */}
            <div className="flex gap-10 mt-10 text-gray-500 text-sm">
              <span>Walmart</span>
              <span>Netflix</span>
              <span>Logitech</span>
              <span>Amazon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp"
          fill
          alt="Video"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mb-6">
            ▶
          </div>

          <h2 className="text-3xl font-semibold max-w-xl">
            Forward thinking team of designers,
            copywriters and developers.
          </h2>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-semibold leading-snug">
              We want to bring and business the{" "}
              <span className="relative inline-block">
                digital
                <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10"></span>
              </span>{" "}
              world.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-8 text-gray-600">
            <p>
              Successfully finished projects with creativity.
            </p>
            <p>
              Work together for better branding solutions.
            </p>
            <p>
              Committed to deliver unique digital media.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8">
          <Image src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp" width={400} height={500} alt="" />
          <Image src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp" width={400} height={500} alt="" />
          <Image src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp" width={400} height={500} alt="" />
        </div>
      </section>
       <MarqueeSection/>

    </div>
  )
}