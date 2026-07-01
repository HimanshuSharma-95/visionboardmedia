"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function MeetVisionXSection() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-10"
      aria-labelledby="visionx-heading"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Purple band — desktop only */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[38%] overflow-hidden bg-linear-to-br from-violet-600 via-purple-600 to-violet-700 lg:block">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-0 h-105 w-105 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,transparent_65%)] blur-[100px]"
        />
      </div>

      {/* ── DESKTOP (lg+) ── */}
      <div className="relative mx-auto hidden h-145 max-w-7xl grid-cols-1 px-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-12 xl:px-16">
        {/* LEFT */}
        <div className="relative order-1">
          {/* White area */}
          <div className="absolute left-0 top-0 flex h-[66%] w-full flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-purple-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
              YOUR GROWTH GUIDE
            </motion.span>

            <motion.h2
              id="visionx-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3rem] xl:text-[3.5rem]"
            >
              Meet our
              <br />
              <span className="bg-linear-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                AI Agent VisionX
              </span>
            </motion.h2>
          </div>

          {/* Purple area */}
          <div className="absolute bottom-0 left-0 flex h-[44%] w-full flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            >
              VisionX studies your audience, competitors and content around the
              clock, then guides you on exactly what to post, when to post and
              how to turn attention into customers.
            </motion.p>

            {/* Button — same style as mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="https://www.instagram.com/reel/DZh1VgAtmKl/?igsh=eGszeWF3OWt5bm5w"
                className="flex w-fit items-center gap-3 rounded-2xl border border-purple-200 bg-white px-5 py-3 transition-transform hover:scale-[1.02]"
              >
                <span className="text-sm font-medium text-zinc-700">
                  Meet our AI Agent
                </span>
                <FaInstagram className="h-5 w-5 text-purple-700" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-2 flex min-h-130 items-end justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-105 xl:w-137.5"
          >
            <div className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-[80px]" />
            <Image
              src="/Images/visionimh.png"
              alt="VisionX AI growth agent"
              width={900}
              height={1100}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE & TABLET (< lg) ── */}
      <div className="relative flex flex-col items-center px-6 sm:px-10 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-50 w-50 sm:h-60 sm:w-60"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/25 blur-[60px]" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-purple-200/70 bg-purple-50 shadow-[0_8px_40px_rgba(124,58,237,0.25)]">
            <Image
              src="/Images/visionimh.png"
              alt="VisionX AI growth agent"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-purple-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
          Your Growth Guide
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 max-w-md text-center text-3xl font-bold leading-[1.1] tracking-tight text-zinc-950 sm:text-4xl"
        >
          Meet our
          <br />
          <span className="bg-linear-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
            AI Agent VisionX
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-10 w-full max-w-xl overflow-hidden rounded-3xl bg-linear-to-br from-violet-600 via-purple-600 to-violet-700 px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[36px_36px]" />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,transparent_65%)] blur-[80px]"
          />

          <p className="relative text-center text-base leading-relaxed text-white/90 sm:text-lg">
            VisionX studies your audience, competitors and content around the
            clock, then guides you on exactly what to post, when to post and how
            to turn attention into customers.
          </p>

          <div className="relative mt-7 flex justify-center">
            <a
              href="https://www.instagram.com/reel/DZh1VgAtmKl/?igsh=eGszeWF3OWt5bm5w"
              className="flex w-fit items-center gap-3 rounded-2xl border border-purple-200 bg-white px-5 py-3 transition-transform hover:scale-[1.02]"
            >
              <span className="text-sm font-medium text-zinc-700">
                Meet our AI Agent
              </span>
              <FaInstagram className="h-5 w-5 text-purple-700" />
            </a>
          </div>
        </motion.div>

        <div className="h-16 sm:h-20" />
      </div>
    </section>
  );
}
