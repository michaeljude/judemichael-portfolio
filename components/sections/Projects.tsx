"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ArrowUpRight, FileText } from "lucide-react";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-rose-500/60" />
            <span className="text-xs font-mono text-rose-400 tracking-widest uppercase">
              Projects
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-2">
                Selected <span className="gradient-text">Work</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg">
                A curated selection of apps shipped across fintech, e-commerce, and sports — built with Flutter, Android, and clean architecture.
              </p>
            </div>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/[0.08] hover:border-white/[0.18] text-slate-400 hover:text-slate-200 text-sm font-medium transition-all duration-200 flex-shrink-0"
            >
              <FileText size={15} />
              View Resume
              <ArrowUpRight size={13} />
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6 items-start">
          {/* Large featured card */}
          <div className="md:col-span-7">
            <ProjectCard project={featured[0]} delay={0} />
          </div>

          {/* Two medium cards stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {featured.slice(1, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.1 + 0.1} />
            ))}
          </div>
        </div>

        {/* Small cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1 + 0.3} />
          ))}
        </div>
      </div>
    </section>
  );
}
