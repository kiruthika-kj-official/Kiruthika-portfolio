import { GraduationCap, Trophy, Briefcase, Calendar } from "lucide-react";

const timeline = [
  {
    year: "Sept 2023 – May 2027",
    title: "B.Tech – Artificial Intelligence & Data Science",
    institution: "Chettinad College of Engineering & Technology, Karur",
    description: "CGPA: 8.0",
  },
  {
    year: "June 2022 – May 2023",
    title: "Higher Secondary Education (12th)",
    institution: "Government Higher Secondary School, Kattuputhur",
    description: "Higher Secondary — 81%",
  },
];

const achievements = [
  "Presented a technical project at Kongu Engineering College, Erode.",
  "Participated in Project Presentation at KSR College of Engineering & Technology.",
  "Presented a PPT at Ramakrishna Engineering College.",
  "Participated in the 24-Hour National Level Hackathon (HackXtreme'26) at K. Ramakrishnan College of Engineering, Trichy.",
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

        {/* Achievements — vertical animated timeline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-10 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="relative pl-10 md:pl-14">
          {/* Animated rail */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-[2px] overflow-hidden rounded-full">
            <div className="w-full h-full bg-gradient-to-b from-primary via-primary/40 to-transparent animate-grow-line" />
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-8 rounded-full bg-primary blur-[2px] animate-trail-down" />
          </div>

          <ul className="space-y-6">
            {achievements.map((item, i) => (
              <li
                key={i}
                className="relative group scroll-reveal-left"
                style={{ transitionDelay: `${140 + i * 140}ms` }}
              >
                {/* Node */}
                <span className="absolute -left-[30px] md:-left-[42px] top-5 w-4 h-4 rounded-full border-2 border-primary bg-background flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                </span>
                {/* Connector */}
                <span className="absolute -left-[16px] md:-left-[28px] top-[26px] w-4 md:w-6 h-px bg-gradient-to-r from-primary/60 to-transparent" />

                <div className="relative glass-card p-5 overflow-hidden hover-lift flex items-start gap-3">
                  <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                  <div className="relative w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:rotate-6">
                    <Trophy size={15} className="text-primary" />
                  </div>
                  <div className="relative">
                    <span className="mono text-[9px] tracking-[0.35em] uppercase text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
