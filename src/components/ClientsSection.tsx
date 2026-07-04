// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { rows, marqueeCss, MarqueeRow, SharedBackground } from "./shared";

// /* ─────────────────────────────────────────────
//    LOGOS / CLIENTS SECTION
// ───────────────────────────────────────────── */
// export function ClientsSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20"
//     >
//       <style>{marqueeCss}</style>
//       <SharedBackground />

//       <div className="relative z-10 mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-12 text-center"
//         >
//           <p className="mb-3 text-sm tracking-widest text-purple-500">
//             TRUSTED BY BUSINESSES
//           </p>
//           <h2 className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl md:text-6xl">
//             Brands we've worked with
//           </h2>
//           <p className="mt-4 text-base text-zinc-500 sm:text-lg">
//             Proud to have partnered with 100+ businesses across industries.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="flex flex-col gap-4 sm:gap-7 md:gap-10"
//         >
//           <MarqueeRow logos={rows[0]} direction="left" />
//           <MarqueeRow logos={rows[1]} direction="right" />
//           <MarqueeRow logos={rows[2]} direction="left" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="mt-10 flex justify-center"
//         >
//           <div className="flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-5 py-2.5 text-sm text-purple-600">
//             <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
//             100+ brands trust Vision Board Media
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ClientsSection;

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   LOGOS DATA
───────────────────────────────────────────── */
const ROW_SIZE = 14;
const rows = Array.from({ length: 3 }, (_, r) =>
  Array.from({ length: ROW_SIZE }, (_, i) => {
    const n = r * ROW_SIZE + i + 1;
    return { id: n, src: `/logos/${n}.png`, alt: `Client logo ${n}` };
  }),
);

/* ─────────────────────────────────────────────
   MARQUEE KEYFRAMES + RESPONSIVE SPEED
   Mobile gets a shorter animation-duration (faster
   scroll) via the media query below, without touching
   the desktop timing.
───────────────────────────────────────────── */
const marqueeCss = `
@keyframes marquee-left {
  from { transform: translate3d(0,0,0); }
  to   { transform: translate3d(-50%,0,0); }
}
@keyframes marquee-right {
  from { transform: translate3d(-50%,0,0); }
  to   { transform: translate3d(0,0,0); }
}
.marquee-track-left,
.marquee-track-right {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 65s;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.marquee-track-left { animation-name: marquee-left; }
.marquee-track-right { animation-name: marquee-right; }

@media (max-width: 640px) {
  .marquee-track-left,
  .marquee-track-right {
    animation-duration: 55s;
  }
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
      width={240}
      height={112}
      loading="eager"
      decoding="async"
      draggable={false}
      className="h-24 w-auto max-w-37.5 shrink-0 object-contain transition-transform duration-200 ease-out hover:scale-105 sm:h-16 sm:max-w-42.5 md:h-24 md:max-w-55 lg:h-28 lg:max-w-60"
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
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={`flex w-max items-center gap-6 sm:gap-10 md:gap-14 ${
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }`}
      >
        {track.map((logo, i) => (
          <LogoItem key={`${logo.id}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACKGROUND
   The big animated blur glow is desktop/tablet only —
   animating `scale` on a 700px, blur(100px) element
   forces heavy re-rasterization on mobile GPUs and was
   contributing to the jitter. Mobile gets a small,
   static (non-animated) glow instead.
───────────────────────────────────────────── */
function SectionBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* Desktop/tablet: animated glow */}
      <motion.div
        animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 hidden h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_65%)] blur-[100px] sm:block"
      />
      {/* Mobile: static, lightweight glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14)_0%,transparent_65%)] blur-2xl sm:hidden" />

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
   LOGOS / CLIENTS SECTION
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
      <SectionBackground />

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
          className="flex flex-col gap-4 sm:gap-7 md:gap-10"
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

export default ClientsSection;
