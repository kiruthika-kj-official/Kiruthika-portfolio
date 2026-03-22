import { GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2022 – 2024",
    title: "Master of Computer Science",
    institution: "University Placeholder",
    description: "Specialized in AI and full stack development.",
  },
  {
    year: "2018 – 2022",
    title: "Bachelor of Technology",
    institution: "College Placeholder",
    description: "Graduated with honors, focused on software engineering.",
  },
  {
    year: "2016 – 2018",
    title: "Higher Secondary Education",
    institution: "School Placeholder",
    description: "Science stream with computer science elective.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          <span className="glow-text">Education</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-glass-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className="relative pl-12 md:pl-16 scroll-reveal-left"
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                {/* Dot */}
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
      </div>
    </section>
  );
}
