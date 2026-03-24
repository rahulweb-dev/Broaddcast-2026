"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Target,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
  Megaphone
} from "lucide-react"

export default function MetaAdsPage() {
  return (
    <div className="bg-white text-[#1a1a1a] mt-10">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Scale Your Business with{" "}
            <span className="text-blue-600">
              Meta Ads
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-600 text-lg">
            Reach your ideal audience on Facebook & Instagram with
            high-converting ad campaigns designed to generate
            leads, sales and brand awareness.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 font-semibold hover:opacity-90 transition"
            >
              🚀 Get Free Strategy Call
            </Link>

            <Link
              href="/contact"
              className="border px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              View Case Studies
            </Link>
          </div>

          <div className="flex gap-8 mt-10 text-gray-500">
            <div className="flex items-center gap-2">
              <Facebook size={18} /> Facebook
            </div>

            <div className="flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
            alt="Meta Ads"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#f8f8f8] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Meta Ads Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <Facebook />,
                title: "Facebook Ads",
                desc: "Target users based on interests, behavior and demographics.",
              },
              {
                icon: <Instagram />,
                title: "Instagram Ads",
                desc: "High-engaging creatives for reels, stories & feeds.",
              },
              {
                icon: <Target />,
                title: "Audience Targeting",
                desc: "Laser-focused targeting to maximize conversions.",
              },
              {
                icon: <BarChart3 />,
                title: "Performance Tracking",
                desc: "Real-time optimization and reporting.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= BENEFITS ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Why Choose Meta Ads
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              icon: <Users />,
              title: "Precise Audience Targeting",
            },
            {
              icon: <TrendingUp />,
              title: "Higher Conversion Rates",
            },
            {
              icon: <Megaphone />,
              title: "Brand Awareness",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 border rounded-xl"
            >
              <div className="text-blue-600 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>

      </section>


      {/* ================= IMAGE SECTION ================= */}
      <section className="py-24 bg-[#fafafa] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="https://images.unsplash.com/photo-1557838923-2985c318be48"
            width={600}
            height={500}
            alt="Meta Ads"
            className="rounded-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Data-Driven Meta Ads Strategy
            </h2>

            <p className="text-gray-600 mb-6">
              We optimize campaigns continuously using audience insights,
              creatives testing and conversion tracking.
            </p>

            <div className="space-y-3">
              <div className="flex gap-3">
                <CheckCircle className="text-green-500" />
                Creative Testing
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-500" />
                Audience Optimization
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-500" />
                Conversion Tracking
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {[
            "Research & Strategy",
            "Creative Setup",
            "Campaign Launch",
            "Optimization",
          ].map((step, i) => (
            <div key={i} className="text-center">
              <p className="text-blue-600 text-sm mb-2">
                0{i + 1}
              </p>

              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-28 bg-[#1a1a1a] text-white text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Scale with Meta Ads?
        </h2>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Let’s build high-performing Meta Ads campaigns that drive
          leads, sales and growth.
        </p>

        <Link
          href="/contact"
          className="bg-white text-black px-10 py-4 font-semibold"
        >
          Get Free Consultation 🚀
        </Link>

      </section>

    </div>
  )
}