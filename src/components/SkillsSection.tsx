import { Code2, Database, Layout, BarChart3, Users, MessageSquare, Lightbulb, UsersRound, Zap, Palette, FileText } from "lucide-react";
import { useState } from "react";

const techSkills = [
  { name: "Python", icon: Code2, level: 85, color: "from-primary to-[hsl(280,90%,65%)]" },
  { name: "MERN Stack", icon: Layout, level: 80, color: "from-[hsl(260,80%,60%)] to-primary" },
  { name: "MySQL", icon: Database, level: 75, color: "from-primary to-[hsl(300,70%,60%)]" },
  { name: "Power BI (Basics)", icon: BarChart3, level: 60, color: "from-[hsl(280,80%,55%)] to-[hsl(260,80%,65%)]" },
  { name: "UI / UX (Figma, Canva, Photoshop)", icon: Palette, level: 70, color: "from-[hsl(290,80%,60%)] to-[hsl(260,80%,65%)]" },
  { name: "MS Office (Word, Excel)", icon: FileText, level: 70, color: "from-[hsl(270,80%,55%)] to-[hsl(290,80%,65%)]" },
];

const softSkills = [
  { name: "Leadership", icon: Users, description: "Leading teams and driving results" },
  { name: "Communication", icon: MessageSquare, description: "Clear and effective communicator" },
  { name: "Problem Solving", icon: Lightbulb, description: "Analytical and creative thinker" },
  { name: "Teamwork", icon: UsersRound, description: "Collaborative team player" },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          My <span className="glow-text">Skills</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        {/* Technical Skills */}
        <div className="flex items-center gap-2 mb-8 scroll-reveal" style={{ transitionDelay: "120ms" }}>
          <Zap size={20} className="text-primary" />
          <h3 className="text-xl font-semibold">Technical Skills</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {techSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-6 hover-lift cursor-default scroll-reveal group relative overflow-hidden"
              style={{ transitionDelay: `${160 + i * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-500 ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon size={20} className="text-primary" />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="mono text-sm text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="flex items-center gap-2 mb-8 scroll-reveal">
          <Users size={20} className="text-primary" />
          <h3 className="text-xl font-semibold">Soft Skills</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-6 text-center hover-lift cursor-default scroll-reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <skill.icon size={26} className="text-primary" />
              </div>
              <span className="font-semibold text-sm block mb-1">{skill.name}</span>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
