"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = [];

    const context = gsap.context(() => {
      gsap.fromTo(
        ".siteHeaderInner",
        { autoAlpha: 0, y: -14 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );

      gsap.utils.toArray("[data-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: Math.min(index * 0.04, 0.18),
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true
            }
          }
        );
      });
    });

    document.querySelectorAll("[data-tilt]").forEach((element) => {
      const xTo = gsap.quickTo(element, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(element, "y", { duration: 0.35, ease: "power3.out" });
      const rotateXTo = gsap.quickTo(element, "rotateX", { duration: 0.35, ease: "power3.out" });
      const rotateYTo = gsap.quickTo(element, "rotateY", { duration: 0.35, ease: "power3.out" });

      function handleMove(event) {
        const rect = element.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 10;
        const rotateX = (0.5 - py) * 10;

        xTo((px - 0.5) * 6);
        yTo((py - 0.5) * 4);
        rotateXTo(rotateX);
        rotateYTo(rotateY);
        element.style.setProperty("--pointer-x", `${px * 100}%`);
        element.style.setProperty("--pointer-y", `${py * 100}%`);
      }

      function handleLeave() {
        xTo(0);
        yTo(0);
        rotateXTo(0);
        rotateYTo(0);
        element.style.setProperty("--pointer-x", "50%");
        element.style.setProperty("--pointer-y", "50%");
      }

      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseleave", handleLeave);
      cleanup.push(() => {
        element.removeEventListener("mousemove", handleMove);
        element.removeEventListener("mouseleave", handleLeave);
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cleanup.forEach((fn) => fn());
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
