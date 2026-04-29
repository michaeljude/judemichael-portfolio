"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills, skillCategories, type Skill } from "@/data/skills";
import { SkillCard } from "@/components/ui/SkillCard";
import { AnimatedSection, StaggerContainer } from "@/components/animations/AnimatedSection";

const categoryLabels: Record<Skill["category"], string> = {
  mobile: "Mobile",
  backend: "Backend & APIs",
  tools: "Tools",
  cloud: "Cloud & DevOps",
  ai: "AI & LLMs",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Skill["category"] | "all">("all");

  const filtered =
    activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500/60" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mb-10">
            Technologies I work with daily, organized by domain. Hover to see proficiency
            levels.
          </p>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            <motion.button
              onClick={() => setActiveCategory("all")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-slate-100 text-slate-900"
                  : "glass border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/[0.15]"
              }`}
            >
              All
            </motion.button>
            {skillCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white"
                    : "glass border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/[0.15]"
                }`}
              >
                {categoryLabels[cat]}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.04} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
