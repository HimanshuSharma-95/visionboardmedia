"use client";

import { useState, useRef, useCallback } from "react";
import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
  PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* ─────────────────────────────────────────────
   LOGOS
───────────────────────────────────────────── */
const ROW_SIZE = 14;
const rows = Array.from({ length: 3 }, (_, r) =>
  Array.from({ length: ROW_SIZE }, (_, i) => {
    const n = r * ROW_SIZE + i + 1;
    return { id: n, src: `/logos/${n}.png`, alt: `Client logo ${n}` };
  }),
);

const marqueeCss = `
@keyframes marquee-left {
  from { transform: translate3d(0,0,0); }
  to   { transform: translate3d(-50%,0,0); }
}
@keyframes marquee-right {
  from { transform: translate3d(-50%,0,0); }
  to   { transform: translate3d(0,0,0); }
}
`;

function LogoItem({
  logo,
}: {
  logo: { id: number; src: string; alt: string };
}) {
  return (
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      style={{
        height: "112px",
        width: "auto",
        maxWidth: "240px",
        objectFit: "contain",
        flexShrink: 0,
        transition: "transform .25s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  );
}

function MarqueeRow({
  logos,
  direction,
}: {
  logos: { id: number; src: string; alt: string }[];
  direction: "left" | "right";
}) {
  const track = [...logos, ...logos];
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "56px",
          width: "max-content",
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} 65s linear infinite`,
          willChange: "transform",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        {track.map((logo, i) => (
          <LogoItem key={`${logo.id}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const testimonials = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    role: "Owner, Sharma Electronics",
    color: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-700",
    tag: "Social Media",
    review:
      "Within 3 months our Instagram grew from 200 to 8,000 followers and store visits doubled. Vision Board Media completely transformed how we show up online.",
  },
  {
    initials: "PK",
    name: "Priya Kapoor",
    role: "Founder, PK Boutique",
    color: "from-sky-500 to-indigo-500",
    bgLight: "bg-sky-50",
    textColor: "text-sky-700",
    tag: "Shopify Store",
    review:
      "They built our Shopify store from scratch and it looks stunning. Sales came in within the first week of launch — the team is responsive and truly cares about growth.",
  },
  {
    initials: "AV",
    name: "Arjun Verma",
    role: "CEO, Verma Exports",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-700",
    tag: "Lead Generation",
    review:
      "Our WhatsApp campaign brought in 150+ inquiries in the first month alone. The ROI was incredible — Vision Board Media really knows their craft inside out.",
  },
  {
    initials: "NM",
    name: "Neha Malhotra",
    role: "Director, NM Interiors",
    color: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-700",
    tag: "Web Development",
    review:
      "Our website now ranks on Google and actually converts visitors. Three new clients reached out directly through the site within the first two weeks of going live.",
  },
  {
    initials: "SK",
    name: "Suresh Kumar",
    role: "MD, Kumar Pharma",
    color: "from-violet-500 to-pink-500",
    bgLight: "bg-violet-50",
    textColor: "text-violet-700",
    tag: "Full Branding",
    review:
      "Professional, creative, and results-driven. They handled branding, ads, and content end-to-end. Our brand now looks like it truly belongs among the top players.",
  },
];

function CardContent({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <>
      <div className={`h-1.5 w-full bg-linear-to-r ${t.color}`} />
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${t.color} text-sm font-bold text-white shadow-md`}
            >
              {t.initials}
            </div>
            <div>
              <p className="font-bold leading-tight text-zinc-900">{t.name}</p>
              <p className="mt-0.5 text-xs text-zinc-400">{t.role}</p>
            </div>
          </div>
          <span
            className={`shrink-0 rounded-full ${t.bgLight} ${t.textColor} px-3 py-1 text-xs font-semibold`}
          >
            {t.tag}
          </span>
        </div>
        <div className="mb-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="h-3.5 w-3.5 fill-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="relative">
          <Quote
            size={22}
            className="absolute -left-1 -top-1 fill-purple-100 text-purple-100"
          />
          <p className="relative pl-4 text-sm leading-relaxed text-zinc-600">
            {t.review}
          </p>
        </div>
      </div>
    </>
  );
}

function BackCard({
  t,
  promoted,
}: {
  t: (typeof testimonials)[0];
  promoted: boolean;
}) {
  return (
    <motion.div
      initial={{
        scale: 0.92,
        y: 14,
        opacity: 0.75,
        marginLeft: 10,
        marginRight: 10,
      }}
      animate={
        promoted
          ? { scale: 1, y: 0, opacity: 1, marginLeft: 0, marginRight: 0 }
          : {
              scale: 0.92,
              y: 14,
              opacity: 0.75,
              marginLeft: 10,
              marginRight: 10,
            }
      }
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        borderRadius: "1.5rem",
        overflow: "hidden",
        border: "1px solid rgba(228,228,231,0.8)",
        background: "#fff",
      }}
      className={`transition-shadow duration-500 ${
        promoted
          ? "shadow-[0_12px_40px_rgba(124,58,237,0.14),0_4px_12px_rgba(0,0,0,0.07)]"
          : "shadow-[0_4px_16px_rgba(124,58,237,0.06)]"
      }`}
    >
      <CardContent t={t} />
    </motion.div>
  );
}

function FrontCard({
  t,
  onSwipeLeft,
  onSwipeRight,
  onDrag,
}: {
  t: (typeof testimonials)[0];
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onDrag: (offsetX: number) => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-10, 10]);
  const opacity = useTransform(x, [-180, -60, 0, 60, 180], [0, 1, 1, 1, 0]);

  const handleDrag = useCallback(
    (_: unknown, info: PanInfo) => {
      onDrag(info.offset.x);
    },
    [onDrag],
  );
  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const fast = Math.abs(info.velocity.x) > 250;
      const far = Math.abs(info.offset.x) > 80;
      if (fast || far) {
        const dir = info.offset.x < 0 ? -1 : 1;
        animate(x, dir * 520, {
          type: "tween",
          duration: 0.22,
          ease: [0.4, 0, 1, 1],
        }).then(() => {
          dir < 0 ? onSwipeLeft() : onSwipeRight();
        });
      } else {
        animate(x, 0, { type: "spring", stiffness: 400, damping: 34 });
        onDrag(0);
      }
    },
    [x, onSwipeLeft, onSwipeRight, onDrag],
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        position: "absolute",
        inset: 0,
        zIndex: 10,
        cursor: "grab",
        willChange: "transform",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      dragMomentum={false}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: "grabbing", scale: 0.97 }}
      className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_12px_40px_rgba(124,58,237,0.14),0_4px_12px_rgba(0,0,0,0.07)]"
    >
      <CardContent t={t} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SHARED BACKGROUND WRAPPER
───────────────────────────────────────────── */
function SharedBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[50px_50px]" />
      <motion.div
        animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_65%)] blur-[100px]"
      />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-purple-200/60" />
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-purple-300/40" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-violet-200/50" />
      <div className="absolute -bottom-8  -right-8  h-44 w-44 rounded-full border border-violet-300/40" />
      {(
        [
          {
            cls: "left-[10%]  top-[12%]",
            dur: 4,
            sz: "h-2 w-2",
            col: "bg-purple-400",
          },
          {
            cls: "right-[12%] top-[20%]",
            dur: 5,
            sz: "h-2.5 w-2.5",
            col: "bg-violet-400",
          },
          {
            cls: "bottom-[18%] left-[7%]",
            dur: 6,
            sz: "h-1.5 w-1.5",
            col: "bg-purple-300",
          },
          {
            cls: "bottom-[30%] right-[8%]",
            dur: 4.5,
            sz: "h-2 w-2",
            col: "bg-violet-300",
          },
        ] as const
      ).map((s, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: i * 0.8 }}
          className={`absolute ${s.cls} ${s.sz} ${s.col} rounded-full shadow-[0_0_10px_rgba(147,51,234,0.55)]`}
        />
      ))}
    </>
  );
}

/* ─────────────────────────────────────────────
   LOGOS SECTION
───────────────────────────────────────────── */
export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <style>{marqueeCss}</style>
      <SharedBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-widest text-purple-500">
            TRUSTED BY BUSINESSES
          </p>
          <h2 className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl md:text-6xl">
            Brands we've worked with
          </h2>
          <p className="mt-4 text-base text-zinc-500 sm:text-lg">
            Proud to have partnered with 100+ businesses across industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-10"
        >
          <MarqueeRow logos={rows[0]} direction="left" />
          <MarqueeRow logos={rows[1]} direction="right" />
          <MarqueeRow logos={rows[2]} direction="left" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-5 py-2.5 text-sm text-purple-600">
            <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
            100+ brands trust Vision Board Media
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────────── */
export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const [current, setCurrent] = useState(0);
  const [promoted, setPromoted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [liveDragDir, setLiveDragDir] = useState<1 | -1 | 0>(0);

  const N = testimonials.length;
  const nextIdx = (current + 1) % N;
  const prevIdx = (current - 1 + N) % N;
  const peekIdx =
    animating || liveDragDir === 0
      ? direction === 1
        ? nextIdx
        : prevIdx
      : liveDragDir === 1
        ? nextIdx
        : prevIdx;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setLiveDragDir(0);
      setPromoted(true);
      setTimeout(() => {
        setCurrent((c) => (c + dir + N) % N);
        setPromoted(false);
        setAnimating(false);
      }, 500);
    },
    [animating, N],
  );

  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);
  const handleFrontDrag = useCallback((offsetX: number) => {
    setLiveDragDir(offsetX === 0 ? 0 : offsetX < 0 ? 1 : -1);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <SharedBackground />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-widest text-purple-500">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl md:text-6xl">
            What our clients say
          </h2>
          <p className="mt-4 text-base text-zinc-500 sm:text-lg">
            Real results from real businesses we've helped grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full select-none"
          style={{ height: 320 }}
        >
          <BackCard
            key={peekIdx}
            t={testimonials[peekIdx]}
            promoted={promoted}
          />
          <FrontCard
            key={current}
            t={testimonials[current]}
            onSwipeLeft={next}
            onSwipeRight={prev}
            onDrag={handleFrontDrag}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <button
            onClick={prev}
            disabled={animating}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] disabled:opacity-40"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === current || animating) return;
                  const fwd = (i - current + N) % N;
                  const bwd = (current - i + N) % N;
                  const dir: 1 | -1 = fwd <= bwd ? 1 : -1;
                  setDirection(dir);
                  setAnimating(true);
                  setPromoted(true);
                  setTimeout(() => {
                    setCurrent(i);
                    setPromoted(false);
                    setAnimating(false);
                  }, 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-purple-600"
                    : "w-2 bg-zinc-300 hover:bg-purple-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={animating}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] disabled:opacity-40"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-center text-xs text-zinc-400"
        >
          Swipe or drag to explore
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DEFAULT EXPORT — both together if needed
───────────────────────────────────────────── */
export default function ClientsAndTestimonials() {
  return (
    <>
      <ClientsSection />
      <TestimonialsSection />
    </>
  );
}
