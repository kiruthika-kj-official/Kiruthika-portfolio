import { ArrowRight, Mail, Sparkles, Download } from "lucide-react";
import profileImg from "@/assets/profile-kiruthika.jpeg";

const RESUME_URL = "/Kiruthika_K_Resume.pdf";

export default function HeroSection() {
  const downloadResume = async () => {
    try {
      const response = await fetch(RESUME_URL);
      if (!response.ok) throw new Error("Resume file not found");

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "Kiruthika_K_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(300,80%,65%)]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 mono text-xs tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5 scroll-reveal animate-pulse-glow">
            <Sparkles size={14} />
            Available for Opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight scroll-reveal" style={{ transitionDelay: "100ms" }}>
            Hi, I'm{" "}
            <span className="gradient-text">Kiruthika</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground/90 scroll-reveal" style={{ transitionDelay: "150ms" }}>
            UI/UX <span className="glow-text">Designer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed scroll-reveal" style={{ transitionDelay: "200ms" }}>
            I create modern, user-friendly and visually engaging digital experiences using Figma, Canva and frontend technologies.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 scroll-reveal" style={{ transitionDelay: "300ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_-2px_hsl(var(--primary)/0.7)] active:scale-[0.97] hover:scale-105"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/50 transition-all duration-200 active:scale-[0.97] hover:scale-105"
            >
              Contact Me <Mail size={16} />
            </a>
            <button
              type="button"
              onClick={downloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary transition-all duration-200 active:scale-[0.97] hover:scale-105"
            >
              Resume <Download size={16} />
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end scroll-reveal" style={{ transitionDelay: "400ms" }}>
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/50 to-[hsl(300,80%,65%)]/50 blur-xl animate-pulse-glow opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-[hsl(300,80%,65%)]/30 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
            <img
              src={profileImg}
              alt="Kiruthika - UI/UX Designer"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border-2 border-primary/30 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
