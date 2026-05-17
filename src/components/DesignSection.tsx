import { Palette, Figma, Image as ImageIcon, Sparkles, Layers, PenTool } from "lucide-react";

const designs = [
  {
    title: "Mobile App UI Concept",
    description: "Clean, modern mobile interface design exploring intuitive navigation and bold typography.",
    tools: ["Figma", "Prototyping"],
    icon: Layers,
    gradient: "from-[hsl(270,80%,60%)] to-[hsl(300,80%,65%)]",
  },
  {
    title: "Brand Poster Design",
    description: "Eye-catching promotional posters crafted with strong visual hierarchy and color theory.",
    tools: ["Canva", "Photoshop"],
    icon: ImageIcon,
    gradient: "from-[hsl(260,80%,60%)] to-[hsl(280,90%,65%)]",
  },
  {
    title: "Landing Page Wireframe",
    description: "User-focused wireframes and high-fidelity mockups for web landing experiences.",
    tools: ["Figma", "UX Research"],
    icon: Figma,
    gradient: "from-[hsl(280,80%,55%)] to-[hsl(260,80%,65%)]",
  },
  {
    title: "Social Media Creatives",
    description: "Engaging social media post designs aligned with brand identity and audience appeal.",
    tools: ["Canva", "Illustration"],
    icon: PenTool,
    gradient: "from-[hsl(290,80%,60%)] to-[hsl(270,80%,65%)]",
  },
];

const process = [
  { step: "01", title: "Research", desc: "Understand users & goals" },
  { step: "02", title: "Wireframe", desc: "Sketch structure & flow" },
  { step: "03", title: "Design", desc: "Craft visual identity" },
  { step: "04", title: "Prototype", desc: "Test & iterate" },
];

export default function DesignSection() {
  return (
    <section id="design" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-3 scroll-reveal">
          <Sparkles size={16} className="text-primary" />
          <span className="mono text-xs tracking-widest uppercase text-primary">Creative Work</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal" style={{ transitionDelay: "60ms" }}>
          UI / UX <span className="glow-text">Design</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "120ms" }} />

        {/* Design cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {designs.map((d, i) => (
            <div
              key={d.title}
              className="glass-card p-0 hover-lift group scroll-reveal overflow-hidden"
              style={{ transitionDelay: `${160 + i * 100}ms` }}
            >
              {/* Visual preview */}
              <div className={`relative h-44 bg-gradient-to-br ${d.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <d.icon size={64} className="text-white/90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.description}</p>
                <div className="flex flex-wrap gap-2">
                  {d.tools.map((t) => (
                    <span key={t} className="mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design process */}
        <div className="flex items-center gap-2 mb-8 scroll-reveal">
          <Palette size={20} className="text-primary" />
          <h3 className="text-xl font-semibold">My Design Process</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="glass-card p-6 hover-lift scroll-reveal group relative overflow-hidden"
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              <span className="mono text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {p.step}
              </span>
              <h4 className="font-semibold mt-2">{p.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
