import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Sparkles, Database, BarChart3, FileText, Figma, Image as ImageIcon, Braces, Cpu, Users, MessageSquare, Puzzle, Crown } from "lucide-react";

type Skill = { name: string; icon: any; level: number };
type Group = {
  key: string;
  title: string;
  tag: string;
  blurb: string;
  icon: any;
  hue: string; // hsl hue
  skills: Skill[];
};

const groups: Group[] = [
  {
    key: "code",
    title: "Technical Stack",
    tag: "Engineering",
    blurb: "Building intelligent, data-driven systems end to end.",
    icon: Code2,
    hue: "270",
    skills: [
      { name: "Python", icon: Braces, level: 88 },
      { name: "MERN Stack", icon: Code2, level: 80 },
      { name: "MySQL", icon: Database, level: 82 },
      { name: "Power BI", icon: BarChart3, level: 70 },
      { name: "MS Office", icon: FileText, level: 90 },
    ],
  },
  {
    key: "design",
    title: "Design Craft",
    tag: "Visual",
    blurb: "Turning ideas into elegant, human-centered interfaces.",
    icon: Palette,
    hue: "310",
    skills: [
      { name: "Figma", icon: Figma, level: 92 },
      { name: "Canva", icon: ImageIcon, level: 95 },
      { name: "Photoshop", icon: ImageIcon, level: 72 },
      { name: "Prototyping", icon: Cpu, level: 85 },
    ],
  },
  {
    key: "soft",
    title: "Human Skills",
    tag: "Mindset",
    blurb: "The soft edges that make hard work land.",
    icon: Sparkles,
    hue: "220",
    skills: [
      { name: "Leadership", icon: Crown, level: 88 },
      { name: "Communication", icon: MessageSquare, level: 90 },
      { name: "Problem Solving", icon: Puzzle, level: 92 },
      { name: "Teamwork", icon: Users, level: 94 },
    ],
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState<string>("code");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const current = groups.find((g) => g.key === active)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
      />
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-30 transition-colors duration-700"
        style={{ background: `hsl(${current.hue} 90% 55% / 0.25)` }}
      />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 scroll-reveal">
          <span className="w-10 h-px bg-primary" />
          <span className="mono text-[10px] tracking-[0.5em] uppercase text-primary">
            04 · Capabilities
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Skills that <span className="gradient-text italic">compose</span>
            <br /> a whole practice.
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs">
            A fluid stack of engineering, design and communication — used together, not in silos.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-8 scroll-reveal" style={{ transitionDelay: "160ms" }}>
          {groups.map((g) => {
            const isActive = g.key === active;
            return (
              <button
                key={g.key}
                onClick={() => setActive(g.key)}
                className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-500 ${
                  isActive
                    ? "border-primary/60 text-foreground bg-primary/10 shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
                    : "border-glass-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                <g.icon size={14} className={isActive ? "text-primary" : ""} />
                {g.title}
                <span className={`mono text-[9px] tracking-widest ${isActive ? "text-primary/80" : "text-muted-foreground/60"}`}>
                  {String(g.skills.length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
          {/* Left: narrative */}
          <div
            key={current.key + "-l"}
            className="relative rounded-3xl overflow-hidden border border-glass-border bg-card/50 backdrop-blur-xl p-8 md:p-10 animate-fade-in"
          >
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40"
              style={{ background: `hsl(${current.hue} 90% 60% / 0.4)` }}
            />
            <div className="relative">
              <div className="mono text-[10px] tracking-[0.4em] uppercase text-primary/70 mb-6">
                — {current.tag}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: `linear-gradient(135deg, hsl(${current.hue} 90% 55% / 0.25), hsl(${current.hue} 90% 55% / 0.05))`,
                    borderColor: `hsl(${current.hue} 90% 55% / 0.4)`,
                  }}
                >
                  <current.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{current.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
                {current.blurb}
              </p>

              {/* Big proficiency ring */}
              <div className="flex items-center gap-6">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" strokeWidth="6" fill="none" className="stroke-primary/10" />
                    <circle
                      cx="50" cy="50" r="42"
                      strokeWidth="6" fill="none"
                      strokeLinecap="round"
                      style={{
                        stroke: `hsl(${current.hue} 90% 60%)`,
                        strokeDasharray: 2 * Math.PI * 42,
                        strokeDashoffset:
                          2 * Math.PI * 42 *
                          (1 - (current.skills.reduce((a, s) => a + s.level, 0) / current.skills.length) / 100),
                        transition: "stroke-dashoffset 1s ease-out",
                        filter: `drop-shadow(0 0 8px hsl(${current.hue} 90% 60% / 0.6))`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">
                      {Math.round(current.skills.reduce((a, s) => a + s.level, 0) / current.skills.length)}
                    </span>
                    <span className="mono text-[9px] tracking-widest text-muted-foreground">AVG %</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground max-w-[180px]">
                  Across {current.skills.length} focus areas — measured by hours, shipped work, and real projects.
                </div>
              </div>
            </div>
          </div>

          {/* Right: skill bars */}
          <div
            key={current.key + "-r"}
            className="rounded-3xl border border-glass-border bg-card/50 backdrop-blur-xl p-8 md:p-10 animate-fade-in"
          >
            <ul className="space-y-6">
              {current.skills.map((s, i) => (
                <li key={s.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center border"
                        style={{
                          background: `hsl(${current.hue} 90% 55% / 0.12)`,
                          borderColor: `hsl(${current.hue} 90% 55% / 0.3)`,
                        }}
                      >
                        <s.icon size={14} style={{ color: `hsl(${current.hue} 90% 70%)` }} />
                      </span>
                      <span className="text-sm font-medium">{s.name}</span>
                    </div>
                    <span className="mono text-[11px] text-muted-foreground group-hover:text-primary transition-colors">
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-[6px] rounded-full bg-primary/5 overflow-hidden relative">
                    <div
                      className="h-full rounded-full relative"
                      style={{
                        width: visible ? `${s.level}%` : "0%",
                        background: `linear-gradient(90deg, hsl(${current.hue} 90% 45%), hsl(${current.hue} 90% 65%))`,
                        boxShadow: `0 0 12px hsl(${current.hue} 90% 60% / 0.6)`,
                        transition: `width 1.1s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`,
                      }}
                    >
                      <span className="absolute right-0 top-0 bottom-0 w-8 bg-white/40 blur-md" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
