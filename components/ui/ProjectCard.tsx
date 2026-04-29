"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon, AppStoreIcon, PlayStoreIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/data/projects";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative glass border border-white/[0.06] hover:border-white/[0.14] rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300"
    >
      {/* Image / gradient placeholder */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} flex-shrink-0 ${
          project.size === "large" ? "h-40 sm:h-[220px]" : "h-32 sm:h-[160px]"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <>
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            {/* Floating abstract shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-2xl border border-white/10 opacity-40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-16 h-16 rounded-xl border border-white/10 opacity-30"
              />
            </div>
          </>
        )}

        {/* Hover overlay with "View Project" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <GithubIcon style={{ width: 13, height: 13 }} />
              Source
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <AppStoreIcon style={{ width: 13, height: 13 }} />
              App Store
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <PlayStoreIcon style={{ width: 13, height: 13 }} />
              Play Store
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-slate-100 text-base group-hover:text-white transition-colors leading-snug">
            {project.title}
          </h3>
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
            className="text-slate-600 group-hover:text-slate-300 transition-colors flex-shrink-0 mt-0.5"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-slate-500 text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
