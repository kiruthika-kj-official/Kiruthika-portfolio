import { Folder } from "lucide-react";
import neuroImg from "@/assets/project-neuro-ai.jpg";
import healthImg from "@/assets/project-healthcare.jpg";
import bloodImg from "@/assets/project-bloodbank.jpg";
import chatImg from "@/assets/project-chatbot.jpg";

const projects = [
  {
    title: "Neuro AI: Smart Education System",
    description: "An AI-powered smart education platform that personalizes learning paths and content for students.",
    tools: ["Python", "AI", "React"],
    image: neuroImg,
  },
  {
    title: "Deep Learning Healthcare App",
    description: "Deep learning based healthcare application for early disease prediction and diagnosis support.",
    tools: ["Python", "Deep Learning", "TensorFlow"],
    image: healthImg,
  },
  {
    title: "Blood Bank Management System",
    description: "Full-stack web app to manage donors, requests and inventory for a blood bank.",
    tools: ["MERN", "MongoDB", "Node.js"],
    image: bloodImg,
  },
  {
    title: "Chatbot",
    description: "Conversational chatbot with intent recognition and friendly responses for user queries.",
    tools: ["Python", "NLP"],
    image: chatImg,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          Featured <span className="glow-text">Projects</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card p-0 hover-lift group scroll-reveal relative overflow-hidden"
              style={{ transitionDelay: `${120 + i * 120}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Folder size={16} className="text-primary" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
