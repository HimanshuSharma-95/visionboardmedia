"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   LOGOS DATA
───────────────────────────────────────────── */
export const ROW_SIZE = 14;
export const rows = Array.from({ length: 3 }, (_, r) =>
  Array.from({ length: ROW_SIZE }, (_, i) => {
    const n = r * ROW_SIZE + i + 1;
    return { id: n, src: `/logos/${n}.png`, alt: `Client logo ${n}` };
  }),
);

export const marqueeCss = `
@keyframes marquee-left {
  from { transform: translate3d(0,0,0); }
  to   { transform: translate3d(-50%,0,0); }
}
@keyframes marquee-right {
  from { transform: translate3d(-50%,0,0); }
  to   { transform: translate3d(0,0,0); }
}
`;

export function LogoItem({
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

export function MarqueeRow({
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
   TESTIMONIALS DATA
───────────────────────────────────────────── */
export const testimonials = [
  {
    initials: "RS",
    photo: "/Images/user.png",
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
    photo: "/Images/user.png",
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
    photo: "/Images/user.png",
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
    photo: "/Images/user.png",
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
    photo: "/Images/user.png",
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

/* ─────────────────────────────────────────────
   SHARED BACKGROUND WRAPPER
───────────────────────────────────────────── */
export function SharedBackground() {
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
