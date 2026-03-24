"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import {
  Globe,
  Code,
  Smartphone,
  Zap,
  Phone,
  Bot,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: <Globe size={24} />,
    title: "Business Websites",
    desc: "Modern, fast, and SEO-optimized websites that rank and convert.",
    tag: "Most Popular",
  },
  {
    icon: <Code size={24} />,
    title: "Custom Development",
    desc: "Tailored web applications, portals & dashboards built for scale.",
    tag: null,
  },
  {
    icon: <Smartphone size={24} />,
    title: "Responsive Design",
    desc: "Pixel-perfect experience across every screen size and device.",
    tag: null,
  },
  {
    icon: <Zap size={24} />,
    title: "Landing Pages",
    desc: "High-converting pages engineered for ads, launches & campaigns.",
    tag: "High ROI",
  },
]

const automation = [
  {
    icon: <Bot size={26} />,
    title: "WhatsApp Automation",
    desc: "Instant replies, intelligent chatbot flows & real-time lead capture.",
    stat: "3× faster response",
  },
  {
    icon: <Phone size={26} />,
    title: "IVR Systems",
    desc: "Automated call handling, smart routing & voice-based lead qualification.",
    stat: "Zero missed calls",
  },
  {
    icon: <Database size={26} />,
    title: "CRM Integration",
    desc: "Track, nurture and convert every lead with unified pipeline visibility.",
    stat: "2× conversion rate",
  },
]

const workflow = [
  { label: "User Visits Website", icon: "🌐" },
  { label: "Lead Captured", icon: "🎯" },
  { label: "WhatsApp Trigger", icon: "💬" },
  { label: "IVR Follow-up", icon: "📞" },
  { label: "CRM Tracking", icon: "📊" },
]

const benefits = [
  "Complete lead generation system",
  "Automated follow-ups 24/7",
  "Higher conversion rates",
  "Zero lead leakage",
  "Fast & scalable websites",
  "Data-driven growth loops",
]

export default function WebDevelopmentPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div
      className="bg-[#09090b] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Instrument+Serif:ital@0;1&display=swap');

        :root {
          --accent: #6ee7b7;
          --accent2: #818cf8;
          --bg: #09090b;
          --surface: #111113;
          --border: rgba(255,255,255,0.07);
          --muted: #71717a;
        }

        .serif { font-family: 'Instrument Serif', Georgia, serif; }

        .glow-dot {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%);
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
        }

        .card-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
        }

        .noise {
          position: relative;
        }
        .noise::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
        }

        .tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(110,231,183,0.12);
          color: var(--accent);
          border: 1px solid rgba(110,231,183,0.25);
        }

        .step-line::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(110,231,183,0.3), transparent);
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 lg:px-20 noise overflow-hidden"
      >
        {/* Background glows */}
        <div className="glow-dot" style={{ top: "15%", left: "8%" }} />
        <div
          className="glow-dot"
          style={{
            top: "50%",
            right: "5%",
            background:
              "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
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
              <span className="tag">Web Development & Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-[4.25rem] font-light leading-[1.1] tracking-tight"
            >
              <span className="text-zinc-300">Websites that</span>
              <br />
              <span className="serif italic text-white">actually sell.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md font-light"
            >
              We build complete growth systems — websites, WhatsApp automation,
              IVR, and CRM — so every visitor becomes a tracked, followed-up lead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6ee7b7] text-[#09090b] font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                Start Your Project <ArrowRight size={15} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/25 transition-colors duration-200"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-6 text-zinc-500 text-sm"
            >
              {["50+ Projects", "98% Retention", "Avg. 2.4× ROI"].map((s, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#6ee7b7]" /> {s}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#6ee7b7]/20 to-[#818cf8]/10 blur-2xl" />
            <Image
              src="/services/webdev.png"
              alt="Web Development"
              width={560}
              height={420}
              className="relative rounded-2xl border border-white/10 shadow-2xl object-cover"
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8 card-glass rounded-xl px-5 py-3.5"
            >
              <p className="text-xs text-zinc-500 mb-0.5">This month</p>
              <p className="text-sm font-semibold text-white">
                <span className="text-[#6ee7b7]">↑ 3.2×</span> lead conversion
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">
              What We Build
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              Web Development{" "}
              <span className="serif italic text-zinc-400">Services</span>
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
                className="card-glass rounded-2xl p-7 group cursor-default"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#6ee7b7] group-hover:bg-[#6ee7b7]/10 transition-colors">
                    {item.icon}
                  </div>
                  {item.tag && <span className="tag">{item.tag}</span>}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[#6ee7b7] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUTOMATION ─── */}
      <section className="py-28 px-6 lg:px-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
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
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">
              The Growth Engine
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              Automation &{" "}
              <span className="serif italic text-zinc-400">Lead Systems</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {automation.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-7 overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(110,231,183,0.05), rgba(129,140,248,0.04))",
                  border: "1px solid rgba(110,231,183,0.12)",
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#6ee7b7]/5 blur-2xl group-hover:bg-[#6ee7b7]/10 transition-all" />
                <div className="p-2.5 w-fit rounded-xl bg-[#6ee7b7]/10 text-[#6ee7b7] mb-5">
                  {item.icon}
                </div>
                <div className="text-xs font-semibold text-[#6ee7b7] mb-3 tracking-wide">
                  {item.stat}
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW ─── */}
      <section className="py-24 px-6 lg:px-20 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">
              The Full System
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              How It{" "}
              <span className="serif italic text-zinc-400">All Connects</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex md:flex-1 items-center gap-3 md:gap-0"
              >
                <div className="md:flex-1 flex flex-col items-start md:items-center text-center">
                  <div className="w-12 h-12 rounded-2xl card-glass flex items-center justify-center text-xl mb-3 border border-white/10">
                    {step.icon}
                  </div>
                  <p className="text-xs text-zinc-500 font-medium mb-1">
                    0{i + 1}
                  </p>
                  <p className="text-sm text-zinc-300 font-medium leading-tight max-w-[90px]">
                    {step.label}
                  </p>
                </div>
                {i < workflow.length - 1 && (
                  <div className="hidden md:block h-px flex-1 mx-3 bg-gradient-to-r from-[#6ee7b7]/30 to-transparent" />
                )}
                {i < workflow.length - 1 && (
                  <div className="md:hidden w-px h-6 mx-auto bg-gradient-to-b from-[#6ee7b7]/30 to-transparent ml-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">
              The Difference
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight mb-6">
              Everything you need{" "}
              <span className="serif italic text-zinc-400">
                to grow
              </span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              Stop stitching together tools. We deliver a single, cohesive
              system that turns traffic into revenue — fully automated.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 card-glass rounded-xl p-4"
              >
                <CheckCircle2 size={16} className="text-[#6ee7b7] shrink-0" />
                <span className="text-sm text-zinc-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6ee7b7]/5 via-transparent to-[#818cf8]/5" />
        <div className="glow-dot" style={{ top: "20%", left: "30%", opacity: 0.6 }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <span className="tag mb-6 inline-block">Free Consultation</span>
          <h2 className="text-5xl font-light text-white tracking-tight mb-6 leading-tight">
            Ready to build your{" "}
            <span className="serif italic text-[#6ee7b7]">growth engine?</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg mb-10 max-w-md mx-auto">
            Let's talk about your goals. We'll map out a complete system — no
            fluff, no bloat, just results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#6ee7b7] text-[#09090b] font-semibold text-sm hover:bg-white transition-colors duration-200"
          >
            Get Free Consultation <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}