import { Linkedin, Mail, Figma } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/kiruthika-k-676547352/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kj.kiruthika2006@gmail.com", label: "Email" },
  { icon: Figma, href: "#", label: "Figma" },
];

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-10 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          Designed by <span className="text-primary font-semibold">Kiruthika</span> © 2026
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
