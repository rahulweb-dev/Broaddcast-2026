import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import CtaSection from "./components/CtaSection";
import AwardsSection from "./components/AwardsSection";
import BlogSection from "./components/BlogSection";
import MarqueeSection from "./components/MarqueeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection/>
      <CtaSection/>
      <AwardsSection/>
      <BlogSection/>
      <MarqueeSection/>
    </>
  );
}
