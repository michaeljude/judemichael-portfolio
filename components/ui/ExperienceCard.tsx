"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Calendar } from "lucide-react";
import { Experience } from "@/data/experience";

export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 group"
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <motion.div
          whileInView={{ scale: [0.5, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-4 h-4 rounded-full border-2 z-10 mt-1 flex-shrink-0 transition-all duration-300 ${
            experience.current
              ? "bg-violet-500 border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              : "bg-slate-700 border-slate-600 group-hover:border-violet-500/50"
          }`}
        >
          {experience.current && (
            <span className="absolute inset-0 animate-ping rounded-full bg-violet-400/40" />
          )}
        </motion.div>
        {/* Connector line (rendered by parent) */}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="flex-1 mb-8 glass border border-white/[0.06] hover:border-violet-500/20 rounded-2xl p-4 sm:p-6 transition-all duration-300"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-100">{experience.role}</h3>
            <p className="text-violet-400 font-semibold text-sm">{experience.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={12} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-600">
              <MapPin size={11} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">{experience.description}</p>

        <ul className="space-y-2 mb-5">
          {experience.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <CheckCircle2
                size={14}
                className="text-violet-400/70 flex-shrink-0 mt-0.5"
              />
              {achievement}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.06] text-slate-400 text-xs font-mono hover:border-violet-500/30 hover:text-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
