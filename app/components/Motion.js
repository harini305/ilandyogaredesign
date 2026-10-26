"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Calm entrance for the hero and a single gentle reveal per section block.
// Nothing is hidden unless motion is allowed (see the inline script in page.js).
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        "[data-hero-image]",
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power1.out" },
        0
      ).fromTo(
        "[data-hero-item]",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        0.15
      );

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
