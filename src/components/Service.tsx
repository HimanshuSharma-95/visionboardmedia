"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Digital Marketing",
    items: [
      "Social Media Management",
      "Advertising & Promotion",
      "Google My Business",
      "Product Promotion",
      "Influencer Marketing",
      "Catalogue & Brochures",
      "Graphic Designing",
      "Logo Designing",
      "Lead Generation",
    ],
  },
  {
    title: "Shopify",
    items: [
      "Shopify Store Setup",
      "Custom Store Design",
      "Product Upload",
      "Landing Pages",
      "Store Optimization",
      "Conversion Optimization",
    ],
  },
  {
    title: "Custom Software",
    items: [
      "SaaS Development",
      "Web Applications",
      "Custom Dashboards",
      "Admin Panels",
      "Automation Systems",
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
  },
];

// Slide directions: left → right → left
const slideDirections = ["left", "right", "left"] as const;

function MobileServiceCard({
  service,
  direction,
  index,
}: {
  service: (typeof services)[0];
  direction: "left" | "right";
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 2,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full rounded-3xl border border-white/10 bg-[#111111] p-6"
    >
      <ServiceCard service={service} />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "start 5%"],
  });

  const x1 = useTransform(scrollYProgress, [0, 0.7], [0, -300]);
  const x2 = useTransform(scrollYProgress, [0, 0.7], [0, 0]);
  const x3 = useTransform(scrollYProgress, [0, 0.7], [0, 300]);
  const y1 = useTransform(scrollYProgress, [0, 0.8], [0, -20]);
  const y3 = useTransform(scrollYProgress, [0, 0.8], [0, 20]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.8], [-10, 0]);
  const rotate3 = useTransform(scrollYProgress, [0, 0.8], [10, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.96]);

  const desktopCardClass = `
    group absolute flex h-[540px] w-full max-w-[370px] flex-col
    overflow-hidden rounded-3xl border border-white/10 bg-[#111111]
    p-8 transition-all duration-500
    hover:-translate-y-4 hover:border-purple-500
    hover:shadow-[0_0_100px_rgba(147,51,234,0.35)]
  `;

  // ── Mobile layout ───────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="relative overflow-hidden bg-[#09090B] px-5 py-20">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-[120px]" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 mb-10 text-center"
        >
          <p className="mb-3 text-sm tracking-widest text-purple-400">
            OUR SERVICES
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Everything your business
            <br />
            needs to grow online.
          </h2>
        </motion.div>

        {/* Alternating slide-in cards */}
        <div className="relative z-10 flex flex-col gap-5">
          {services.map((service, i) => (
            <MobileServiceCard
              key={service.title}
              service={service}
              direction={slideDirections[i]}
              index={i}
            />
          ))}
        </div>

        <div className="relative z-10 mt-10 flex justify-center">
          <Link
            href="/services"
            className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-purple-600
      px-6
      py-3
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-purple-500
      hover:shadow-[0_0_40px_rgba(147,51,234,0.45)]
    "
          >
            Explore All Services
          </Link>
        </div>
      </section>
    );
  }

  // ── Desktop layout: original scroll-driven fan animation ────────────
  return (
    <section
      ref={ref}
      className="relative min-h-[130vh] overflow-hidden bg-[#09090B] px-6 py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-225 w-225 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-[140px]" />

      {/* Sparkles */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_40px_#9333ea]"
      />
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-[15%] top-[25%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_40px_#8b5cf6]"
      />

      {/* Heading */}
      <div className="relative z-20 text-center">
        <p className="mb-4 text-purple-400">OUR SERVICES</p>
        <h2 className="text-5xl font-bold text-white md:text-7xl">
          Everything your business
          <br />
          needs to grow online.
        </h2>
      </div>

      {/* Sticky fan area */}
      <div className="sticky top-28 mt-24 flex h-130 items-center justify-center">
        <motion.div
          style={{ x: x1, y: y1, rotate: rotate1, scale }}
          className={desktopCardClass}
        >
          <ServiceCard service={services[0]} />
        </motion.div>

        <motion.div style={{ x: x2, y: 8, scale }} className={desktopCardClass}>
          <ServiceCard service={services[1]} />
        </motion.div>

        <motion.div
          style={{ x: x3, y: y3, rotate: rotate3, scale }}
          className={desktopCardClass}
        >
          <ServiceCard service={services[2]} />
        </motion.div>
      </div>

      <div className="relative z-20 mt-25 flex justify-center">
        <Link
          href="/services"
          className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-purple-600
      px-7
      py-3
      text-base
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-purple-500
      hover:shadow-[0_0_50px_rgba(147,51,234,0.45)]
    "
        >
          Explore All Services
        </Link>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: { title: string; items: string[] };
}) {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold text-white lg:mb-8 lg:text-3xl">
        {service.title}
      </h3>
      <div className="space-y-3 lg:space-y-4">
        {service.items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-zinc-400 transition-all duration-300 hover:translate-x-2 hover:text-purple-300"
          >
            <div className="h-2 w-2 shrink-0 rounded-full bg-purple-500" />
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
