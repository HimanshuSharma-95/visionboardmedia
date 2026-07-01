"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { User, Mail, Phone, Send, CheckCircle2, MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "918847266521"; // country code 91 (India) + number

/* ------------------------------------------------------------------ */
/*  Motion presets — same easing/timing as the rest of the site        */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

/* ------------------------------------------------------------------ */
/*  Background: light bg + purple grid                                 */
/* ------------------------------------------------------------------ */

function GridBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute -top-40 right-[-10%] h-120 w-120 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] h-104 w-104 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Form field shell                                                   */
/* ------------------------------------------------------------------ */

function FieldShell({
  icon: Icon,
  label,
  htmlFor,
  error,
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-[#0c0a14]"
      >
        {label}
      </label>
      <div className="group relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 z-10 h-4.5 w-4.5 -translate-y-1/2 text-purple-600 transition-colors duration-200 group-focus-within:text-purple-700" />
        )}
        {children}
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-500">{error}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact info cards                                                 */
/* ------------------------------------------------------------------ */

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border border-purple-900/10 bg-white/60 backdrop-blur-xl px-6 py-6 text-left shadow-[0_8px_40px_rgba(124,58,237,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/30 hover:shadow-[0_16px_56px_rgba(124,58,237,0.2)]"
    >
      {/* Soft gradient wash that fades in on hover */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-500/[0.07] via-transparent to-purple-700/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Radial glow behind the icon */}
      <div className="pointer-events-none absolute -left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top accent line */}
      <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-purple-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon badge */}
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/20 to-purple-700/10 border border-purple-500/20 shadow-[0_4px_16px_rgba(168,85,247,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(168,85,247,0.3)] group-hover:from-purple-500 group-hover:to-purple-700">
        <Icon className="h-6 w-6 text-purple-600 transition-colors duration-500 group-hover:text-white" />
      </div>

      <div className="relative min-w-0">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-600/70">
          {label}
        </p>
        <p className="truncate text-sm sm:text-base font-semibold text-[#0c0a14] transition-colors duration-500 group-hover:text-purple-700">
          {value}
        </p>
        <div className="mt-2 h-px w-8 bg-linear-to-r from-purple-500 to-purple-700 opacity-40 transition-all duration-500 group-hover:w-14 group-hover:opacity-100" />
      </div>
    </motion.a>
  );
}

const inputBase =
  "w-full rounded-xl border bg-white/70 backdrop-blur-sm pr-4 py-3.5 text-sm text-[#0c0a14] placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-purple-500/10";

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

type FormState = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(heroRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) {
      next.phone = "Enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) {
      next.phone = "Enter a valid phone number.";
    }
    if (!form.description.trim()) next.description = "Add a short description.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      "Hi Vision Board Media! I'd like to get in touch.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `Description: ${form.description}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbfaff]">
      <GridBackdrop />

      <section className="relative px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div
          ref={heroRef}
          className="relative mx-auto max-w-3xl text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/6 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-purple-700"
            >
              Get In Touch
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#0c0a14] mb-5"
            >
              Let's turn your vision{" "}
              <span className="bg-linear-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                into measurable results.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto"
            >
              Share a few details below and we'll get back to you on WhatsApp —
              fast, direct, no waiting on email.
            </motion.p>
          </motion.div>
        </div>

        {/* Form card */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="relative mx-auto max-w-2xl"
        >
          <div className="relative rounded-3xl border border-purple-900/10 bg-white/60 backdrop-blur-xl p-6 sm:p-10 shadow-[0_8px_40px_rgba(124,58,237,0.08)]">
            {/* Gradient accent line on top */}
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-purple-400/60 to-transparent" />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-purple-500/15 to-purple-700/10 border border-purple-500/20">
                  <CheckCircle2 className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#0c0a14] mb-2">
                  Opening WhatsApp…
                </h3>
                <p className="text-sm text-gray-600 max-w-sm leading-relaxed mb-6">
                  Your message is ready in a new tab. If it didn't open, your
                  browser may have blocked the pop-up — tap the button below to
                  try again.
                </p>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-purple-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_28px_4px_rgba(168,85,247,0.35)] hover:-translate-y-0.5"
                >
                  Open WhatsApp Again
                </button>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Edit message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FieldShell
                    icon={User}
                    label="Name"
                    htmlFor="name"
                    error={errors.name}
                  >
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={update("name")}
                      className={`${inputBase} pl-11 ${
                        errors.name ? "border-rose-300" : "border-purple-900/10"
                      }`}
                    />
                  </FieldShell>

                  <FieldShell
                    icon={Phone}
                    label="Phone"
                    htmlFor="phone"
                    error={errors.phone}
                  >
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={update("phone")}
                      className={`${inputBase} pl-11 ${
                        errors.phone
                          ? "border-rose-300"
                          : "border-purple-900/10"
                      }`}
                    />
                  </FieldShell>
                </div>

                <FieldShell
                  icon={Mail}
                  label="Email"
                  htmlFor="email"
                  error={errors.email}
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={update("email")}
                    className={`${inputBase} pl-11 ${
                      errors.email ? "border-rose-300" : "border-purple-900/10"
                    }`}
                  />
                </FieldShell>

                <FieldShell
                  label="Description"
                  htmlFor="description"
                  error={errors.description}
                >
                  <textarea
                    id="description"
                    placeholder="Tell us a bit about what you need and anything else that helps…"
                    value={form.description}
                    onChange={update("description")}
                    rows={5}
                    className={`${inputBase} resize-none pl-4 pt-3.5 ${
                      errors.description
                        ? "border-rose-300"
                        : "border-purple-900/10"
                    }`}
                  />
                </FieldShell>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-purple-500 to-purple-700 px-6 py-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(168,85,247,0.25)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(168,85,247,0.4)] hover:-translate-y-0.5"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
                    {/* <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> */}
                  </span>
                </motion.button>

                <p className="text-center text-xs text-gray-500">
                  Clicking "Contact Now" opens WhatsApp in a new tab with your
                  details pre-filled.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="relative mx-auto mt-20 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <ContactInfoCard
            icon={Mail}
            label="Email"
            value="info@visionboardmedia.in"
            href="mailto:hello@visionboardmedia.com"
          />
          <ContactInfoCard
            icon={Phone}
            label="Phone"
            value="+91 96531 11532"
            href="tel:+11234567890"
          />
          <ContactInfoCard
            icon={MapPin}
            label="Address"
            value="Jalandhar, Punjab"
            href="tel:+11234567890"
          />
        </motion.div>
      </section>
    </main>
  );
}
