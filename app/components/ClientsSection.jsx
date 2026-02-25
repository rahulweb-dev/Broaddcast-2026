
"use client"
import { motion } from "framer-motion";

const logos = ["Walmart", "InVision", "Netflix", "Logitech", "Amazon"];

const ClientsSection = () => {
  return (
    <section className="py-16 px-8 lg:px-16 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-warm-gray text-xl font-bold tracking-wide opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
