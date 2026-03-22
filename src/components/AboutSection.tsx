export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          About <span className="glow-text">Me</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-8 scroll-reveal" style={{ transitionDelay: "80ms" }} />
        <div className="glass-card p-8 md:p-10 scroll-reveal glow-border" style={{ transitionDelay: "160ms" }}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Pre-final year B.Tech student in Artificial Intelligence and Data Science at Chettinad College of Engineering & Technology, Karur. I'm seeking opportunities to apply my technical skills, problem-solving ability, and innovation in real-world projects. With hands-on experience in MERN Stack development through my IBM internship, I'm passionate about building impactful applications that solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
}
