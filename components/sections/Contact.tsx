"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const links = [
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "@michaeljude",
    href: profile.social.github,
    color: "hover:border-slate-400/30 hover:text-slate-200",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "Jude Michael de Roma",
    href: profile.social.linkedin,
    color: "hover:border-blue-400/30 hover:text-blue-300",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    handle: "michaeljude02",
    href: profile.social.facebook,
    color: "hover:border-blue-500/30 hover:text-blue-400",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    handle: "@michaeljude",
    href: profile.social.twitter,
    color: "hover:border-sky-400/30 hover:text-sky-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-violet-500/60" />
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px w-8 bg-violet-500/60" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text">remarkable</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a project in
            mind or just want to connect — my inbox is always open.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-6 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-base sm:text-lg shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-300 mb-10"
          >
            <Mail size={20} />
            Say Hello
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 mt-4">
            {links.map(({ icon: Icon, label, handle, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className={`flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-xl glass border border-white/[0.06] text-slate-400 text-sm font-medium transition-all duration-200 group w-full sm:w-auto ${color}`}
              >
                <Icon style={{ width: 16, height: 16 }} />
                <span>{handle}</span>
                <ArrowUpRight
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
