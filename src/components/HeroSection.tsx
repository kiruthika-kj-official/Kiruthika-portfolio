import { ArrowRight, Download, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile-kiruthika.jpeg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 mono text-xs tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 scroll-reveal animate-pulse-glow">
            <Sparkles size={14} />
            Available for opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight scroll-reveal" style={{ transitionDelay: "100ms" }}>
            Hi, I'm{" "}
            <span className="gradient-text">Kiruthika K</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed scroll-reveal" style={{ transitionDelay: "200ms" }}>
            Pre-final year B.Tech student in AI & Data Science. I build intelligent systems and modern web applications with a passion for innovation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 scroll-reveal" style={{ transitionDelay: "300ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.5)] active:scale-[0.97] hover:scale-105"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="/Kiruthika_K_Resume.pdf"
              download="Kiruthika_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-200 active:scale-[0.97] hover:scale-105 hover:border-primary/40"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end scroll-reveal" style={{ transitionDelay: "400ms" }}>
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 to-[hsl(300,80%,65%)]/40 blur-xl animate-pulse-glow group-hover:opacity-100 opacity-60 transition-opacity duration-500" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-[hsl(300,80%,65%)]/20 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
            <img
              src={profileImg}
              alt="Kiruthika K"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border-2 border-glass-border group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
