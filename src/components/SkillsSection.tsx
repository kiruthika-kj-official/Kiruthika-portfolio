import { Braces, BarChart3, Layers, Wrench, Sparkles, BrainCircuit } from "lucide-react";

type Group = {
  title: string;
  tag: string;
  blurb: string;
  icon: any;
  hue: string;
  items: string[];
  wide?: boolean;
};

const groups: Group[] = [
  {
    title: "Programming Languages",
    tag: "01 · Code",
    blurb: "Core languages I build and query with every day.",
    icon: Braces,
    hue: "270",
    items: ["Python", "JavaScript (Basic)", "HTML", "CSS", "SQL"],
    wide: true,
  },
  {
    title: "AI & ML Concepts",
    tag: "02 · Intelligence",
    blurb: "Foundations of learning systems and evaluation.",
    icon: BrainCircuit,
    hue: "310",
    items: ["Machine Learning Basics", "Model Evaluation", "Neural Networks", "Computer Vision", "NLP"],
  },
  {
    title: "Data Analytics",
    tag: "03 · Insight",
    blurb: "Turning raw data into decisions and dashboards.",
    icon: BarChart3,
    hue: "220",
    items: ["Pandas", "NumPy", "Excel", "Power BI"],
  },
  {
    title: "Full Stack Development",
    tag: "04 · Build",
    blurb: "End-to-end web apps, trained through IBM SkillsBuild.",
    icon: Layers,
    hue: "270",
    items: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    tag: "05 · Workflow",
    blurb: "The everyday kit that keeps projects moving.",
    icon: Wrench,
    hue: "310",
    items: ["Git", "GitHub", "VS Code", "Jupyter"],
  },
  {
    title: "Soft Skills",
    tag: "06 · Human",
    blurb: "How I work with people, not just machines.",
    icon: Sparkles,
    hue: "220",
    items: ["Teamwork", "Communication", "Problem Solving", "Leadership"],
    wide: true,
  },
];

const interests = ["Data Analytics", "Python Development", "Power BI"];

export default function SkillsSection() {
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
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] bg-primary/20" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            AI &amp; Data Science foundations, full-stack engineering and analytics — used together, not in silos.
          </p>
        </div>

        {/* Area of interest strip */}
        <div className="flex flex-wrap items-center gap-3 mb-10 scroll-reveal" style={{ transitionDelay: "140ms" }}>
          <span className="mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
            Area of interest
          </span>
          {interests.map((it) => (
            <span
              key={it}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-foreground/90"
            >
              {it}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <article
              key={g.title}
              className={`group relative rounded-3xl border border-glass-border bg-card/50 backdrop-blur-xl p-7 overflow-hidden hover-lift scroll-reveal ${
                g.wide ? "lg:col-span-2" : ""
              }`}
              style={{ transitionDelay: `${180 + i * 90}ms` }}
            >
              {/* Glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-700"
                style={{ background: `hsl(${g.hue} 90% 60% / 0.45)` }}
              />
              {/* Sweep line */}
              <div
                className="absolute left-0 right-0 top-0 h-px opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, hsl(${g.hue} 90% 65%), transparent)` }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, hsl(${g.hue} 90% 55% / 0.25), hsl(${g.hue} 90% 55% / 0.05))`,
                      borderColor: `hsl(${g.hue} 90% 55% / 0.4)`,
                    }}
                  >
                    <g.icon size={20} style={{ color: `hsl(${g.hue} 90% 72%)` }} />
                  </div>
                  <span
                    className="mono text-[9px] tracking-[0.35em] uppercase"
                    style={{ color: `hsl(${g.hue} 90% 72%)` }}
                  >
                    {g.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{g.blurb}</p>

                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item, j) => (
                    <li
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full border bg-background/40 text-foreground/85 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: `hsl(${g.hue} 90% 55% / 0.3)`,
                        transitionDelay: `${j * 40}ms`,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
