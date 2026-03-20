"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio-6.jpg";
import Image from "next/image";

const portfolioItems = [
  { img: portfolio1, title: "Tailoring", category: "Digital" },
  { img: portfolio2, title: "Violator", category: "Branding" },
  { img: portfolio3, title: "Gardner", category: "Branding" },
  { img: portfolio4, title: "Identity", category: "Web" },
  { img: portfolio5, title: "Educamp", category: "Selected" },
  { img: portfolio6, title: "Designs", category: "Digital" },
];

const filters = ["All", "Selected", "Digital", "Branding", "Web"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground"
        >
          Case studies
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`
                text-sm sm:text-base font-medium transition-all
                ${
                  activeFilter === f
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400 hover:text-black"
                }
              `}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="mt-3 sm:mt-4">
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;