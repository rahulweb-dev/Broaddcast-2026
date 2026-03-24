"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeSection from "@/app/components/MarqueeSection";

gsap.registerPlugin(ScrollTrigger);

const brands = ["Saboo Autozone", "Aamoda", "Hyundai", "Hotel Inner Circle"];

// 🧲 Magnetic Button
const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(ref.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.3 });
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-black text-white px-8 py-3 text-sm font-semibold rounded-full"
    >
      {children}
    </button>
  );
};

export default function AboutPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".parallax-img", {
        y: -80,
        scrollTrigger: {
          trigger: ".parallax-img",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white text-[#1a1a1a]">

      {/* ================= TOP STRIP ================= */}
      <section className="bg-[#D0D5FF] py-32">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <h1 className="text-4xl font-bold relative inline-block fade-up">
            About us
            <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-400 -z-10"></span>
          </h1>

          <p className="text-sm max-w-xs text-gray-700 fade-up">
            We create high-impact digital experiences, blending strategy,
            creativity, and technology to help brands grow faster.
          </p>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="fade-up">
            <Image
              src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp"
              width={500}
              height={600}
              alt="About"
              className="w-full object-cover parallax-img"
            />

            <p className="mt-4 text-4xl font-semibold">
              10+
              <span className="block text-sm font-normal text-gray-500">
                Years of digital excellence
              </span>
            </p>
          </div>

          {/* Right Content */}
          <div className="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              We’re a performance-driven digital agency.
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We partner with ambitious brands to build meaningful digital
              experiences. From branding and UI/UX design to performance
              marketing and development, we deliver solutions that drive real
              growth and measurable results.
            </p>

            <div className="flex items-center gap-6">
              <MagneticButton>
                LET'S WORK TOGETHER
              </MagneticButton>

              <span className="text-sm font-medium">
                +91 90000 00000
              </span>
            </div>

            <div className="flex gap-10 mt-10 text-gray-500 text-sm">
              {brands.map((brand, index) => (
                <span key={index}>{brand}</span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="relative h-[500px] overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/03/demo-digital-agency-01.jpg.webp"
            fill
            alt="Video"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6 fade-up">

          <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mb-6">
            ▶
          </div>

          <h2 className="text-3xl font-semibold max-w-xl">
            A forward-thinking team crafting digital products,
            brands, and experiences that stand out.
          </h2>

        </div>

      </section>

      <MarqueeSection />

    </div>
  );
}