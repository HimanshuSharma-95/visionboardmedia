"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  MotionValue,
} from "framer-motion";

import {
  Compass,
  Target,
  Sparkles,
  Globe,
  Cpu,
  Rocket,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────── */
const STEP_HEIGHT = 420; // vertical space each step occupies on desktop, px
const STEPS_COUNT = 6;
const PATH_TOP_PAD = 80;
const PATH_BOTTOM_PAD = 80;
const SVG_WIDTH = 1000; // desktop viewBox width, scales to container
const TOTAL_HEIGHT = STEP_HEIGHT * STEPS_COUNT;

type Step = {
  num: string;
  title: string;
  description: string;
  services: string[];
  icon: LucideIcon;
  techBadges?: string[];
  side: "left" | "right";
};

const steps: Step[] = [
  {
    num: "01",
    title: "Business Discovery",
    description:
      "We understand your business, audience, competitors and opportunities to build a strong growth foundation.",
    services: [],
    icon: Compass,
    side: "left",
  },
  {
    num: "02",
    title: "Marketing & Visibility",
    description:
      "We help your brand reach the right audience through strategic marketing and stronger online presence.",
    services: [
      "Digital Marketing",
      "Social Media Management",
      "Advertising & Promotion",
      "Google My Business",
      "Influencer Marketing",
      "Lead Generation",
    ],
    icon: Target,
    side: "right",
  },
  {
    num: "03",
    title: "Branding & Creative Design",
    description:
      "We build memorable brand identities with visuals that create trust and recognition.",
    services: [
      "Logo Designing",
      "Graphic Designing",
      "Catalogue & Brochures",
      "Product Promotion",
    ],
    icon: Sparkles,
    side: "left",
  },
  {
    num: "04",
    title: "Website & Online Experience",
    description:
      "We create modern digital experiences that help businesses showcase products and convert visitors into customers.",
    services: [
      "Landing Pages",
      "Conversion Optimization",
      "Shopify Store Setup",
      "Custom Store Design",
      "Product Upload",
      "Store Optimization",
    ],
    icon: Globe,
    side: "right",
  },
  {
    num: "05",
    title: "Custom Solutions & Automation",
    description:
      "We build systems that simplify operations, automate workflows and support long-term business growth.",
    services: [
      "Custom Software",
      "SaaS Development",
      "Web Applications",
      "Custom Dashboards",
      "Admin Panels",
      "Automation Systems",
    ],
    icon: Cpu,
    techBadges: ["Next.js", "React", "Node.js", "PostgreSQL"],
    side: "left",
  },
  {
    num: "06",
    title: "Optimize & Scale",
    description:
      "We continuously analyze performance, improve results and help businesses scale sustainably.",
    services: [
      "Lead Generation",
      "Analytics",
      "Performance Monitoring",
      "Conversion Optimization",
    ],
    icon: Rocket,
    side: "right",
  },
];

/* ─────────────────────────────────────────────
   DESKTOP PATH GEOMETRY
   A single smooth S-curve running down the section.
   Computed once and reused for: the dim base path,
   the glowing progress path, and node positions.
───────────────────────────────────────────── */
function buildPathData() {
  const cx = SVG_WIDTH / 2;
  const swing = 160; // how far the curve travels left/right

  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= STEPS_COUNT; i++) {
    const y =
      PATH_TOP_PAD +
      (i / STEPS_COUNT) * (TOTAL_HEIGHT - PATH_TOP_PAD - PATH_BOTTOM_PAD);
    const dir = i % 2 === 0 ? -1 : 1;
    const x = cx + dir * swing * (i === 0 || i === STEPS_COUNT ? 0.35 : 1);
    points.push({ x, y });
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  const nodeYs = steps.map((_, i) => {
    const yTop =
      PATH_TOP_PAD +
      (i / STEPS_COUNT) * (TOTAL_HEIGHT - PATH_TOP_PAD - PATH_BOTTOM_PAD);
    const yBottom =
      PATH_TOP_PAD +
      ((i + 1) / STEPS_COUNT) * (TOTAL_HEIGHT - PATH_TOP_PAD - PATH_BOTTOM_PAD);
    return (yTop + yBottom) / 2;
  });

  return { d, nodeYs };
}

const { d: PATH_D, nodeYs: NODE_YS } = buildPathData();

/* ─────────────────────────────────────────────
   BACKGROUND ORBS
───────────────────────────────────────────── */
function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-[8%] h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,transparent_70%)] blur-[90px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-[38%] h-130 w-130 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,transparent_70%)] blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] bottom-[6%] h-115 w-115 rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.24)_0%,transparent_70%)] blur-[90px]"
      />
      {/* subtle noise/stars */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 0.5px, transparent 0.5px), radial-gradient(circle at 70% 65%, white 0.5px, transparent 0.5px), radial-gradient(circle at 40% 80%, white 0.5px, transparent 0.5px)",
          backgroundSize: "180px 180px, 220px 220px, 260px 260px",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   GLOWING PATH (desktop S-curve only — mobile uses
   a simpler inline connector, see MobileTimelineCard)
───────────────────────────────────────────── */
function GlowPath({
  progress,
  pathD,
  viewBoxWidth,
  viewBoxHeight,
}: {
  progress: MotionValue<number>;
  pathD: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
}) {
  const dashOffset = useTransform(progress, [0, 1], [1, 0]);

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="none"
      className="absolute left-0 top-0 h-full w-full"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <filter id="pathBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* dim base path, always visible at low opacity */}
      <path
        d={pathD}
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={3}
        strokeLinecap="round"
      />

      {/* glow blur layer, follows scroll progress */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#pathGradient)"
        strokeWidth={6}
        strokeLinecap="round"
        filter="url(#pathBlur)"
        pathLength={1}
        style={{ pathLength: progress, strokeDashoffset: dashOffset }}
        strokeDasharray="1"
        opacity={0.9}
      />

      {/* crisp core line on top of the glow */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#pathGradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        pathLength={1}
        style={{ pathLength: progress, strokeDashoffset: dashOffset }}
        strokeDasharray="1"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE NODE — glow circle + pulse + orbiting particles
───────────────────────────────────────────── */
function TimelineNode({
  y,
  progress,
  start,
  end,
}: {
  y: number;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const active = useTransform(progress, [start, end], [0, 1]);
  const scale = useTransform(active, [0, 1], [0.6, 1]);
  const glowOpacity = useTransform(active, [0, 1], [0.15, 1]);

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top: y, width: 0, height: 0 }}
    >
      <motion.div
        style={{ scale, opacity: glowOpacity }}
        className="relative -translate-x-1/2 -translate-y-1/2"
      >
        {/* pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          }}
        />
        {/* core node */}
        <span
          className="relative block h-3.5 w-3.5 rounded-full"
          style={{
            background: "linear-gradient(135deg, #C084FC, #7C3AED)",
            boxShadow:
              "0 0 16px 4px rgba(168,85,247,0.7), 0 0 32px 10px rgba(109,40,217,0.35)",
          }}
        />
        {/* orbiting particles */}
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            initial={{ rotate: i * 180 }}
            animate={{ rotate: i * 180 + 360 }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
          >
            <span
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full"
              style={{
                background: i === 0 ? "#C084FC" : "#7C3AED",
                boxShadow: `0 0 6px 1px ${i === 0 ? "#C084FC" : "#7C3AED"}`,
              }}
            />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CARD CONTENT (shared between desktop + mobile cards)
───────────────────────────────────────────── */
function CardBody({ step, compact }: { step: Step; compact?: boolean }) {
  const Icon = step.icon;

  if (compact) {
    return (
      <>
        <div className="mb-3 flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(109,40,217,0.2))",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Icon size={16} strokeWidth={1.75} className="text-white" />
          </div>
          <span
            className="text-xs font-semibold tracking-widest"
            style={{
              background: "linear-gradient(135deg, #C084FC, #7C3AED)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {step.num}
          </span>
        </div>

        <h3 className="mb-1.5 text-base font-semibold leading-snug text-white">
          {step.title}
        </h3>

        <p className="mb-3 text-[0.8rem] leading-relaxed text-white/60">
          {step.description}
        </p>

        {step.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {step.services.map((s) => (
              <span
                key={s}
                className="rounded-full px-2.5 py-0.5 text-[0.65rem] text-white/70"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {step.techBadges && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {step.techBadges.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(124,58,237,0.16))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#d8b4fe",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="mb-5 flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(109,40,217,0.2))",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Icon size={22} strokeWidth={1.75} className="text-white" />
        </div>
        <span
          className="text-sm font-semibold tracking-widest"
          style={{
            background: "linear-gradient(135deg, #C084FC, #7C3AED)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {step.num}
        </span>
      </div>

      <h3 className="mb-3 text-2xl font-semibold leading-tight text-white sm:text-[1.7rem]">
        {step.title}
      </h3>

      <p className="mb-5 text-[0.95rem] leading-relaxed text-white/60">
        {step.description}
      </p>

      {step.services.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {step.services.map((s) => (
            <span
              key={s}
              className="rounded-full px-3 py-1 text-xs text-white/70"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {step.techBadges && (
        <div className="mt-4 flex flex-wrap gap-2">
          {step.techBadges.map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(124,58,237,0.16))",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#d8b4fe",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP TIMELINE CARD — alternates left/right,
   fades in with y + scale + blur
───────────────────────────────────────────── */
function DesktopTimelineCard({ step }: { step: Step }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });
  const alignRight = step.side === "right";

  return (
    <div
      ref={ref}
      className={`relative z-10 flex w-full pl-20 pr-10 ${
        alignRight ? "md:justify-end" : "md:justify-start"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
        animate={
          isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}
        }
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-105 rounded-[28px] border p-7 sm:p-8"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.12)",
          boxShadow:
            "0 8px 32px -8px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.08)",
        }}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <CardBody step={step} />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE TIMELINE CARD — compact, sits beside an
   inline node dot, fades in from the left. Sized
   to its own content so cards never overlap.
───────────────────────────────────────────── */
function MobileTimelineCard({ step, isLast }: { step: Step; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <div ref={ref} className={`relative flex gap-3 ${isLast ? "" : "pb-5"}`}>
      {/* node column */}
      <div className="relative flex w-6 shrink-0 flex-col items-center">
        <motion.span
          initial={{ scale: 0.5, opacity: 0.3 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="relative mt-1.5 block h-3 w-3 shrink-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #C084FC, #7C3AED)",
            boxShadow: "0 0 12px 3px rgba(168,85,247,0.6)",
          }}
        />
        {!isLast && (
          <motion.span
            initial={{ height: "0%" }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-1 w-0.5 flex-1 origin-top rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #A855F7, rgba(109,40,217,0.25))",
            }}
          />
        )}
      </div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-1 w-full min-w-0 rounded-2xl border p-4"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.12)",
          boxShadow:
            "0 6px 20px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.08)",
        }}
      >
        <CardBody step={step} compact />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export function HowWeWorkTimeline() {
  const desktopSectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopSectionRef,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section className="relative overflow-hidden bg-[#06070D] py-0 pb-20 sm:py-24 md:py-10">
      <BackgroundOrbs />

      {/* header */}
      <div
        ref={headerRef}
        className="relative z-10 mx-auto mb-10 max-w-4xl px-5 text-center sm:mb-16 md:mb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-3 text-sm tracking-widest text-purple-400"
        >
          OUR PROCESS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-7xl"
        >
          How We Turn Ideas Into{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#C084FC,#A855F7,#6D28D9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Growth
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-3 max-w-2xl text-[0.8rem] leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg"
        >
          From strategy and branding to marketing, e-commerce and software,
          every step is designed to scale your business.
        </motion.p>
      </div>

      {/* ── DESKTOP / TABLET: S-curve, alternating cards ── */}
      <div
        ref={desktopSectionRef}
        className="relative mx-auto hidden max-w-5xl md:block"
        style={{ height: TOTAL_HEIGHT }}
      >
        <GlowPath
          progress={desktopProgress}
          pathD={PATH_D}
          viewBoxWidth={SVG_WIDTH}
          viewBoxHeight={TOTAL_HEIGHT}
        />

        {NODE_YS.map((y, i) => {
          const start = i / STEPS_COUNT;
          const end = (i + 1) / STEPS_COUNT;
          return (
            <TimelineNode
              key={i}
              y={y}
              progress={desktopProgress}
              start={start}
              end={end}
            />
          );
        })}

        <div
          className="relative flex flex-col"
          style={{ height: TOTAL_HEIGHT }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-center"
              style={{ height: STEP_HEIGHT }}
            >
              <DesktopTimelineCard step={step} />
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: compact stacked cards, connecting line grows per-card ── */}
      <div className="relative mx-auto block w-full max-w-md px-5 md:hidden">
        {steps.map((step, i) => (
          <MobileTimelineCard
            key={step.num}
            step={step}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default HowWeWorkTimeline;
