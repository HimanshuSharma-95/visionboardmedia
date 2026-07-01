"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { rows, marqueeCss, MarqueeRow, SharedBackground } from "./shared";

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
