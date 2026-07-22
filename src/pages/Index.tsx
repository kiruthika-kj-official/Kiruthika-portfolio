import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Index() {
  const [entered, setEntered] = useState(false);
  useScrollReveal();

  useEffect(() => {
    if (entered) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <>
      {!entered && <WelcomeScreen onEnter={() => setEntered(true)} />}
      <ScrollProgress />
      <Navbar />
      <AnimatedBackground />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
