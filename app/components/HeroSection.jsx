
"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex  ">
      {/* Left pink panel */}
      <div className="w-full lg:w-[48%]  flex  flex-col justify-center px-8 lg:px-16 pt-32 pb-20 relative bg-[#e9c9bb]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[140px] md:text-[140px] lg:text-[140px] font-bold leading-[1.05] tracking-tight text-foreground"
        >
          Digital
          <br />
          agency
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-warm-gray text-base max-w-sm leading-relaxed"
        >
          We create world-class digital products materials that communicate clearly.
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center gap-4 group cursor-pointer"
        >
          <span className="w-11 h-11 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight size={20} className="text-white" />
          </span>
          <span className="text-[20px] font-semibold text-foreground">Discover crafto</span>
        </motion.a>

        {/* Vertical text */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-3">
          <div className="w-px h-16 bg-foreground/30" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase rotate-180" style={{ writingMode: "vertical-lr" }}>
            Award winning agency
          </span>
        </div>
      </div>

      {/* Right image panel */}
      <div className="hidden lg:block w-[52%] relative">
        <Image
          src={heroImage}
          alt="Digital agency team"
          className="w-full h-full object-cover"
        />
        {/* Overlay card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute bottom-0 left-0 bg-white p-10 max-w-sm"
        >
          <span className="text-3xl font-bold italic text-accent-foreground" style={{ fontFamily: "cursive" }}>
            hey!
          </span>
          <h4 className="mt-4 text-2xl font-bold leading-snug text-foreground">
            World-class
            <br />
            digital media
            <br />
            agency.
          </h4>
          <button className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors">
            <ArrowRight size={18} className="-rotate-45" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
