"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import {
  Palette,
  ImageIcon,
  Video,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Brush,
  Clapperboard,
  LayoutTemplate,
} from "lucide-react"

const services = [
  {
    icon: <Palette size={22} />,
    title: "Brand Identity",
    desc: "Logos, color systems, typography, and brand guidelines that make your business instantly recognizable and impossible to ignore.",
    stat: "Timeless brands",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
  },
  {
    icon: <ImageIcon size={22} />,
    title: "Social Creatives",
    desc: "Scroll-stopping visuals for Instagram, Facebook, LinkedIn and beyond — designed to drive clicks, saves, and conversions.",
    stat: "↑ 3× engagement",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    icon: <Video size={22} />,
    title: "Ad Videos & Reels",
    desc: "Motion graphics, product reels, and ad creatives that hook viewers in 3 seconds and drive them to take action.",
    stat: "↑ 5× recall",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
  {
    icon: <Layers size={22} />,
    title: "Marketing Design",
    desc: "Banners, brochures, pitch decks, and full campaign assets — cohesive across every touchpoint of your marketing funnel.",
    stat: "Full-funnel",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
]

const process = [
  {
    icon: <Sparkles size={20} />,
    step: "01",
    title: "Discovery",
    desc: "Brand audits, audience research, competitor analysis, and creative briefs to align vision with strategy before anything is designed.",
  },
  {
    icon: <Brush size={20} />,
    step: "02",
    title: "Concept",
    desc: "Moodboards, style exploration, and initial concepts across multiple directions — so you choose, never guess.",
  },
  {
    icon: <LayoutTemplate size={20} />,
    step: "03",
    title: "Design",
    desc: "Full execution in Figma or Adobe Suite with meticulous attention to detail, hierarchy, and brand consistency.",
  },
  {
    icon: <Clapperboard size={20} />,
    step: "04",
    title: "Delivery",
    desc: "Production-ready files in all formats — print, digital, social, and motion — with brand guidelines and source files included.",
  },
]

const outcomes = [
  "Consistent brand across all channels",
  "Ready-to-publish social templates",
  "Print & digital-ready formats",
  "Source files always included",
  "Unlimited revision rounds",
  "Fast 5–7 day turnaround",
]

const stats = [
  { value: "500+", label: "Creatives delivered" },
  { value: "3×", label: "Avg. engagement lift" },
  { value: "48h", label: "First draft turnaround" },
]

const marqueeItems = [
  "Brand Identity", "Social Creatives", "Motion Graphics",
  "Ad Videos", "Pitch Decks", "Packaging Design",
  "Campaign Assets", "Logo Design", "Brochures",
]

export default function DesignPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div
      className="bg-[#09090b] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Instrument+Serif:ital@0;1&display=swap');

        :root {
          --accent: #fb923c;
          --accent2: #fbbf24;
          --bg: #09090b;
          --border: rgba(255,255,255,0.07);
        }

        .serif { font-family: 'Instrument Serif', Georgia, serif; }

        .glow-orange {
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 70%);
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
        }

        .card-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
        }

        .tag-orange {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(251,146,60,0.12);
          color: #fb923c;
          border: 1px solid rgba(251,146,60,0.25);
        }

        .service-card {
          background: linear-gradient(145deg, rgba(251,146,60,0.04), rgba(251,191,36,0.02));
          border: 1px solid rgba(251,146,60,0.10);
        }

        .process-card {
          background: linear-gradient(145deg, rgba(251,146,60,0.05), rgba(255,255,255,0.02));
          border: 1px solid rgba(251,146,60,0.12);
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(251,146,60,0.07) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(251,146,60,0.15);
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          animation: marquee 22s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden"
      >
        <div className="glow-orange" style={{ top: "8%", right: "8%" }} />
        <div
          className="glow-orange"
          style={{
            bottom: "10%", left: "3%",
            background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center pt-24 pb-16"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="tag-orange">Creative & Brand Design</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-[4.25rem] font-light leading-[1.1] tracking-tight"
            >
              <span className="text-zinc-300">Design that</span>
              <br />
              <span className="serif italic text-white">stops the scroll.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md font-light"
            >
              From brand identity to motion ads — we create visuals that build
              recognition, earn trust, and convert audiences into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#fb923c] text-[#09090b] font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                Start Your Project <ArrowRight size={15} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/25 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-12 flex items-center gap-4 flex-wrap"
            >
              {stats.map((s, i) => (
                <div key={i} className="stat-card rounded-xl px-5 py-3 text-center">
                  <p className="text-[#fb923c] font-semibold text-xl">{s.value}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:grid grid-cols-2 gap-3"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#fb923c]/15 to-[#fbbf24]/8 blur-3xl" />

            <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden border border-white/10 col-span-2 h-52">
              <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" alt="Brand Design" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-medium text-white/80">Brand Identity</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden border border-white/10 h-40">
              <Image src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80" alt="Social Media" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80">Social</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden border border-white/10 h-40">
              <Image src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80" alt="Motion" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80">Motion</span>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8 card-glass rounded-xl px-5 py-3.5 z-10"
            >
              <p className="text-xs text-zinc-500 mb-0.5">Last campaign</p>
              <p className="text-sm font-semibold text-white">
                <span className="text-[#fb923c]">↑ 4.1×</span> ad click-through
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="py-5 border-y border-white/[0.06] overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-8 text-zinc-600 text-sm font-medium uppercase tracking-widest whitespace-nowrap">
              {i % 2 === 0
                ? <span className="text-[#fb923c] mr-8">✦</span>
                : null
              }
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">What We Create</p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              Creative <span className="serif italic text-zinc-400">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="service-card rounded-2xl overflow-hidden group cursor-default"
              >
                {/* Image strip */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(251,146,60,0.15)",
                        color: "#fb923c",
                        border: "1px solid rgba(251,146,60,0.25)",
                      }}
                    >
                      {item.stat}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[#fb923c]/10 text-[#fb923c]">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[#fb923c] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-28 px-6 lg:px-20 relative overflow-hidden border-y border-white/[0.05]">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">How We Work</p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              Our Creative <span className="serif italic text-zinc-400">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="process-card rounded-2xl p-6 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-[#fb923c]/10 text-[#fb923c]">{item.icon}</div>
                  <span className="text-2xl font-light text-zinc-700 group-hover:text-[#fb923c] transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO STRIP ─── */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">Recent Work</p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              From the <span className="serif italic text-zinc-400">studio</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80",
              "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80",
              "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&q=80",
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden aspect-square border border-white/[0.07]"
              >
                <Image src={src} alt={`Portfolio ${i + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ─── */}
      <section className="py-24 px-6 lg:px-20 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">What You Get</p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight mb-6">
              Design that <span className="serif italic text-zinc-400">pays for itself</span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              Every visual we create is built with purpose. No filler, no fluff
              — just sharp creative that performs across every channel.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 card-glass rounded-xl p-4"
              >
                <CheckCircle2 size={16} className="text-[#fb923c] shrink-0" />
                <span className="text-sm text-zinc-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/5 via-transparent to-[#fbbf24]/5" />
        <div className="glow-orange" style={{ top: "20%", left: "35%", opacity: 0.5 }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <span className="tag-orange mb-6 inline-block">Let's Create Together</span>
          <h2 className="text-5xl font-light text-white tracking-tight mb-6 leading-tight">
            Ready to build something{" "}
            <span className="serif italic text-[#fb923c]">beautiful?</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg mb-10 max-w-md mx-auto">
            Share your brief — we'll come back with ideas, timelines, and a
            clear creative direction within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#fb923c] text-[#09090b] font-semibold text-sm hover:bg-white transition-colors duration-200"
          >
            Get Started <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}