import { Figma, Palette, Image as ImageIcon, Code2, Braces, Sparkles, Database, BarChart3, FileText, Users, MessageSquare, Puzzle, Crown, Cpu } from "lucide-react";

const groups = [
  {
    title: "Technical Stack",
    tag: "01 · CODE",
    icon: Code2,
    accent: "from-primary/40 to-[hsl(270,90%,55%)]/20",
    skills: [
      { name: "Python", icon: Braces, level: 88 },
      { name: "MERN Stack", icon: Code2, level: 80 },
      { name: "MySQL", icon: Database, level: 82 },
      { name: "Power BI", icon: BarChart3, level: 70 },
      { name: "MS Office", icon: FileText, level: 90 },
    ],
  },
  {
    title: "Design Craft",
    tag: "02 · DESIGN",
    icon: Palette,
    accent: "from-[hsl(310,90%,65%)]/40 to-[hsl(280,80%,55%)]/20",
    skills: [
      { name: "Figma", icon: Figma, level: 92 },
      { name: "Canva", icon: ImageIcon, level: 95 },
      { name: "Photoshop", icon: ImageIcon, level: 72 },
      { name: "Prototyping", icon: Cpu, level: 85 },
    ],
  },
  {
    title: "Human Skills",
    tag: "03 · SOFT",
    icon: Sparkles,
    accent: "from-[hsl(220,90%,65%)]/40 to-[hsl(270,90%,55%)]/20",
    skills: [
      { name: "Leadership", icon: Crown, level: 88 },
      { name: "Communication", icon: MessageSquare, level: 90 },
      { name: "Problem Solving", icon: Puzzle, level: 92 },
      { name: "Teamwork", icon: Users, level: 94 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[hsl(310,80%,65%)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 scroll-reveal">
          <span className="w-8 h-px bg-primary" />
          <span className="mono text-[10px] tracking-[0.4em] uppercase text-primary">Capabilities</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14 scroll-reveal" style={{ transitionDelay: "80ms" }}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="mono text-xs text-muted-foreground max-w-sm">
            // A blend of engineering rigor, design intuition and human collaboration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((group, gi) => (
            <div
              key={group.title}
              className="relative scroll-reveal group"
              style={{ transitionDelay: `${160 + gi * 120}ms` }}
            >
              {/* Glow ring */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${group.accent} opacity-40 group-hover:opacity-100 blur-sm transition-all duration-500`} />

              <div className="relative glass-card p-6 rounded-2xl h-full overflow-hidden bg-card/70">
                {/* Corner tick */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
                {/* Number background */}
                <span className="absolute -bottom-6 -right-2 text-[120px] font-black leading-none text-primary/[0.04] select-none">
                  0{gi + 1}
                </span>

                {/* Tag */}
                <div className="mono text-[9px] tracking-[0.35em] text-primary/70 mb-4">
                  {group.tag}
                </div>

                {/* Title with icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.accent} flex items-center justify-center border border-primary/30 shadow-[inset_0_0_20px_hsl(var(--primary)/0.15)]`}>
                    <group.icon size={20} className="text-foreground" />
                  </div>
                  <h3 className="font-bold text-xl tracking-tight">{group.title}</h3>
                </div>

                {/* Skills list w/ bars */}
                <ul className="space-y-3.5">
                  {group.skills.map((s, si) => (
                    <li key={s.name} className="group/skill">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <s.icon size={13} className="text-primary" />
                          <span className="text-[13px] font-medium">{s.name}</span>
                        </div>
                        <span className="mono text-[10px] text-primary/70">{s.level}%</span>
                      </div>
                      <div className="h-[3px] rounded-full bg-primary/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(310,90%,65%)] transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_hsl(var(--primary))]"
                          style={{
                            width: `${s.level}%`,
                            transitionDelay: `${si * 100}ms`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 scroll-reveal" style={{ transitionDelay: "520ms" }}>
          {[
            { k: "10+", v: "Projects Built" },
            { k: "3+", v: "Internships" },
            { k: "500+", v: "Hours in Figma" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v} className="glass-card p-4 text-center hover-lift">
              <div className="text-2xl font-bold gradient-text">{s.k}</div>
              <div className="mono text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
