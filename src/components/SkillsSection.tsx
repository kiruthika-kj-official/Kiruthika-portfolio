import { Code2, Database, Layout, BarChart3, Users, MessageSquare, Lightbulb, UsersRound } from "lucide-react";

const techSkills = [
  { name: "Python", icon: Code2, level: 85 },
  { name: "MERN Stack", icon: Layout, level: 80 },
  { name: "MySQL", icon: Database, level: 75 },
  { name: "Power BI", icon: BarChart3, level: 60 },
];

const softSkills = [
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Teamwork", icon: UsersRound },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          My <span className="glow-text">Skills</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <h3 className="text-xl font-semibold mb-6 scroll-reveal" style={{ transitionDelay: "120ms" }}>
          Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {techSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-5 hover-lift cursor-default scroll-reveal"
              style={{ transitionDelay: `${160 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <skill.icon size={20} className="text-primary" />
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(260,100%,65%)] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 scroll-reveal">Soft Skills</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-5 text-center hover-lift cursor-default scroll-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <skill.icon size={28} className="text-primary mx-auto mb-3" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
