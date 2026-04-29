"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Download, Code2, Layers, Zap, Users } from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Maintainable, tested, documented" },
  { icon: Layers, label: "Systems Thinker", desc: "Architecture that scales" },
  { icon: Zap, label: "Performance", desc: "Fast by default, optimized by design" },
  { icon: Users, label: "Team Player", desc: "Mentor, collaborator, communicator" },
];

export default function Profile() {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setShowPhoto((prev) => !prev), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-8 bg-violet-500/60" />
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">About</span>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Avatar + stats */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Avatar placeholder */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="aspect-square rounded-3xl glass border border-white/[0.08] overflow-hidden relative">
                  {/* Cycling avatar: initials ↔ photo */}
                  <AnimatePresence mode="wait">
                    {showPhoto ? (
                      <motion.div
                        key="photo"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src="/images/avatar.jpg"
                          alt={profile.name}
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="initials"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-cyan-600/10 flex items-center justify-center"
                      >
                        <div className="text-6xl sm:text-8xl font-bold gradient-text select-none">
                          {profile.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-violet-500/20 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center">
                      <Code2 size={18} className="text-violet-400" />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 glass rounded-full border border-emerald-500/20 text-xs text-emerald-400 font-medium z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open for Commissions & Freelance
                  </div>
                </div>

                {/* Floating skill badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-4 sm:-right-4 top-12 glass border border-white/[0.1] rounded-2xl px-4 py-3 text-center shadow-xl"
                >
                  <div className="text-2xl font-bold gradient-text-violet">7+</div>
                  <div className="text-xs text-slate-500 mt-0.5">Years Exp.</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute left-4 sm:-left-4 bottom-16 glass border border-white/[0.1] rounded-2xl px-4 py-3 text-center shadow-xl"
                >
                  <div className="text-2xl font-bold gradient-text">7</div>
                  <div className="text-xs text-slate-500 mt-0.5">Projects</div>
                </motion.div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mt-6 max-w-sm mx-auto lg:mx-0">
                {profile.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="glass border border-white/[0.06] rounded-2xl p-4 text-center hover:border-violet-500/20 transition-colors"
                  >
                    <div className="text-xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Bio */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight">
                  Crafting digital{" "}
                  <span className="gradient-text">experiences</span>
                  <br />
                  that matter
                </h2>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 mb-6">
                  <MapPin size={14} className="text-violet-400" />
                  <span>{profile.location}</span>
                  <span className="text-slate-700">·</span>
                  <Mail size={14} className="text-violet-400" />
                  <span>{profile.email}</span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-base">{profile.bio}</p>
              <p className="text-slate-500 leading-relaxed text-sm">{profile.bioExtended}</p>

              {/* Highlights grid */}
              <StaggerContainer className="grid grid-cols-2 gap-3 pt-2" staggerDelay={0.08}>
                {highlights.map(({ icon: Icon, label, desc }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="glass border border-white/[0.06] rounded-xl p-4 cursor-default hover:border-violet-500/20 transition-all duration-200 group"
                  >
                    <Icon
                      size={18}
                      className="text-violet-400 mb-2 group-hover:text-violet-300 transition-colors"
                    />
                    <div className="text-sm font-semibold text-slate-200 mb-0.5">{label}</div>
                    <div className="text-xs text-slate-500">{desc}</div>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Download CV button */}
              <motion.a
                href="/resume.pdf"
                download="Jude Michael de Roma - Resume.pdf"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/[0.1] hover:border-violet-500/30 text-slate-300 hover:text-slate-100 font-medium text-sm transition-all duration-200 group mt-2"
              >
                <Download
                  size={15}
                  className="group-hover:text-violet-400 transition-colors"
                />
                Download Resume
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
