"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaGoogle,
  FaSearch,
  FaChartLine,
  FaBullhorn,
  FaYoutube,
  FaRedo,
  FaCheckCircle,
} from "react-icons/fa";

export default function GoogleAdsPage() {
  return (
    <div className="bg-white text-[#1a1a1a] mt-14">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Drive High-Intent Leads with{" "}
            <span className="text-blue-600 flex items-center gap-3">
              <FaGoogle /> Google Ads
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-600 text-lg">
            We create data-driven Google Ads campaigns that generate qualified
            leads, increase conversions, and scale your business profitably.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-black text-white px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
          >
            🚀 Get Free Strategy Call
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
            width={600}
            height={500}
            alt="Google Ads"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#f8f8f8] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Google Ads Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Search Ads",
                icon: <FaSearch />,
                desc: "Capture high-intent users actively searching.",
              },
              {
                title: "Display Ads",
                icon: <FaBullhorn />,
                desc: "Reach users across millions of websites.",
              },
              {
                title: "YouTube Ads",
                icon: <FaYoutube />,
                desc: "Engage with powerful video campaigns.",
              },
              {
                title: "Remarketing",
                icon: <FaRedo />,
                desc: "Convert visitors into paying customers.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="text-3xl text-blue-600 mb-4">
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

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {[
            {
              title: "Research & Strategy",
              icon: <FaChartLine />,
            },
            {
              title: "Campaign Setup",
              icon: <FaGoogle />,
            },
            {
              title: "Ad Creation",
              icon: <FaBullhorn />,
            },
            {
              title: "Optimization",
              icon: <FaChartLine />,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="text-center p-6 border rounded-xl"
            >
              <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                {step.icon}
              </div>

              <p className="text-gray-400 text-sm mb-2">
                0{i + 1}
              </p>

              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-[#1a1a1a] text-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "More qualified leads",
              "Lower cost per acquisition",
              "High conversion rates",
              "Scalable growth",
              "Data-driven strategy",
              "ROI-focused campaigns",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border border-white/20 p-8 rounded-xl flex items-center gap-4"
              >
                <FaCheckCircle className="text-green-400" />
                {item}
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMAGE SECTION ================= */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          width={600}
          height={500}
          alt="Analytics"
          className="rounded-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Data-Driven Google Ads Campaigns
          </h2>

          <p className="text-gray-600 mb-6">
            We continuously optimize campaigns using analytics, conversion
            tracking, and performance data to maximize ROI.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Conversion Tracking Setup
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Keyword Optimization
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Budget Optimization
            </li>
          </ul>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 lg:px-16 text-center bg-[#f8f8f8]">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Scale with Google Ads?
        </h2>

        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Let’s build a performance-driven strategy that delivers real business growth.
        </p>

        <Link
          href="/contact"
          className="bg-black text-white px-10 py-4 text-sm font-semibold hover:opacity-90 transition"
        >
          Get Free Consultation 🚀
        </Link>

      </section>

    </div>
  );
}