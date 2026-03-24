"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import {
  Layout,
  MousePointer,
  Smartphone,
  Users,
  ArrowRight,
  CheckCircle2,
  Eye,
  Layers,
  Lightbulb,
  TestTube2,
} from "lucide-react"

const services = [
  {
    icon: <Layout size={22} />,
    title: "UI Design",
    desc: "Pixel-perfect interfaces with purposeful visual hierarchy, color theory, and micro-details that build trust at first glance.",
    stat: "↑ 68% engagement",
  },
  {
    icon: <Users size={22} />,
    title: "User Research",
    desc: "Deep behavioral analysis, usability interviews, and heatmap studies to understand exactly how users think and navigate.",
    stat: "Evidence-based",
  },
  {
    icon: <MousePointer size={22} />,
    title: "Wireframing & Prototyping",
    desc: "Interactive Figma prototypes that validate flows before a single line of code is written — saving time and budget.",
    stat: "Zero surprises",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Responsive UX",
    desc: "Touch-optimized, fluid layouts that deliver the same premium feel on mobile, tablet, and widescreen.",
    stat: "All devices",
  },
]

const process = [
  {
    icon: <Lightbulb size={20} />,
    step: "01",
    title: "Discover",
    desc: "Stakeholder interviews, competitor audits, analytics review, and user personas to ground every decision in reality.",
  },
  {
    icon: <Layers size={20} />,
    step: "02",
    title: "Wireframe",
    desc: "Low-fidelity flows and sitemaps that map out every screen, state, and interaction before design begins.",
  },
  {
    icon: <Eye size={20} />,
    step: "03",
    title: "Design",
    desc: "High-fidelity UI with a polished design system — components, tokens, and guidelines built to scale.",
  },
  {
    icon: <TestTube2 size={20} />,
    step: "04",
    title: "Test & Refine",
    desc: "Real user testing sessions, A/B iterations, and data-backed refinements until the experience is frictionless.",
  },
]

const outcomes = [
  "Reduced drop-off & bounce rate",
  "Higher task completion rates",
  "Consistent cross-platform experience",
  "Accessible & WCAG-compliant",
  "Design system for future scale",
  "Faster developer handoff",
]

const stats = [
  { value: "2.8×", label: "Avg. conversion lift" },
  { value: "94%", label: "Client satisfaction" },
  { value: "40+", label: "Products shipped" },
]

export default function UIUXPage() {
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
          --accent: #a78bfa;
          --accent2: #f0abfc;
          --bg: #09090b;
          --surface: #111113;
          --border: rgba(255,255,255,0.07);
          --muted: #71717a;
        }

        .serif { font-family: 'Instrument Serif', Georgia, serif; }

        .glow-violet {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%);
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
        }

        .card-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
        }

        .tag-violet {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(167,139,250,0.12);
          color: var(--accent);
          border: 1px solid rgba(167,139,250,0.25);
        }

        .process-card {
          background: linear-gradient(145deg, rgba(167,139,250,0.05), rgba(240,171,252,0.03));
          border: 1px solid rgba(167,139,250,0.12);
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(167,139,250,0.06) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(167,139,250,0.15);
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden"
      >
        {/* Background glows */}
        <div className="glow-violet" style={{ top: "10%", right: "10%" }} />
        <div
          className="glow-violet"
          style={{
            bottom: "15%",
            left: "5%",
            background: "radial-gradient(circle, rgba(240,171,252,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Grid */}
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
              <span className="tag-violet">UI / UX Design</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-[4.25rem] font-light leading-[1.1] tracking-tight"
            >
              <span className="text-zinc-300">Design users</span>
              <br />
              <span className="serif italic text-white">can't forget.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md font-light"
            >
              We craft intuitive, research-backed interfaces that reduce
              friction, build trust, and turn casual visitors into loyal
              customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#a78bfa] text-[#09090b] font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                Start UX Strategy <ArrowRight size={15} />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/25 transition-colors duration-200"
              >
                See Our Process
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-12 flex items-center gap-6 flex-wrap"
            >
              {stats.map((s, i) => (
                <div key={i} className="stat-card rounded-xl px-5 py-3 text-center">
                  <p className="text-[#a78bfa] font-semibold text-xl">{s.value}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{s.label}</p>
                </div>
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
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#a78bfa]/20 to-[#f0abfc]/10 blur-2xl" />
            <Image
              src="/services/uiux.png"
              alt="UI UX Design"
              width={560}
              height={420}
              className="relative rounded-2xl border border-white/10 shadow-2xl object-cover"
            />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8 card-glass rounded-xl px-5 py-3.5"
            >
              <p className="text-xs text-zinc-500 mb-0.5">After redesign</p>
              <p className="text-sm font-semibold text-white">
                <span className="text-[#a78bfa]">↓ 54%</span> drop-off rate
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">
              What We Offer
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              Design{" "}
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
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#a78bfa] group-hover:bg-[#a78bfa]/10 transition-colors">
                    {item.icon}
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(167,139,250,0.1)",
                      color: "#a78bfa",
                      border: "1px solid rgba(167,139,250,0.2)",
                    }}
                  >
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[#a78bfa] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section
        id="process"
        className="py-28 px-6 lg:px-20 relative overflow-hidden border-y border-white/[0.05]"
      >
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
              How We Work
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight">
              Our UX{" "}
              <span className="serif italic text-zinc-400">Process</span>
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
                  <div className="p-2.5 rounded-xl bg-[#a78bfa]/10 text-[#a78bfa]">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-light text-zinc-700 group-hover:text-[#a78bfa] transition-colors">
                    {item.step}
                  </span>
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

      {/* ─── OUTCOMES ─── */}
      <section className="py-28 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-medium">
              What You Get
            </p>
            <h2 className="text-4xl font-light text-zinc-100 tracking-tight mb-6">
              Design that{" "}
              <span className="serif italic text-zinc-400">
                drives results
              </span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              Every design decision is tied to a business outcome. We don't
              design for aesthetics alone — we design for measurable impact.
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
                <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                <span className="text-sm text-zinc-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/5 via-transparent to-[#f0abfc]/5" />
        <div className="glow-violet" style={{ top: "20%", left: "35%", opacity: 0.5 }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <span className="tag-violet mb-6 inline-block">Free UX Audit</span>
          <h2 className="text-5xl font-light text-white tracking-tight mb-6 leading-tight">
            Ready to transform your{" "}
            <span className="serif italic text-[#a78bfa]">
              product experience?
            </span>
          </h2>
          <p className="text-zinc-400 font-light text-lg mb-10 max-w-md mx-auto">
            We'll audit your current product, identify friction points, and
            deliver a clear roadmap — completely free.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#a78bfa] text-[#09090b] font-semibold text-sm hover:bg-white transition-colors duration-200"
          >
            Get Free UX Audit <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}