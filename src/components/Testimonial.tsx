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
import { testimonials, SharedBackground } from "./shared";

/* ─────────────────────────────────────────────
   CARD CONTENT
   Mobile  → vertical: photo + name on top, review on bottom
   Desktop → horizontal: left photo | purple divider | right review
───────────────────────────────────────────── */
function CardContent({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden ">
      {/* Coloured top bar — unchanged */}
      <div className={`h-1.5 w-full shrink-0 bg-linear-to-r ${t.color}`} />

      {/* ── MOBILE: vertical stack ── */}
      <div className="flex flex-1 flex-col overflow-hidden sm:hidden">
        {/* Top: photo + name */}
        <div className="flex flex-col items-center justify-center gap-2 px-6 pt-5 pb-3">
          <img
            src={t.photo}
            alt={t.name}
            className="h-36 w-36 rounded-full object-cover object-top shadow-md ring-2 ring-purple-100"
          />
          <div className="text-center">
            <p className="text-sm font-bold leading-tight text-zinc-900">
              {t.name}
            </p>
            <p className="mt-0.5 text-xs text-zinc-400">{t.role}</p>
          </div>
        </div>

        {/* Slim purple horizontal divider */}
        <div className="mx-6 h-px shrink-0 rounded-full bg-purple-200" />

        {/* Bottom: tag, stars, review */}
        <div className="flex flex-1 flex-col justify-center gap-2.5 px-6 pt-3 pb-8">
          <span
            className={`w-fit rounded-full ${t.bgLight} ${t.textColor} px-3 py-1 text-xs font-semibold`}
          >
            {t.tag}
          </span>
          <div className="flex gap-0.5">
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
          <div className="relative ">
            <Quote
              size={18}
              className="absolute -left-1 -top-1 fill-purple-100 text-purple-100"
            />
            <p className="relative pl-4 text-xs leading-relaxed text-zinc-600">
              {t.review}
            </p>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: horizontal split (unchanged from previous) ── */}
      <div className="hidden flex-1 overflow-hidden sm:flex">
        {/* Left — photo, name, role */}
        <div className="flex w-[34%] shrink-0 flex-col items-center justify-center gap-3 px-6 py-6">
          <img
            src={t.photo}
            alt={t.name}
            className="h-36 w-36 rounded-full object-cover object-top shadow-md ring-2 ring-purple-100"
          />
          <div className="text-center">
            <p className="text-sm font-bold leading-tight text-zinc-900">
              {t.name}
            </p>
            <p className="mt-0.5 text-xs text-zinc-400">{t.role}</p>
          </div>
        </div>

        {/* Slim vertical purple divider */}
        <div className="my-6 w-px shrink-0 rounded-full bg-purple-200" />

        {/* Right — tag, stars, review */}
        <div className="flex flex-1 flex-col justify-center gap-3 px-6 py-6">
          <span
            className={`w-fit rounded-full ${t.bgLight} ${t.textColor} px-3 py-1 text-xs font-semibold`}
          >
            {t.tag}
          </span>
          <div className="flex gap-0.5">
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
              size={20}
              className="absolute -left-1 -top-1 fill-purple-100 text-purple-100"
            />
            <p className="relative pl-4 text-sm leading-relaxed text-zinc-600">
              {t.review}
            </p>
          </div>
        </div>
      </div>
    </div>
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
   TESTIMONIALS SECTION
───────────────────────────────────────────── */
export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

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
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Card height: ONE Tailwind scale drives both the wrapper and
            the absolutely-positioned stack inside it (which fills via
            inset-0). Previously a separate inline <style> media query
            forced the stack to 260px starting at the 640px breakpoint
            while this wrapper only changed at md:/lg: — two mismatched
            breakpoint systems created a gap that grew or shrank
            depending on viewport width. Now there's a single source
            of truth, so the space below the card is always the same
            fixed margin regardless of device. */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full select-none h-[400px] sm:h-[260px] md:h-[280px] lg:h-[260px]"
        >
          <div className="absolute inset-0">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 flex w-full max-w-[280px] items-center justify-between sm:max-w-sm"
        >
          <button
            onClick={prev}
            disabled={animating}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] disabled:opacity-40 sm:h-12 sm:w-12"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex flex-1 items-center justify-center gap-2 px-3">
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
                className={`h-2 shrink-0 rounded-full transition-all duration-300 ${
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
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] disabled:opacity-40 sm:h-12 sm:w-12"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-center text-xs text-zinc-400"
        >
          Swipe or drag to explore
        </motion.p>
      </div>
    </section>
  );
}

export default TestimonialsSection;
