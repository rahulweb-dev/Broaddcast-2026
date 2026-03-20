
"use client"
import { motion } from "framer-motion";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import Image  from "next/image";

const posts = [
  {
    img: blog1,
    category: "Branding",
    author: "Colene Landin",
    title: "Design can speak the in tongue of art force of commerce.",
  },
  {
    img: blog2,
    category: "Design",
    author: "Colene Landin",
    title: "Simplicity is process the obvious and adding meaningful.",
  },
  {
    img: blog3,
    category: "Digital",
    author: "Colene Landin",
    title: "Good design obvious, great design is more transparent.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-light-bg px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Our journal
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold text-foreground underline underline-offset-4 hover:no-underline"
          >
            Read all posts
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  className="w-full aspect-[6/4.3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-warm-gray">
                <span className="font-semibold text-foreground">{post.category}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-foreground leading-snug group-hover:text-warm-gray transition-colors">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


