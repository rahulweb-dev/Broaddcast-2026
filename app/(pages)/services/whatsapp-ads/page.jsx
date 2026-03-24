"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  MessageCircle,
  Bot,
  Zap,
  Phone,
  Users,
  CheckCircle,
  TrendingUp,
  Send,
  ArrowRight
} from "lucide-react"

export default function WhatsAppAdsPage() {
  return (
    <div className="bg-white text-[#1a1a1a] mt-11">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Convert Leads Faster with{" "}
            <span className="text-green-600">
              WhatsApp Marketing
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-600 text-lg">
            Turn clicks into conversations. Generate leads, automate responses,
            and convert customers instantly using WhatsApp marketing.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 font-semibold flex items-center gap-2 hover:bg-green-700 transition"
            >
              Start Campaign <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="border px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              Free Demo
            </Link>
          </div>

          <div className="flex gap-10 mt-10 text-gray-500">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} /> Instant Leads
            </div>

            <div className="flex items-center gap-2">
              <Zap size={18} /> Fast Conversion
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} /> High Engagement
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1611746872915-64382b5c76da"
            width={600}
            height={500}
            alt="WhatsApp Marketing"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#f8f8f8] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            WhatsApp Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <MessageCircle />,
                title: "Click to WhatsApp Ads",
                desc: "Generate instant leads directly to WhatsApp.",
              },
              {
                icon: <Bot />,
                title: "Automation Bots",
                desc: "Auto replies & lead qualification.",
              },
              {
                icon: <Zap />,
                title: "Instant Engagement",
                desc: "Respond to leads in seconds.",
              },
              {
                icon: <Phone />,
                title: "CRM Integration",
                desc: "Manage leads using dashboards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl border shadow-sm hover:shadow-xl transition"
              >
                <div className="text-green-600 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
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


      {/* ================= IMAGE SECTION ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <Image
          src="https://images.unsplash.com/photo-1587614382346-ac1e35fefc6d"
          width={600}
          height={500}
          alt="WhatsApp Automation"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Automate WhatsApp Conversations
          </h2>

          <p className="text-gray-600 mb-6">
            Automate lead qualification, send instant responses,
            and improve conversions with WhatsApp automation.
          </p>

          <div className="space-y-4">

            <div className="flex gap-3">
              <CheckCircle className="text-green-500" />
              Auto Reply Bots
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-green-500" />
              Lead Qualification
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-green-500" />
              Broadcast Campaigns
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-green-500" />
              Analytics Dashboard
            </div>

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-[#f8f8f8] px-6 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Why WhatsApp Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: <Users />,
                title: "Direct Customer Communication",
              },
              {
                icon: <TrendingUp />,
                title: "Higher Conversion Rates",
              },
              {
                icon: <Send />,
                title: "Instant Lead Follow-ups",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-xl border"
              >
                <div className="text-green-600 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            ))}

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
            "Setup Campaign",
            "Connect WhatsApp",
            "Automation Setup",
            "Lead Conversion",
          ].map((step, i) => (
            <div key={i} className="text-center">

              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                0{i + 1}
              </div>

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
          Start Converting Leads Instantly
        </h2>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Turn WhatsApp into your most powerful lead generation channel.
        </p>

        <Link
          href="/contact"
          className="bg-green-600 px-10 py-4 font-semibold hover:bg-green-700 transition"
        >
          Get Free Demo 🚀
        </Link>

      </section>

    </div>
  )
}