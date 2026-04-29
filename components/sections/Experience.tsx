"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-violet-500/60" />
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mb-8 md:mb-14">
            My professional journey — building products people love.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent"
          />

          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
