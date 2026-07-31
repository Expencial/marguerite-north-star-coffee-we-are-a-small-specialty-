import { useEffect } from "react";

export function useRevealOnScroll(rootSelector = ".site") {
  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (items.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      for (const item of items) {
        item.classList.add("is-revealed");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    for (const item of items) {
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, [rootSelector]);
}
