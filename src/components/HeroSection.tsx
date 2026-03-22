import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <span className="inline-block mono text-xs tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5">
            Available for opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Your Name</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Full Stack Developer & UI/UX Designer. I craft modern web experiences with clean code and thoughtful design.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.5)] active:scale-[0.97]"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-200 active:scale-[0.97]"
            >
              Contact Me <Download size={16} />
            </a>
          </div>
        </div>

        {/* Right — profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-[hsl(260,100%,65%)]/40 blur-lg animate-pulse-glow" />
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border-2 border-glass-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
