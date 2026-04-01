import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile-kiruthika.jpeg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block mono text-xs tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5">
            Available for opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Kiruthika K</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Pre-final year B.Tech student in AI & Data Science. I build intelligent systems and modern web applications with a passion for innovation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.5)] active:scale-[0.97]"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="/kiruthika_resume.docx"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-200 active:scale-[0.97]"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-[hsl(300,80%,65%)]/40 blur-lg animate-pulse-glow" />
            <img
              src={profileImg}
              alt="Kiruthika K"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border-2 border-glass-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
