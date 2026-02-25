"use client"

import { motion } from "framer-motion";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio-6.jpg";
import Image from "next/image";

const portfolioItems = [
  { img: portfolio1, title: "Tailoring", category: "Brochure" },
  { img: portfolio2, title: "Violator", category: "Branding" },
  { img: portfolio3, title: "Gardner", category: "Branding" },
  { img: portfolio4, title: "Identity", category: "Poster" },
  { img: portfolio5, title: "Educamp", category: "Packaging" },
  { img: portfolio6, title: "Designs", category: "Graphic" },
];

const filters = ["All", "Selected", "Digital", "Branding", "Web"];

const PortfolioSection = () => {
  return (
    <section className="py-24 lg:py-32 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Case studies
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex gap-6 flex-wrap"
        >
          {filters.map((f, i) => (
            <button
              key={f}
              className={`text-sm font-medium transition-colors ${i === 0 ? "text-foreground" : "text-warm-gray hover:text-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-warm-gray">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
