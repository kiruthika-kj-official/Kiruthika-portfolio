import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "kj.kiruthika2006@gmail.com", href: "mailto:kj.kiruthika2006@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6383375257", href: "tel:+916383375257" },
  { icon: MapPin, label: "Location", value: "Kattuputhur, Trichy – 621207", href: null },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (placeholder)");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          Get in <span className="glow-text">Touch</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 scroll-reveal" style={{ transitionDelay: "120ms" }}>
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, internship opportunities, or just a friendly chat. I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-3 group hover-lift glass-card p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4 scroll-reveal glow-border" style={{ transitionDelay: "200ms" }}>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-primary" />
              <span className="font-semibold text-sm">Send a Message</span>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-200 hover:scale-[1.02]"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
