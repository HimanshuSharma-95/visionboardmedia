"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Globe } from "lucide-react";

import CursorGlow from "./CursorGlow";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-20 sm:pt-28 lg:pt-0">
      {/* CursorGlow tracks mouse movement — only meaningful with a real
          cursor, and running it on touch devices wastes listeners/paints
          for zero visual benefit. Hidden below md. */}
      <div className="hidden md:block">
        <CursorGlow />
      </div>

      {/* Local, scoped CSS animations. These run on the compositor thread
          instead of being driven by Framer Motion's JS/rAF loop, which is
          what was causing the jitter — especially with several infinite
          animations competing with React re-renders on mobile CPUs. */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 1;
          }
        }
        .glow-pulse {
          animation: pulseGlow 8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes floatCard1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes floatCard2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        @keyframes floatCard3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .float-1 {
          animation: floatCard1 4s ease-in-out infinite;
        }
        .float-2 {
          animation: floatCard2 5s ease-in-out infinite;
        }
        .float-3 {
          animation: floatCard3 6s ease-in-out infinite;
        }

        @keyframes shimmerSweep {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .shimmer-text {
          background-image: linear-gradient(
            100deg,
            #09090b 30%,
            #9333ea 45%,
            #a855f7 50%,
            #9333ea 55%,
            #09090b 70%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmerSweep 4.5s linear infinite;
        }

        /* Respect users who've asked for reduced motion, and it also
           happens to be the cheapest possible mobile experience. */
        @media (prefers-reduced-motion: reduce) {
          .glow-pulse,
          .float-1,
          .float-2,
          .float-3,
          .shimmer-text {
            animation: none !important;
          }
        }
      `}</style>

      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]
        bg-size-[50px_50px]
      "
      />

      {/* Purple Glow — smaller + less blurred on mobile, where a large
          blurred, animated layer is one of the most expensive things a
          browser can paint every frame. Scales up to the original size/blur
          on larger screens. */}
      <div
        className="
        glow-pulse
        transform-gpu
        absolute
        left-1/2
        top-[42%]
        h-[280px]
        w-[280px]
        rounded-full
        bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_70%)]
        blur-xl
        sm:h-125
        sm:w-125
        sm:blur-2xl
        lg:h-212.5
        lg:w-212.5
        lg:blur-[45px]
      "
      />

      {/* Floating Cards — plain CSS transforms now (no backdrop-blur on
          mobile, since backdrop-filter is very costly to recompute on
          scroll/animation for phone GPUs). */}
      <div
        className="
        float-1
        transform-gpu
        absolute
        top-[15%]
        left-10
        sm:top-[24%]
        sm:left-5
        md:top-[26%]
        md:left-8
        lg:top-[30%]
        lg:left-[8%]
        xl:left-[10%]
        z-20
        flex items-center gap-2
        rounded-2xl
        border border-zinc-200
        bg-white/95
        px-3 py-2
        shadow-xl
        backdrop-blur-none
        transition-all duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-white/90
        hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]
        md:bg-white/80
        md:backdrop-blur-xl
      "
      >
        <FaInstagram size={18} className="text-purple-600" />

        <span className="hidden text-sm font-medium text-zinc-700 sm:block">
          Social Media
        </span>
      </div>

      <div
        className="
        float-2
        transform-gpu
        absolute
        right-7
        top-[22%]
        z-20
        flex
        items-center
        gap-2
        rounded-2xl
        border
        border-zinc-200
        bg-white/95
        px-3
        py-2
        shadow-xl
        backdrop-blur-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-white/90
        hover:shadow-[0_20px_60px_rgba(34,197,94,0.18)]
        sm:right-6
        md:right-10
        md:bg-white/80
        md:backdrop-blur-xl
        lg:right-[8%]
      "
      >
        <FaWhatsapp size={18} className="text-green-600" />

        <span className="hidden text-sm font-medium text-zinc-700 sm:block">
          WhatsApp Leads
        </span>
      </div>

      <div
        className="
        float-3
        transform-gpu
        absolute
        bottom-[28%]
        right-20
        z-20
        flex
        -translate-x-1/2
        items-center
        gap-2
        rounded-2xl
        border
        border-zinc-200
        bg-white/95
        px-3
        py-2
        shadow-xl
        backdrop-blur-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-white/90
        hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]
        md:bg-white/80
        md:backdrop-blur-xl
        lg:left-auto
        lg:right-[8%]
        lg:translate-x-0
      "
      >
        <Globe size={18} className="text-purple-600" />

        <span className="hidden text-sm font-medium text-zinc-700 sm:block">
          Websites Development
        </span>
      </div>

      {/* Content */}

      <div
        className="
        relative
        z-10
        flex
        w-full
        max-w-6xl
        flex-col
        items-center
        pt-10
        text-center
      "
      >
        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/vbmlogo.png"
            alt="Vision Board Media"
            width={500}
            height={150}
            priority
            className="
            h-auto
            w-55
            object-contain
            md:w-[320px]
            lg:w-100
          "
          />
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          max-w-5xl
          text-5xl
          font-bold
          leading-[1.05]
          tracking-tight
          text-zinc-950
          md:text-7xl
        "
        >
          {/* Shimmer replaces the old two-layer clipPath/height animation.
              That version animated `height` (a layout property — forces
              reflow every frame) and `clip-path` on two stacked absolutely
              positioned spans simultaneously, driven by Framer Motion's JS
              loop. This does the same "light sweeps through the text" effect
              with a single `background-position` animation, which is far
              cheaper for mobile GPUs and doesn't touch layout at all. */}
          <span className="shimmer-text">Grow online</span> with systems
          <br />
          <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
            that actually convert.
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          mt-8
          max-w-3xl
          text-lg
          leading-relaxed
          text-zinc-600
        "
        >
          Vision Board Media helps businesses grow online through websites,
          social media, content creation and marketing systems designed to
          generate customers and build long-term growth.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
          mt-12
          flex
          flex-col
          gap-4
          sm:flex-row
        "
        >
          <div className="flex flex-wrap gap-4 justify-center pb-10 ">
            <Link href="/contact">
              <button
                className="
        rounded-full
        bg-purple-600
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:bg-purple-500
      "
              >
                Book a Free Strategy Call
              </button>
            </Link>

            <Link href="/services">
              <button
                className="
        rounded-full
        border
        border-zinc-300
        bg-white
        px-8
        py-4
        font-medium
        text-zinc-900
        transition-all
        duration-300
        hover:bg-zinc-100
      "
              >
                Our Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
