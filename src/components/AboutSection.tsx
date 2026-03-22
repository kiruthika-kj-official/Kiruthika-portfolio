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
            I'm a passionate developer who loves building modern, performant web applications.
            With a strong foundation in both front-end and back-end technologies, I strive to
            create intuitive user experiences backed by clean, maintainable code. When I'm not
            coding, you'll find me exploring new technologies, contributing to open source, or
            sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
