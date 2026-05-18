import { Figma, Palette, Image as ImageIcon, PenTool, Layers, Layout, Lightbulb, Search, Smartphone, Code2, FileCode, Braces, Sparkles, Database, BarChart3, FileText, Users, MessageSquare, Puzzle, Crown } from "lucide-react";

const groups = [
  {
    title: "Technical",
    icon: Code2,
    skills: [
      { name: "Python", icon: Braces },
      { name: "MERN Stack", icon: Code2 },
      { name: "MySQL", icon: Database },
      { name: "Power BI (Basics)", icon: BarChart3 },
      { name: "MS Office (Word, Excel)", icon: FileText },
    ],
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", icon: Figma },
      { name: "Canva", icon: ImageIcon },
      { name: "Adobe Photoshop (Basic)", icon: ImageIcon },
      { name: "Illustrator", icon: PenTool },
      { name: "Adobe XD", icon: Layers },
    ],
  },
  {
    title: "UI/UX Skills",
    icon: Layout,
    skills: [
      { name: "Wireframing", icon: Layout },
      { name: "Prototyping", icon: Layers },
      { name: "User Research", icon: Search },
      { name: "Responsive Design", icon: Smartphone },
      { name: "Design Thinking", icon: Lightbulb },
    ],
  },
  {
    title: "Frontend Skills",
    icon: Code2,
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
    skills: [
      { name: "Leadership", icon: Crown },
      { name: "Communication", icon: MessageSquare },
      { name: "Problem Solving", icon: Puzzle },
      { name: "Teamwork", icon: Users },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[hsl(300,80%,65%)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-3 scroll-reveal">
          <Sparkles size={16} className="text-primary" />
          <span className="mono text-xs tracking-widest uppercase text-primary">What I Do</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal" style={{ transitionDelay: "60ms" }}>
          My <span className="glow-text">Skills</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "120ms" }} />

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group, gi) => (
            <div
              key={group.title}
              className="glass-card p-6 hover-lift scroll-reveal group relative overflow-hidden"
              style={{ transitionDelay: `${160 + gi * 120}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-[hsl(300,80%,65%)]/20 flex items-center justify-center border border-primary/30">
                    <group.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((s, i) => (
                    <li
                      key={s.name}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/40 border border-glass-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:translate-x-1"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <s.icon size={16} className="text-primary shrink-0" />
                      <span className="text-sm font-medium">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
