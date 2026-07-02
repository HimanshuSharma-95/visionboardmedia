"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Megaphone,
  ShoppingBag,
  Code2,
  Palette,
  Share2,
  BadgePercent,
  MapPin,
  PackageSearch,
  Users,
  Target,
  Store,
  LayoutTemplate,
  UploadCloud,
  MousePointerClick,
  Gauge,
  TrendingUp,
  Layers,
  Cpu,
  AppWindow,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Shared motion presets — matches MeetVisionXSection / Testimonials  */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  para: string;
};

type Category = {
  id: string;
  eyebrow: string;
  heading: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  services: Service[];
  variant: "dark" | "grid";
};

const categories: Category[] = [
  {
    id: "marketing",
    eyebrow: "Visibility & Reach",
    heading: "Digital Marketing & Brand Growth",
    sub: "We get your brand in front of the right people, on the right platforms, and keep them coming back.",
    icon: Megaphone,
    variant: "dark",
    services: [
      {
        icon: Share2,
        title: "Social Media Management",
        para: "Consistent posting, content calendars, and community replies handled end-to-end — so your feed stays active and on-brand without eating your week.",
      },
      {
        icon: BadgePercent,
        title: "Advertising & Promotion",
        para: "Paid campaigns across Meta, Google, and beyond, built around real targeting and tested creatives instead of guesswork.",
      },
      {
        icon: MapPin,
        title: "Google My Business",
        para: "Your local listing optimized, verified, and actively managed so customers find you first when they search nearby.",
      },
      {
        icon: PackageSearch,
        title: "Product Promotion",
        para: "Launch pushes and ongoing campaigns that put individual products in front of buyers who are already looking to spend.",
      },
      {
        icon: Users,
        title: "Influencer Marketing",
        para: "Creator partnerships matched to your niche audience — sourced, briefed, and managed so collaborations actually convert.",
      },
      {
        icon: Target,
        title: "Lead Generation",
        para: "Funnels and capture systems built to turn anonymous traffic into qualified leads your sales team can actually close.",
      },
    ],
  },
  {
    id: "creative",
    eyebrow: "Visual Identity",
    heading: "Design & Creative",
    sub: "Every brand needs a face. We build the visual assets that make yours memorable and consistent everywhere it shows up.",
    icon: Palette,
    variant: "grid",
    services: [
      {
        icon: Palette,
        title: "Graphic Designing",
        para: "Social creatives, ads, packaging, and print — designed with one consistent visual language across every touchpoint.",
      },
      {
        icon: Layers,
        title: "Logo Designing",
        para: "A mark built to work everywhere: app icon, signage, merch, and the top of an invoice — distinct at any size.",
      },
      {
        icon: LayoutTemplate,
        title: "Catalogue & Brochures",
        para: "Print and digital catalogues that present your full product range clearly, so customers can browse and decide fast.",
      },
    ],
  },
  {
    id: "shopify",
    eyebrow: "E-Commerce",
    heading: "Shopify & Online Stores",
    sub: "From first setup to the checkout that finally converts — we build stores that are built to sell, not just to look good.",
    icon: ShoppingBag,
    variant: "dark",
    services: [
      {
        icon: Store,
        title: "Shopify Store Setup",
        para: "Domain, payments, shipping, and store structure configured correctly from day one — no patchwork left for later.",
      },
      {
        icon: LayoutTemplate,
        title: "Custom Store Design",
        para: "A storefront theme designed around your brand, not a stock template with your logo dropped on top.",
      },
      {
        icon: UploadCloud,
        title: "Product Upload",
        para: "Catalogues migrated and listed with clean variants, pricing, and imagery — ready to sell without manual cleanup.",
      },
      {
        icon: MousePointerClick,
        title: "Landing Pages",
        para: "Dedicated pages built for a single offer or campaign, designed to turn clicks into checkouts.",
      },
      {
        icon: Gauge,
        title: "Store Optimization",
        para: "Speed, navigation, and mobile performance tuned so browsers don't bounce before they buy.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Optimization",
        para: "Checkout flow, product pages, and CTAs refined using real behavior data to lift your conversion rate.",
      },
    ],
  },
  {
    id: "software",
    eyebrow: "Engineering",
    heading: "Custom Software & Web Applications",
    sub: "When off-the-shelf tools run out of road, we build the software your operations actually need — fast, scalable, and yours.",
    icon: Code2,
    variant: "grid",
    services: [
      {
        icon: Cpu,
        title: "SaaS Development",
        para: "Multi-tenant products built from the ground up — auth, billing, and core logic architected to scale with your users.",
      },
      {
        icon: AppWindow,
        title: "Web Applications",
        para: "Fast, responsive applications built on modern stacks, designed around how your users actually work.",
      },
      {
        icon: LayoutDashboard,
        title: "Custom Dashboards",
        para: "Real-time data, reports, and controls in one interface — built around the metrics that actually matter to your team.",
      },
      {
        icon: ShieldCheck,
        title: "Admin Panels",
        para: "Role-based access, content controls, and internal tools that let your team manage the business without touching code.",
      },
      {
        icon: Workflow,
        title: "Automation Systems",
        para: "Repetitive workflows — orders, notifications, reporting — automated end-to-end so nothing relies on manual follow-up.",
      },
      {
        icon: Code2,
        title: "Modern Stack",
        para: "Next.js, React, Node.js, and PostgreSQL — a proven, production-grade foundation built for performance and longevity.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Decorative grid background (white-section variant)                 */
/* ------------------------------------------------------------------ */

function GridBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute -top-32 right-[-10%] h-112 w-md rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] h-96 w-[24rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)",
        }}
      />
    </div>
  );
}

function DarkBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 h-128 w-lg -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service card                                                       */
/* ------------------------------------------------------------------ */

function ServiceCard({
  service,
  onDark,
}: {
  service: Service;
  onDark: boolean;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={[
        "group relative rounded-2xl p-6 sm:p-7 backdrop-blur-xl border transition-colors duration-300",
        onDark
          ? "bg-white/3 border-white/10 hover:border-purple-400/40 hover:bg-white/5"
          : "bg-white/70 border-purple-900/10 hover:border-purple-400/50 shadow-[0_4px_24px_rgba(124,58,237,0.06)] hover:shadow-[0_8px_32px_rgba(124,58,237,0.14)]",
      ].join(" ")}
    >
      <div
        className={[
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110",
          onDark
            ? "bg-linear-to-br from-purple-500/20 to-purple-700/10 border-purple-400/20"
            : "bg-linear-to-br from-purple-500/10 to-purple-700/5 border-purple-500/15",
        ].join(" ")}
      >
        <Icon
          className={
            onDark ? "h-5 w-5 text-purple-300" : "h-5 w-5 text-purple-600"
          }
        />
      </div>

      <h3
        className={[
          "mb-2 text-lg font-semibold tracking-tight",
          onDark ? "text-white" : "text-[#0c0a14]",
        ].join(" ")}
      >
        {service.title}
      </h3>

      <p
        className={[
          "text-sm leading-relaxed",
          onDark ? "text-gray-400" : "text-gray-600",
        ].join(" ")}
      >
        {service.para}
      </p>

      <div
        className={[
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
          "bg-linear-to-br from-purple-500/4 to-transparent",
        ].join(" ")}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Category section                                                   */
/* ------------------------------------------------------------------ */

function CategorySection({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const onDark = category.variant === "dark";
  const Icon = category.icon;

  return (
    <section
      ref={ref}
      className={[
        "relative px-5 sm:px-8 lg:px-12 py-20 sm:py-28",
        onDark ? "bg-[#06070D]" : "bg-[#fbfaff]",
      ].join(" ")}
    >
      {onDark ? <DarkBackdrop /> : <GridBackdrop />}

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="mb-12 sm:mb-16 max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className={[
              "mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase",
              onDark
                ? "border-purple-400/25 bg-purple-500/10 text-purple-300"
                : "border-purple-500/20 bg-purple-500/6 text-purple-700",
            ].join(" ")}
          >
            <Icon className="h-3.5 w-3.5" />
            {category.eyebrow}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className={[
              "text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] mb-4",
              onDark ? "text-white" : "text-[#0c0a14]",
            ].join(" ")}
          >
            {category.heading.split(" ").map((word, i) =>
              i === category.heading.split(" ").length - 1 ? (
                <span
                  key={i}
                  className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={[
              "text-base sm:text-lg leading-relaxed",
              onDark ? "text-gray-400" : "text-gray-600",
            ].join(" ")}
          >
            {category.sub}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {category.services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              onDark={onDark}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function ServicesHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#06070D] px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-5 sm:pb-10"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 h-144 w-xl -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.22), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(168,85,247,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, black 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stagger}
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-purple-300"
        >
          Our Services
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6"
        >
          One team. Every service{" "}
          <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            your brand needs to grow.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          From marketing and design to full-scale software — we plan, build, and
          run the systems that take your business from idea to scale, under one
          roof.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Closing CTA                                                         */
/* ------------------------------------------------------------------ */

function ServicesCTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#06070D] px-5 sm:px-8 lg:px-12 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 h-120 w-120 -translate-x-1/2 translate-y-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stagger}
        className="relative mx-auto max-w-2xl text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
        >
          Not sure where to{" "}
          <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            start?
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-400 mb-8 leading-relaxed"
        >
          Tell us what you're working on and we'll map out the right mix of
          services for it — no generic packages, just what your business
          actually needs.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-purple-700 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(168,85,247,0.5)] transition-all duration-300 hover:shadow-[0_0_32px_4px_rgba(168,85,247,0.4)] hover:-translate-y-0.5">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page export                                                        */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#06070D]">
      <ServicesHero />
      {categories.map((category, i) => (
        <CategorySection key={category.id} category={category} index={i} />
      ))}
      <ServicesCTA />
    </main>
  );
}
