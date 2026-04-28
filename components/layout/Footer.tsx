import { Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

const socialLinks = [
  { icon: GithubIcon, href: profile.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: profile.social.facebook, label: "Facebook" },
  { icon: TwitterIcon, href: profile.social.twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
            <Terminal size={12} className="text-violet-400" />
          </div>
          <span className="text-sm text-slate-500 font-mono">
            {profile.name.toLowerCase().replace(" ", ".")}
            <span className="text-violet-400">.dev</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] transition-all duration-200"
            >
              <Icon style={{ width: 16, height: 16 }} />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 flex items-center gap-1">
          Built with <Heart size={11} className="text-rose-500 fill-rose-500" /> using Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
