import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "File Upload App",
    description: "A web application for uploading and managing files with a clean user interface and efficient backend processing.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
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
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          My <span className="glow-text">Projects</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card p-6 hover-lift group scroll-reveal"
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="mono text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
