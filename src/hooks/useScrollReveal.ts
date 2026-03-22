import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
