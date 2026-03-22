import { GraduationCap, Trophy } from "lucide-react";

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
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Education</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="relative mb-16">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-glass-border" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className="relative pl-12 md:pl-16 scroll-reveal-left"
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]" />
                <span className="mono text-xs text-primary mb-1 block">{item.year}</span>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap size={18} className="text-primary" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-0.5">{item.institution}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Experience</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-8 scroll-reveal" style={{ transitionDelay: "80ms" }} />
        <div className="glass-card p-6 mb-16 scroll-reveal glow-border" style={{ transitionDelay: "160ms" }}>
          <span className="mono text-xs text-primary">July – Sep 2025</span>
          <h3 className="text-lg font-semibold mt-1">MERN Stack Intern — IBM</h3>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            Hands-on experience in full stack web development using MongoDB, Express, React, and Node.js.
          </p>
        </div>

        {/* Achievements */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-8 scroll-reveal" style={{ transitionDelay: "80ms" }} />
        <div className="space-y-3">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="glass-card p-4 flex items-start gap-3 scroll-reveal"
              style={{ transitionDelay: `${120 + i * 80}ms` }}
            >
              <Trophy size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
