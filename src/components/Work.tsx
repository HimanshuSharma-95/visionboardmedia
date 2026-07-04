// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// /* ──────────────────────────────────────────────────────────────
//    Replace `src` with your own image/video poster for each project.
//    `href` is where the card links when clicked — point it at the
//    live site, case study page, or a video file.

//    `aspect` controls the card's shape so the row doesn't look like
//    a uniform grid. Each one is sized to match your real screenshot
//    ratios so nothing gets over-cropped:
//    - "phone"   -> 636 x 1378  source  (ratio ≈ 0.462, narrow + tall)
//    - "tall"    -> 1098 x 1378 source  (ratio ≈ 0.797, medium + tall)
//    - "desktop" -> 2880 x 1622 source  (ratio ≈ 1.776, wide + short)
//    ────────────────────────────────────────────────────────────── */
// type Aspect = "phone" | "tall" | "desktop";

// const topRow: {
//   title: string;
//   tag: string;
//   src: string;
//   href: string;
//   aspect: Aspect;
// }[] = [
//   {
//     title: "Ganpatis.in",
//     tag: "Shopify E-Commerce",
//     src: "/Images/gnweb.webp",
//     href: "https://ganpatis.in/",
//     aspect: "desktop",
//   },
//   {
//     title: "Chefspecial.in",
//     tag: "Shopify E-Commerce",
//     src: "/Images/chefmob.webp",
//     href: "https://chefspecial.in/",
//     aspect: "phone",
//   },
//   {
//     title: "Csiboxing.com",
//     tag: "Shopify E-Commerce",
//     src: "/Images/csiweb.webp",
//     href: "https://www.csiboxing.com/",
//     aspect: "desktop",
//   },
//   {
//     title: "Ganpatis.in",
//     tag: "Shopify E-Commerce",
//     src: "/Images/gntab.png",
//     href: "https://ganpatis.in/",
//     aspect: "tall",
//   },
//   {
//     title: "Tiffinvala.com",
//     tag: "Custom Web-App & Dashboard (Next.js, Express.js)",
//     src: "/Images/tvmob.png",
//     href: "https://www.tiffinvala.com/",
//     aspect: "phone",
//   },
// ];

// const bottomRow: {
//   title: string;
//   tag: string;
//   src: string;
//   href: string;
//   aspect: Aspect;
// }[] = [
//   {
//     title: "Alustaad.com",
//     tag: "Shopify E-Commerce",
//     src: "/Images/altab.webp",
//     href: "https://alustaad.com/",
//     aspect: "tall",
//   },
//   {
//     title: "Outlawdriftco.in",
//     tag: "Shopify E-Commerce",
//     src: "/Images/odcmob.png",
//     href: "https://outlawdriftco.in/",
//     aspect: "phone",
//   },
//   {
//     title: "Chefspecial.in",
//     tag: "Shopify E-Commerce",
//     src: "/Images/chefweb.webp",
//     href: "https://chefspecial.in/",
//     aspect: "desktop",
//   },
//   {
//     title: "Tiffinvala.com",
//     tag: "Custom Web-App & Dashboard (Next.js, Express.js)",
//     src: "/Images/tvmob1.png",
//     href: "https://www.tiffinvala.com/",
//     aspect: "phone",
//   },
//   {
//     title: "Outlawdriftco.in",
//     tag: "Shopify E-Commerce",
//     src: "/Images/odcweb.webp",
//     href: "https://outlawdriftco.in/",
//     aspect: "desktop",
//   },
// ];

// /* Mobile sizes reduced so more cards are visible at once.
//    Widths scaled proportionally to preserve each aspect ratio.
//    md: breakpoint and above is unchanged from original. */
// const ASPECT_CLASSES: Record<Aspect, string> = {
//   phone: "h-[260px] w-[120px] md:h-[460px] md:w-[212px]",
//   tall: "h-[260px] w-[207px] md:h-[460px] md:w-[367px]",
//   desktop: "h-[260px] w-[462px] md:h-[460px] md:w-[817px]",
// };

// function ProjectCard({
//   title,
//   tag,
//   src,
//   href,
//   aspect,
// }: {
//   title: string;
//   tag: string;
//   src: string;
//   href: string;
//   aspect: Aspect;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       className={`
//         group
//         relative
//         block
//         shrink-0
//         self-center
//         overflow-hidden
//         rounded-2xl
//         bg-zinc-900
//         transition-all
//         duration-500
//         ${ASPECT_CLASSES[aspect]}
//       `}
//       style={{
//         boxShadow:
//           "0 2px 8px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.35), 0 25px 60px rgba(0,0,0,0.35), 0 0 60px rgba(124,58,237,0.06)",
//       }}
//     >
//       {/* Image layer — masked so it fades softly on all four edges.
//           object-top anchors the image to the top so only the bottom
//           gets cropped, never the top of the screenshot. */}
//       <div
//         className="absolute inset-0"
//         style={{
//           maskImage:
//             "radial-gradient(ellipse 85% 85% at 50% 50%, black 55%, transparent 100%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 85% 85% at 50% 50%, black 55%, transparent 100%)",
//         }}
//       >
//         <Image
//           src={src}
//           alt={title}
//           fill
//           sizes="(min-width: 768px) 820px, 680px"
//           className="
//             object-cover
//             object-top
//             opacity-90
//             transition-all
//             duration-700
//             ease-out
//             group-hover:scale-105
//             group-hover:opacity-100
//           "
//         />
//       </div>

//       {/* Gradient scrim for legibility */}
//       <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

//       {/* Soft inner glow ring on hover */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           rounded-2xl
//           opacity-0
//           transition-opacity
//           duration-500
//           group-hover:opacity-100
//         "
//         style={{
//           boxShadow: "inset 0 0 40px rgba(168,85,247,0.18)",
//         }}
//       />

//       {/* <div className="absolute bottom-0 left-0 w-full p-5">
//         <p className="text-xs font-medium uppercase tracking-wider text-purple-300/80">
//           {tag}
//         </p>
//         <p className="mt-1 text-xl font-semibold text-white">{title}</p>
//       </div> */}

//       <div className="absolute bottom-0 left-0 w-full p-3 md:p-5">
//         <p
//           className="
//       text-[9px]
//       leading-tight
//       font-medium
//       uppercase
//       tracking-wide
//       text-purple-300/80
//       md:text-xs
//       md:tracking-wider
//     "
//         >
//           {tag}
//         </p>

//         <p
//           className="
//       mt-1
//       text-sm
//       font-semibold
//       leading-tight
//       text-white
//       md:text-xl
//     "
//         >
//           {title}
//         </p>
//       </div>
//     </a>
//   );
// }

// function MarqueeRow({
//   items,
//   direction,
//   speed,
// }: {
//   items: typeof topRow;
//   direction: "left" | "right";
//   speed: number;
// }) {
//   const doubled = [...items, ...items];

//   return (
//     <div className="relative w-full overflow-hidden py-10">
//       <motion.div
//         className="flex w-max items-center gap-6 px-3"
//         animate={{
//           x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
//         }}
//         transition={{
//           duration: speed,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {doubled.map((item, i) => (
//           <ProjectCard key={`${item.title}-${i}`} {...item} />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// function HexShape({
//   size,
//   strokeColor,
//   fillColor,
//   strokeWidth = 1.2,
// }: {
//   size: number;
//   strokeColor: string;
//   fillColor?: string;
//   strokeWidth?: number;
// }) {
//   return (
//     <svg
//       width={size}
//       height={size * 0.866}
//       viewBox="0 0 100 86.6"
//       className="pointer-events-none"
//     >
//       <path
//         d="M25 0 L75 0 L100 43.3 L75 86.6 L25 86.6 L0 43.3 Z"
//         fill={fillColor ?? "none"}
//         stroke={strokeColor}
//         strokeWidth={strokeWidth}
//       />
//     </svg>
//   );
// }

// export default function Work() {
//   const sectionRef = useRef(null);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-black py-24 sm:py-32"
//     >
//       {/* Richer multi-stop black -> purple-tinted gradient for depth */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.16) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(168,85,247,0.14) 0%, transparent 45%), linear-gradient(180deg, #000000 0%, #0a0512 35%, #0d0618 65%, #000000 100%)",
//         }}
//       />

//       {/* Decorative hexagon accent shapes */}
//       <div className="pointer-events-none absolute -right-16 -top-10 opacity-25 sm:right-6 sm:top-10">
//         <HexShape
//           size={180}
//           strokeColor="rgba(168,85,247,0.55)"
//           strokeWidth={1.5}
//         />
//       </div>
//       <div className="pointer-events-none absolute -left-10 top-1/3 opacity-[0.14] sm:left-10">
//         <HexShape size={120} strokeColor="rgba(124,58,237,0.6)" />
//       </div>
//       <div className="pointer-events-none absolute bottom-10 right-[12%] opacity-20">
//         <HexShape size={90} strokeColor="rgba(192,132,252,0.6)" />
//       </div>
//       <div className="pointer-events-none absolute -bottom-16 -left-16 opacity-[0.16]">
//         <HexShape
//           size={220}
//           strokeColor="rgba(124,58,237,0.5)"
//           strokeWidth={1.5}
//         />
//       </div>
//       <div className="pointer-events-none absolute left-1/2 top-[8%] opacity-10">
//         <HexShape size={60} strokeColor="rgba(216,180,254,0.7)" />
//       </div>

//       {/* Ambient purple glow */}
//       <motion.div
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.5, 0.8, 0.5],
//         }}
//         transition={{ duration: 9, repeat: Infinity }}
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/3
//           h-175
//           w-175
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)]
//           blur-[60px]
//         "
//       />

//       {/* Heading */}
//       <div className="relative z-10 mx-auto mb-14 flex max-w-7xl items-end justify-between px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "0px 0px -80px 0px" }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
//         >
//           Our work
//           <br />
//           <span className="bg-purple-600 bg-clip-text text-transparent">
//             speaks for us.
//           </span>
//         </motion.h2>

//         <motion.a
//           href="/contact"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="
//             hidden
//             shrink-0
//             rounded-full
//             border
//             border-white/15
//             bg-white/5
//             px-6
//             py-3
//             text-sm
//             font-medium
//             text-white
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:border-purple-400/50
//             hover:bg-white/10
//             sm:block
//           "
//         >
//           Start your project
//         </motion.a>
//       </div>

//       {/* Marquee block — mask fades cards into transparency at left/right edges */}
//       <div
//         className="relative"
//         style={{
//           maskImage:
//             "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 5%, black 16%, black 84%, rgba(0,0,0,0.25) 95%, transparent 100%)",
//           WebkitMaskImage:
//             "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 5%, black 16%, black 84%, rgba(0,0,0,0.25) 95%, transparent 100%)",
//         }}
//       >
//         <div className="relative z-10 flex flex-col">
//           <MarqueeRow items={topRow} direction="left" speed={42} />
//           <MarqueeRow items={bottomRow} direction="right" speed={46} />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────────
   Replace `src` with your own image/video poster for each project.
   `href` is where the card links when clicked — point it at the
   live site, case study page, or a video file.

   `aspect` controls the card's shape so the row doesn't look like
   a uniform grid. Each one is sized to match your real screenshot
   ratios so nothing gets over-cropped:
   - "phone"   -> 636 x 1378  source  (ratio ≈ 0.462, narrow + tall)
   - "tall"    -> 1098 x 1378 source  (ratio ≈ 0.797, medium + tall)
   - "desktop" -> 2880 x 1622 source  (ratio ≈ 1.776, wide + short)
   ────────────────────────────────────────────────────────────── */
type Aspect = "phone" | "tall" | "desktop";

const topRow: {
  title: string;
  tag: string;
  src: string;
  href: string;
  aspect: Aspect;
}[] = [
  {
    title: "Ganpatis.in",
    tag: "Shopify E-Commerce",
    src: "/Images/gnweb.webp",
    href: "https://ganpatis.in/",
    aspect: "desktop",
  },
  {
    title: "Chefspecial.in",
    tag: "Shopify E-Commerce",
    src: "/Images/chefmob.webp",
    href: "https://chefspecial.in/",
    aspect: "phone",
  },
  {
    title: "Csiboxing.com",
    tag: "Shopify E-Commerce",
    src: "/Images/csiweb.webp",
    href: "https://www.csiboxing.com/",
    aspect: "desktop",
  },
  {
    title: "Ganpatis.in",
    tag: "Shopify E-Commerce",
    src: "/Images/gntab.png",
    href: "https://ganpatis.in/",
    aspect: "tall",
  },
  {
    title: "Tiffinvala.com",
    tag: "Custom Web-App & Dashboard (Next.js, Express.js)",
    src: "/Images/tvmob.png",
    href: "https://www.tiffinvala.com/",
    aspect: "phone",
  },
];

const bottomRow: {
  title: string;
  tag: string;
  src: string;
  href: string;
  aspect: Aspect;
}[] = [
  {
    title: "Alustaad.com",
    tag: "Shopify E-Commerce",
    src: "/Images/altab.webp",
    href: "https://alustaad.com/",
    aspect: "tall",
  },
  {
    title: "Outlawdriftco.in",
    tag: "Shopify E-Commerce",
    src: "/Images/odcmob.png",
    href: "https://outlawdriftco.in/",
    aspect: "phone",
  },
  {
    title: "Chefspecial.in",
    tag: "Shopify E-Commerce",
    src: "/Images/chefweb.webp",
    href: "https://chefspecial.in/",
    aspect: "desktop",
  },
  {
    title: "Tiffinvala.com",
    tag: "Custom Web-App & Dashboard (Next.js, Express.js)",
    src: "/Images/tvmob1.png",
    href: "https://www.tiffinvala.com/",
    aspect: "phone",
  },
  {
    title: "Outlawdriftco.in",
    tag: "Shopify E-Commerce",
    src: "/Images/odcweb.webp",
    href: "https://outlawdriftco.in/",
    aspect: "desktop",
  },
];

/* Mobile sizes reduced so more cards are visible at once.
   Widths scaled proportionally to preserve each aspect ratio.
   md: breakpoint and above is unchanged from original. */
const ASPECT_CLASSES: Record<Aspect, string> = {
  phone: "h-[260px] w-[120px] md:h-[460px] md:w-[212px]",
  tall: "h-[260px] w-[207px] md:h-[460px] md:w-[367px]",
  desktop: "h-[260px] w-[462px] md:h-[460px] md:w-[817px]",
};

/* ──────────────────────────────────────────────────────────────
   CSS-driven marquee keyframes. Moving this off Framer Motion's
   JS animate() and onto a pure CSS animation lets the browser
   hand the whole loop to the compositor thread — this is the
   single biggest fix for the jitter, on both mobile and desktop.
   ────────────────────────────────────────────────────────────── */
const marqueeCss = `
@keyframes work-marquee-left {
  from { transform: translate3d(0,0,0); }
  to   { transform: translate3d(-50%,0,0); }
}
@keyframes work-marquee-right {
  from { transform: translate3d(-50%,0,0); }
  to   { transform: translate3d(0,0,0); }
}
.work-marquee-left,
.work-marquee-right {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.work-marquee-left { animation-name: work-marquee-left; }
.work-marquee-right { animation-name: work-marquee-right; }
`;

function ProjectCard({
  title,
  tag,
  src,
  href,
  aspect,
}: {
  title: string;
  tag: string;
  src: string;
  href: string;
  aspect: Aspect;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`
        group
        relative
        block
        shrink-0
        self-center
        overflow-hidden
        rounded-2xl
        bg-zinc-900
        ${ASPECT_CLASSES[aspect]}
      `}
      style={{
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.35), 0 25px 60px rgba(0,0,0,0.35), 0 0 60px rgba(124,58,237,0.06)",
      }}
    >
      {/* Image layer */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 768px) 820px, 680px"
          className="
            object-cover
            object-top
            opacity-90
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Vignette overlay — replaces the old mask-image approach.
          A plain painted gradient layer (transparent center, opaque
          zinc-900 at the edges) achieves the same soft-fade look
          without the compositing cost of CSS masking, which is
          especially slow on mobile Safari when repeated across many
          simultaneously-animating cards. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 55%, #18181b 100%)",
        }}
      />

      {/* Gradient scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

      {/* Soft inner glow ring on hover */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          boxShadow: "inset 0 0 40px rgba(168,85,247,0.18)",
        }}
      />

      <div className="absolute bottom-0 left-0 w-full p-3 md:p-5">
        <p
          className="
      text-[9px]
      leading-tight
      font-medium
      uppercase
      tracking-wide
      text-purple-300/80
      md:text-xs
      md:tracking-wider
    "
        >
          {tag}
        </p>

        <p
          className="
      mt-1
      text-sm
      font-semibold
      leading-tight
      text-white
      md:text-xl
    "
        >
          {title}
        </p>
      </div>
    </a>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: typeof topRow;
  direction: "left" | "right";
  speed: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        className={`flex w-max items-center gap-6 px-3 ${
          direction === "left" ? "work-marquee-left" : "work-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <ProjectCard key={`${item.title}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

function HexShape({
  size,
  strokeColor,
  fillColor,
  strokeWidth = 1.2,
}: {
  size: number;
  strokeColor: string;
  fillColor?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.866}
      viewBox="0 0 100 86.6"
      className="pointer-events-none"
    >
      <path
        d="M25 0 L75 0 L100 43.3 L75 86.6 L25 86.6 L0 43.3 Z"
        fill={fillColor ?? "none"}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default function Work() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <style>{marqueeCss}</style>

      {/* Richer multi-stop black -> purple-tinted gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.16) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(168,85,247,0.14) 0%, transparent 45%), linear-gradient(180deg, #000000 0%, #0a0512 35%, #0d0618 65%, #000000 100%)",
        }}
      />

      {/* Decorative hexagon accent shapes */}
      <div className="pointer-events-none absolute -right-16 -top-10 opacity-25 sm:right-6 sm:top-10">
        <HexShape
          size={180}
          strokeColor="rgba(168,85,247,0.55)"
          strokeWidth={1.5}
        />
      </div>
      <div className="pointer-events-none absolute -left-10 top-1/3 opacity-[0.14] sm:left-10">
        <HexShape size={120} strokeColor="rgba(124,58,237,0.6)" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-[12%] opacity-20">
        <HexShape size={90} strokeColor="rgba(192,132,252,0.6)" />
      </div>
      <div className="pointer-events-none absolute -bottom-16 -left-16 opacity-[0.16]">
        <HexShape
          size={220}
          strokeColor="rgba(124,58,237,0.5)"
          strokeWidth={1.5}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[8%] opacity-10">
        <HexShape size={60} strokeColor="rgba(216,180,254,0.7)" />
      </div>

      {/* Ambient purple glow — animated scale+opacity on a large blurred
          element is expensive to keep re-rasterizing on mobile GPUs,
          so mobile gets a small static glow instead; desktop/tablet
          keeps the original animated version. */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 9, repeat: Infinity }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          hidden
          h-175
          w-175
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)]
          blur-[60px]
          sm:block
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-56
          w-56
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(124,58,237,0.2)_0%,transparent_70%)]
          blur-2xl
          sm:hidden
        "
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-14 flex max-w-7xl items-end justify-between px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Our work
          <br />
          <span className="bg-purple-600 bg-clip-text text-transparent">
            speaks for us.
          </span>
        </motion.h2>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="
            hidden
            shrink-0
            rounded-full
            border
            border-white/15
            bg-white/5
            px-6
            py-3
            text-sm
            font-medium
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-purple-400/50
            hover:bg-white/10
            sm:block
          "
        >
          Start your project
        </motion.a>
      </div>

      {/* Marquee block — mask fades cards into transparency at left/right edges.
          This one mask is static (not animated) so it's cheap; it's the
          per-card masks that were removed above. */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 5%, black 16%, black 84%, rgba(0,0,0,0.25) 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 5%, black 16%, black 84%, rgba(0,0,0,0.25) 95%, transparent 100%)",
        }}
      >
        <div className="relative z-10 flex flex-col">
          <MarqueeRow items={topRow} direction="left" speed={42} />
          <MarqueeRow items={bottomRow} direction="right" speed={46} />
        </div>
      </div>
    </section>
  );
}
