"use client";

import { useEffect, useState, useRef } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

const words = [
  "AI Automation",
  "Branding",
  "Growth",
  "Strategy",
  "Digital Marketing",
  "Creative Vision",
  "Market Leaders",
];

export default function VbmLine() {
  const [show, setShow] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [tick, setTick] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // Generate particles client-side only — avoids SSR hydration mismatch
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 6,
      })),
    );

    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const loop = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      setTick(ts - startRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const s = tick / 1000;

  return (
    <>
      <section className="relative overflow-hidden bg-[#07030f] py-10 sm:py-16 md:py-24">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute left-[-10%] top-[-20%] h-87.5 w-87.5 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute right-[-10%] bottom-[-10%] h-75 w-75 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.4) 1px,transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Particles — only rendered after client mount */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-purple-400/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Rotating ring — desktop only */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: 480,
              height: 480,
              transform: `translate(-50%,-50%) rotate(${s * 3}deg)`,
            }}
          >
            <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
              <circle
                cx="240"
                cy="240"
                r="238"
                stroke="rgba(139,92,246,0.07)"
                strokeWidth="1"
                strokeDasharray="4 12"
              />
            </svg>
          </div>
        </div>

        {/* Main content */}
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-20">
            {/* LEFT — Brand */}
            <div
              className="mb-6 md:mb-0 md:w-56 lg:w-64 shrink-0"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(-40px)",
                transition: "opacity .8s ease, transform .8s ease",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 w-px shrink-0 bg-linear-to-b from-purple-500 via-purple-400 to-transparent"
                  style={{ height: 80 }}
                />
                <div>
                  <div className="relative overflow-hidden inline-block">
                    <p className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white leading-tight">
                      Vision Board
                    </p>
                    <span
                      className="shine pointer-events-none absolute inset-y-0 left-[-80%] w-10 rotate-20"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                      }}
                    />
                  </div>
                  <p
                    className="text-xl sm:text-2xl font-black uppercase tracking-widest leading-tight"
                    style={{
                      WebkitTextStroke: "1px rgba(168,85,247,0.7)",
                      color: "transparent",
                    }}
                  >
                    Media
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Quote */}
            <div
              className="flex-1"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(30px)",
                transition: "opacity .9s ease .15s, transform .9s ease .15s",
              }}
            >
              <div
                className="font-serif text-purple-500/15 leading-none select-none"
                style={{ fontSize: "clamp(50px,10vw,100px)", lineHeight: 0.85 }}
              >
                &ldquo;
              </div>

              <h2
                className="font-black text-white leading-[1.06] tracking-tight -mt-2 sm:-mt-3"
                style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
              >
                Building Ambitious
                <br />
                <span
                  style={{
                    WebkitTextFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                    backgroundImage:
                      "linear-gradient(90deg,#c084fc,#a855f7,#7c3aed)",
                  }}
                >
                  Brands
                </span>{" "}
                Into Market
                <br />
                Leaders.
              </h2>

              <div
                className="text-right font-serif text-purple-500/10 leading-none select-none"
                style={{ fontSize: "clamp(35px,7vw,80px)", lineHeight: 0.7 }}
              >
                &rdquo;
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div
            className="mt-8 sm:mt-10 md:mt-14"
            style={{ opacity: show ? 1 : 0, transition: "opacity 1s ease .6s" }}
          >
            <div className="h-px w-full bg-linear-to-r from-transparent via-purple-600/40 to-transparent mb-5" />
            <div className="relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-12 z-10"
                style={{
                  background: "linear-gradient(90deg,#07030f,transparent)",
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 z-10"
                style={{
                  background: "linear-gradient(270deg,#07030f,transparent)",
                }}
              />
              <div className="ticker-track flex gap-7 items-center">
                {[...words, ...words].map((w, i) => (
                  <span key={i} className="shrink-0 flex items-center gap-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300/50 whitespace-nowrap">
                      {w}
                    </span>
                    <span className="text-purple-600/40 text-xs">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .shine {
          animation: shine 4s ease-in-out infinite;
        }
        @keyframes shine {
          0% {
            transform: translateX(-200%) rotate(20deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(500%) rotate(20deg);
            opacity: 0;
          }
        }
        .particle {
          animation: drift ease-in-out infinite;
        }
        @keyframes drift {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-18px) scale(1.4);
            opacity: 0.6;
          }
        }
        .ticker-track {
          animation: ticker 22s linear infinite;
          width: max-content;
        }
        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
