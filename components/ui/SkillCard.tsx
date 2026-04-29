"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";

const categoryColors: Record<Skill["category"], string> = {
  mobile: "from-violet-600/20 to-purple-600/20 border-violet-500/20 hover:border-violet-500/40",
  backend: "from-cyan-600/20 to-teal-600/20 border-cyan-500/20 hover:border-cyan-500/40",
  tools: "from-amber-600/20 to-orange-600/20 border-amber-500/20 hover:border-amber-500/40",
  cloud: "from-rose-600/20 to-pink-600/20 border-rose-500/20 hover:border-rose-500/40",
  ai: "from-emerald-600/20 to-green-600/20 border-emerald-500/20 hover:border-emerald-500/40",
};

const categoryDotColors: Record<Skill["category"], string> = {
  mobile: "bg-violet-400",
  backend: "bg-cyan-400",
  tools: "bg-amber-400",
  cloud: "bg-rose-400",
  ai: "bg-emerald-400",
};

const categoryBarColors: Record<Skill["category"], string> = {
  mobile: "from-violet-500 to-purple-500",
  backend: "from-cyan-500 to-teal-500",
  tools: "from-amber-500 to-orange-500",
  cloud: "from-rose-500 to-pink-500",
  ai: "from-emerald-500 to-green-500",
};

export function SkillCard({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -6, scale: 1.03 }}
      className={`relative p-4 rounded-2xl border bg-gradient-to-br backdrop-blur-sm cursor-default group transition-all duration-300 ${
        categoryColors[skill.category]
      }`}
    >
      {/* Float animation on icon area */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
        className="mb-3"
      >
        <div className="flex items-center justify-between">
          <div
            className={`w-2.5 h-2.5 rounded-full ${categoryDotColors[skill.category]} opacity-70 group-hover:opacity-100 transition-opacity`}
          />
          <span className="text-xs text-slate-600 font-mono">{skill.proficiency}%</span>
        </div>
      </motion.div>

      <div className="font-semibold text-slate-200 text-sm mb-2 group-hover:text-white transition-colors">
        {skill.name}
      </div>

      {/* Proficiency bar */}
      <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${categoryBarColors[skill.category]}`}
        />
      </div>
    </motion.div>
  );
}
