import { GraduationCap, Trophy, Briefcase, Calendar } from "lucide-react";

const timeline = [
  {
    year: "2023 – Present",
    title: "B.Tech – Artificial Intelligence and Data Science",
    institution: "Chettinad College of Engineering & Technology, Karur",
    description: "CGPA: 8.43 (Up to 5th Semester)",
  },
  {
    year: "2022 – 2023",
    title: "Higher Secondary Education (12th)",
    institution: "Government Higher Secondary School, Kattuputhur",
    description: "12th: 80% | 11th: 75%",
  },
];

const achievements = [
  "Won Third Prize in PPT Presentation at Ramakrishna Engineering College.",
  "Participated in Project Presentation at KSR College of Engineering & Technology, Tiruchengode.",
  "Presented a Project Explanation at Kongu Engineering College, Erode.",
  "Won Multiple District-Level Essay Competitions.",
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Education</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className="relative pl-12 md:pl-16 scroll-reveal-left group"
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)] group-hover:scale-150 transition-transform duration-300" />
                <div className="glass-card p-5 hover-lift">
                  <span className="mono text-xs text-primary mb-2 flex items-center gap-1.5">
                    <Calendar size={12} />
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Experience</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-8 scroll-reveal" style={{ transitionDelay: "80ms" }} />
        <div className="glass-card p-6 mb-16 scroll-reveal glow-border group hover-lift" style={{ transitionDelay: "160ms" }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Briefcase size={22} className="text-primary" />
            </div>
            <div>
              <span className="mono text-xs text-primary flex items-center gap-1.5">
                <Calendar size={12} />
                July – Sep 2025
              </span>
              <h3 className="text-lg font-semibold mt-1">MERN Stack Intern — IBM</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Hands-on experience in full stack web development using MongoDB, Express, React, and Node.js.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-8 scroll-reveal" style={{ transitionDelay: "80ms" }} />
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="glass-card p-5 flex items-start gap-3 scroll-reveal hover-lift group"
              style={{ transitionDelay: `${120 + i * 80}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Trophy size={14} className="text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
