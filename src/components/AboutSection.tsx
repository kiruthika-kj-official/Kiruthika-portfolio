import { User, Palette, Figma, Sparkles } from "lucide-react";

const highlights = [
  { icon: Figma, label: "Design Tools", detail: "Figma, Canva, XD" },
  { icon: Palette, label: "Creative", detail: "UI/UX Designer" },
  { icon: Sparkles, label: "Passionate", detail: "Visual Thinker" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          About <span className="glow-text">Me</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-10 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-card p-8 md:p-10 glow-border scroll-reveal" style={{ transitionDelay: "160ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <User size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Kiruthika</h3>
                <p className="text-sm text-muted-foreground">UI/UX & Creative Designer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              I am a passionate UI/UX and creative designer interested in building visually appealing and user-friendly digital experiences. I enjoy creating wireframes, interfaces and modern responsive designs using Figma and frontend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              My focus is on crafting intuitive flows, clean visual hierarchy, and pixel-perfect interfaces that delight users and tell a clear product story.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card p-4 hover-lift group scroll-reveal"
                style={{ transitionDelay: `${240 + i * 100}ms` }}
              >
                <item.icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
