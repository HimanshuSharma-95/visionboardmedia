"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Globe } from "lucide-react";

import CursorGlow from "./CursorGlow";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-10 sm:pt-28 lg:pt-0">
      <CursorGlow />

      {/* Grid */}

      <div
        className="
        absolute

        inset-0

        bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]

        bg-size-[50px_50px]
      "
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],

          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 8,

          repeat: Infinity,
        }}
        className="
        absolute

        left-1/2

        top-[42%]

        h-212.5

        w-212.5

        -translate-x-1/2

        -translate-y-1/2

        rounded-full

        bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_70%)]

        blur-[45px]
      "
      />

      {/* Floating Cards */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
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

bg-white/80

px-3 py-2

shadow-xl

backdrop-blur-xl

transition-all duration-300

hover:-translate-y-1

hover:scale-105

hover:bg-white/90

hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]
"
      >
        <FaInstagram size={18} className="text-purple-600" />

        <span className="hidden text-sm font-medium text-zinc-700 sm:block">
          Social Media
        </span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
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

  bg-white/80

  px-3

  py-2

  shadow-xl

  backdrop-blur-xl

  transition-all

  duration-300

  hover:-translate-y-1

  hover:scale-105

  hover:bg-white/90

  hover:shadow-[0_20px_60px_rgba(34,197,94,0.18)]

  sm:right-6

  md:right-10

  lg:right-[8%]
"
      >
        <FaWhatsapp size={18} className="text-green-600" />

        <span className="hidden text-sm font-medium text-zinc-700 sm:block">
          WhatsApp Leads
        </span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
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

  bg-white/80

  px-3

  py-2

  shadow-xl

  backdrop-blur-xl

  transition-all

  duration-300

  hover:-translate-y-1

  hover:scale-105

  hover:bg-white/90

  hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]

  lg:left-auto

  lg:right-[8%]

  lg:translate-x-0
"
      >
        <Globe size={18} className="text-purple-600" />

        <span className="hidden text-sm font-medium text-zinc-700 sm:block">
          Websites Development
        </span>
      </motion.div>

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
          initial={{
            opacity: 0,

            y: 20,
          }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          //   className="m"
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
          initial={{
            opacity: 0,

            y: 30,
          }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
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
          <span className="relative inline-block">
            {/*
              Animated highlight behind "Grow online":
              1) thin underline grows left -> right (scaleX 0 -> 1, origin left)
              2) underline grows in height, covering the text (height 12% -> 100%)
              3) holds briefly while text is fully highlighted
              4) shrinks back down to a thin underline (height 100% -> 12%)
              5) underline sweeps out right -> left (scaleX 1 -> 0, origin right) and disappears
              6) pauses 1.6s (repeatDelay), then the whole sequence repeats

              The text itself is two stacked layers:
              - a normal dark base layer (always visible)
              - a white "inverted" layer clipped from the BOTTOM up, using the
                exact same height keyframes as the bar below. So only the
                portion of each letter currently covered by the purple bar
                shows white -- e.g. when the bar is at 40% height, only the
                bottom 40% of each letter is white, the top 60% stays dark.
            */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, height: "12%" }}
              animate={{
                scaleX: [0, 1, 1, 1, 1, 0],
                height: ["12%", "12%", "100%", "100%", "12%", "12%"],
                originX: [0, 0, 0, 1, 1, 1],
              }}
              transition={{
                duration: 6.5,
                times: [0, 0.22, 0.4, 0.62, 0.78, 1],
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: "easeInOut",
              }}
              className="
                absolute

                bottom-0

                left-0

                z-0

                w-full

                rounded-sm

                bg-linear-to-r

                from-purple-600

                to-violet-500
              "
            />

            {/* Base layer: always-dark text */}
            <span className="relative z-10 text-zinc-950">Grow online</span>

            {/* Inverted layer: white text, clipped from the bottom up to
                match the bar's current height % at every instant */}
            <motion.span
              aria-hidden="true"
              initial={{ clipPath: "inset(88% 0% 0% 0%)" }}
              animate={{
                clipPath: [
                  "inset(88% 0% 0% 0%)", // 0%    bar at 12% height -> top 88% clipped away
                  "inset(88% 0% 0% 0%)", // 22%   bar still 12%
                  "inset(0% 0% 0% 0%)", // 40%   bar at 100% -> nothing clipped, fully white
                  "inset(0% 0% 0% 0%)", // 62%   bar still 100% (hold)
                  "inset(88% 0% 0% 0%)", // 78%   bar back to 12%
                  "inset(88% 0% 0% 0%)", // 100%  bar at 12%, sweep-out done
                ],
              }}
              transition={{
                duration: 6.5,
                times: [0, 0.22, 0.4, 0.62, 0.78, 1],
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: "easeInOut",
              }}
              className="absolute inset-0 z-20 text-white"
            >
              Grow online
            </motion.span>
          </span>{" "}
          with systems
          <br />
          <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
            that actually convert.
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,

            y: 30,
          }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 1,
          }}
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
          initial={{
            opacity: 0,

            y: 30,
          }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
          mt-12

          flex

          flex-col

          gap-4

          sm:flex-row
        "
        >
          <div className="flex flex-wrap gap-4 justify-center">
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
