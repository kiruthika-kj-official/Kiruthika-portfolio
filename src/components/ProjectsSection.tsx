import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Neuro AI: Smart Education System",
    description: "An AI-powered smart education platform that personalizes learning experiences and adapts to each student's needs using intelligent algorithms.",
    tech: ["React", "Node.js", "AI", "MongoDB"],
  },
  {
    title: "Deep Learning Based Healthcare Application",
    description: "An AI-powered healthcare application leveraging deep learning models for medical data analysis and prediction.",
    tech: ["Python", "Deep Learning", "TensorFlow"],
  },
  {
    title: "Blood Bank Management System",
    description: "A comprehensive system for managing blood bank operations including donor records, inventory, and distribution tracking.",
    tech: ["Python", "MySQL", "Flask"],
  },
  {
    title: "Chatbot",
    description: "An intelligent conversational chatbot capable of understanding user queries and providing relevant responses.",
    tech: ["Python", "NLP", "AI"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          My <span className="glow-text">Projects</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card p-6 hover-lift group scroll-reveal relative overflow-hidden"
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Folder size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors pt-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all hover:gap-2.5"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:gap-2.5"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
