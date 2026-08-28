import { Award, BadgeCheck, ExternalLink, Calendar, Code2, Trophy } from "lucide-react";
import ibmCert from "@/assets/IBM_certificate.pdf.asset.json";
import nptelCert from "@/assets/neural_networks_nptel_certificate.pdf.asset.json";
import pythonCert from "@/assets/python_basic_certificate.pdf.asset.json";
import hackathonCert from "@/assets/24_hour_hackthon_certificate.jpeg.asset.json";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  tag: string;
  hue: string;
  url: string;
  icon: any;
  detail?: string;
  highlight?: boolean;
};

const certs: Cert[] = [
  {
    title: "Neural Networks for Computer Vision & NLP",
    issuer: "NPTEL · IIT",
    date: "Jan – Apr 2026",
    tag: "Elite + Silver",
    hue: "270",
    url: nptelCert.url,
    icon: Award,
    detail:
      "A 12-week course on CNNs, computer vision and natural language processing — completed with an Elite + Silver distinction (score 84).",
    highlight: true,
  },
  {
    title: "Front-End Development",
    issuer: "IBM SkillsBuild",
    date: "2026",
    tag: "Frontend",
    hue: "220",
    url: ibmCert.url,
    icon: Code2,
  },
  {
    title: "24-Hour National Hackathon — HackXtreme'26",
    issuer: "K. Ramakrishnan College of Engineering",
    date: "Apr 2026",
    tag: "Hackathon",
    hue: "310",
    url: hackathonCert.url,
    icon: Trophy,
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2026",
    tag: "Programming",
    hue: "270",
    url: pythonCert.url,
    icon: BadgeCheck,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(310,90%,55%)]/5 blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 scroll-reveal">
          <span className="w-10 h-px bg-primary" />
          <span className="mono text-[10px] tracking-[0.5em] uppercase text-primary">
            05 · Credentials
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 scroll-reveal" style={{ transitionDelay: "80ms" }}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Certifications & <br />
            <span className="gradient-text italic">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs">
            Verified certificates — click any card to open the original document.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl border border-glass-border bg-card/50 backdrop-blur-xl p-6 overflow-hidden hover-lift scroll-reveal block ${
                c.highlight ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${120 + i * 90}ms` }}
            >
              {/* Corner sheen */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                style={{ background: `hsl(${c.hue} 90% 60% / 0.4)` }}
              />
              {/* Left rail */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(180deg, hsl(${c.hue} 90% 60%), transparent)` }}
              />

              <div className="relative flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{
                      background: `hsl(${c.hue} 90% 55% / 0.12)`,
                      borderColor: `hsl(${c.hue} 90% 55% / 0.35)`,
                    }}
                  >
                    <c.icon size={18} style={{ color: `hsl(${c.hue} 90% 70%)` }} />
                  </div>
                  <span
                    className="mono text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color: `hsl(${c.hue} 90% 75%)`,
                      borderColor: `hsl(${c.hue} 90% 55% / 0.35)`,
                      background: `hsl(${c.hue} 90% 55% / 0.06)`,
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{c.issuer}</p>

                {c.detail && (
                  <p className="text-sm text-muted-foreground/90 leading-relaxed mb-6">{c.detail}</p>
                )}

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-glass-border/60">
                  <span className="mono text-[10px] tracking-widest text-muted-foreground flex items-center gap-1.5">
                    <Calendar size={11} />
                    {c.date}
                  </span>
                  <span className="text-[11px] text-primary/70 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    View <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
