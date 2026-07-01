"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

import {
  ShieldCheck,
  Sparkles,
  Clock,
  HeartHandshake,
  Award,
  TrendingUp,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

/* ------------------------------------------------------------------ */
/*  Motion presets — same easing/timing as the rest of the site        */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

/* ------------------------------------------------------------------ */
/*  Backgrounds                                                        */
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
        className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] h-[24rem] w-[24rem] rounded-full blur-3xl"
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
        className="absolute top-1/3 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const badges = [
  {
    icon: Award,
    label: "Quality-First Builds",
    sub: "Every project shipped to a production standard",
  },
  {
    icon: Clock,
    label: "On-Time Delivery",
    sub: "Timelines we set are timelines we hit",
  },
  {
    icon: ShieldCheck,
    label: "Transparent Process",
    sub: "You see progress at every step, not just the end",
  },
  {
    icon: HeartHandshake,
    label: "Long-Term Partners",
    sub: "We stick around after launch, not just before it",
  },
];

const marqueeStats = [
  "50+ Brands Scaled",
  "1M+ Combined Reach Generated",
  "4.9★ Average Client Rating",
  "10+ Years Combined Experience",
  "100% Transparent Reporting",
  "24/7 Client Support",
];

const socialPlatforms = [
  {
    icon: FaInstagram,
    name: "Instagram",
    metric: "+240%",
    metricLabel: "Avg. Reach Growth",
    fill: 92,
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    metric: "+180%",
    metricLabel: "Watch Time Growth",
    fill: 78,
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    metric: "+120%",
    metricLabel: "Engagement Growth",
    fill: 65,
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    metric: "+95%",
    metricLabel: "Lead Growth",
    fill: 58,
  },
];

/* ------------------------------------------------------------------ */
/*  Section: Logo Hero — trimmed to name + short blurb                 */
/* ------------------------------------------------------------------ */

function LogoHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#06070D] px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 sm:pb-24"
    >
      <DarkBackdrop />

      {/* Extra purple gradient layers */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(168,85,247,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.16), rgba(124,58,237,0.06) 45%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(124,58,237,0.08), transparent)",
        }}
      />

      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={stagger}
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          About Us
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6"
        >
          We're{" "}
          <span
            className="shimmer-text bg-clip-text text-transparent bg-purple-500"
            style={
              {
                // backgroundImage:
                //   "linear-gradient(90deg, #c4b5fd 0%, #a855f7 20%, #f3e8ff 40%, #a855f7 60%, #7c3aed 80%, #c4b5fd 100%)",
                // backgroundSize: "200% auto",
              }
            }
          >
            Vision Board Media.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md mx-auto"
        >
          A small, focused team helping brands grow online — from first sketch
          to the systems that run behind the scenes.
        </motion.p>
      </motion.div>

      <style jsx>{`
        .shimmer-text {
          animation: shimmer 5s linear infinite;
        }
        @keyframes shimmer {
          from {
            background-position: 0% center;
          }
          to {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Story — logo left, copy right                             */
/* ------------------------------------------------------------------ */

function StorySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#fbfaff] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <GridBackdrop />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 -mt-5 items-center gap-10 lg:gap-20 lg:grid-cols-[300px_1fr]">
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="flex justify-center lg:justify-start"
        >
          <img
            src="/vbmlogo.png"
            alt="Vision Board Media"
            className="w-90 sm:w-90 lg:w-90 h-auto object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-purple-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Our Story
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-3xl font-bold tracking-tight text-[#0c0a14] lg:text-4xl"
          >
            Helping ambitious brands{" "}
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              grow with confidence.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-lg leading-8 text-gray-600"
          >
            Vision Board Media brings together branding, marketing, design,
            software development, and AI automation under one roof. We help
            businesses build a strong digital presence, attract the right
            audience, and scale with strategies backed by creativity and
            technology. Every solution we create is focused on delivering
            measurable growth and long-term value.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Trust badges + running stat marquee                       */
/* ------------------------------------------------------------------ */

function TrustBadges() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const loopedStats = [...marqueeStats, ...marqueeStats];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#06070D] px-5 sm:px-8 lg:px-12 py-20 sm:py-28"
    >
      <DarkBackdrop />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Why brands{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              trust us.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-colors duration-300 hover:border-purple-400/40 hover:bg-white/[0.05]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-purple-700/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-white">
                  {badge.label}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {badge.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Running stat marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-16 sm:mt-20"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-8 py-3">
          {loopedStats.map((stat, i) => (
            <div
              key={`${stat}-${i}`}
              className="flex shrink-0 items-center gap-8"
            >
              <span className="whitespace-nowrap text-sm sm:text-base font-medium text-purple-200/80">
                {stat}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/50" />
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Social media growth                                       */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  value,
  start,
  duration = 1.4,
}: {
  value: string;
  start: boolean;
  duration?: number;
}) {
  const [display, setDisplay] = useState("0%");

  useEffect(() => {
    if (!start) return;

    const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, value, duration]);

  return <>{display}</>;
}

function SocialGrowthSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      className="relative bg-[#fbfaff] px-5 sm:px-8 lg:px-12 py-20 sm:py-28"
    >
      <GridBackdrop />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-purple-700 mx-auto"
          >
            <TrendingUp className="h-3.5 w-3.5" />
            Social Growth
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0c0a14] mb-4"
          >
            We don't just build,{" "}
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              we grow.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto"
          >
            Average performance lift our clients see across their social
            channels within the first 90 days of working with us.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-purple-900/10 bg-white/60 backdrop-blur-xl p-6 shadow-[0_8px_40px_rgba(124,58,237,0.06)] transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_12px_48px_rgba(124,58,237,0.14)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-purple-700/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-sm font-semibold text-[#0c0a14]">
                    {platform.name}
                  </p>
                </div>

                <p className="mb-1 text-2xl font-bold tracking-tight text-purple-600">
                  <AnimatedCounter value={platform.metric} start={inView} />
                </p>
                <p className="mb-4 text-xs text-gray-500">
                  {platform.metricLabel}
                </p>

                {/* Animated fill bar */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-purple-900/[0.06]">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={
                      inView ? { width: `${platform.fill}%` } : { width: "0%" }
                    }
                    transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-700"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Closing paragraph                                         */
/* ------------------------------------------------------------------ */

function ClosingSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#06070D] px-5 sm:px-8 lg:px-12 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 translate-y-1/3 rounded-full blur-3xl"
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
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5"
        >
          Still figuring out{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            where to start?
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-400 leading-relaxed mb-8"
        >
          That's the most common first conversation we have. Tell us where your
          brand is today and we'll help you map out where it can go — no
          pressure, no generic pitch decks, just a straight answer.
        </motion.p>
        <motion.div variants={fadeUp}>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_32px_4px_rgba(168,85,247,0.4)] hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page export                                                        */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#06070D]">
      <LogoHero />
      <StorySection />
      <TrustBadges />
      <SocialGrowthSection />
      <ClosingSection />
    </main>
  );
}
